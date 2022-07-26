const _Path = require('path')
const FS = require('fs');



const Title = 'Библиотека';
const Source =  GetArguments().Source;
const Output = GetArguments().Output;

const Library = '../Library';
const Regexps =
{
	'JS': /import '(.*?)'/g,
	'SCSS': /@import '(.*?)'/g
}



//



function GetArguments()
{
	return require('minimist')(process.argv.slice(2));
}

//

function Match(Code, Regexp)
{
	const Includes = [];

	for (let Iter of Code.matchAll(Regexp))
		if (!Includes.includes(Iter[1]))
			Includes.push(Iter[1]);

	return Includes;
}

function ReadFileSync(Path)
{
	return FS.readFileSync(Path).toString();
}

function WriteFile(Path, Content, Callback = () => {})
{
	FS.writeFile(Path, Content, Callback);
}

function WriteFileSync(Path, Content)
{
	FS.writeFileSync(Path, Content);
}

function CopyFileSync(From, To)
{
	FS.copyFileSync(From, To);
}

function GlobSync(Pattern)
{
	return require('glob').sync(Pattern, { absolute: true });
}

//

function Entry(Path, Regexp, Included = [])
{
	function Read(Path)
	{
		return ReadFileSync(_Path.resolve(__dirname, Path + '.js'));
	}

	const Code_This = Read(Path);
	for (let Include of Match(Code_This, /import '(.*?)'/g))
	{
		const DependencyPath = _Path.join(_Path.dirname(Path), Include);
		if (!Included.includes(DependencyPath))
			Entry(DependencyPath, Regexp, Included);
	};

	Included.push(Path + '.js');
	return Included;
};

function Lazy(Path, Regexp)
{
	function Swap(Befores, Me)
	{
		function IndexOf(Path)
		{
			for (let i = 0; i < Included.length; i++)
				if (_Path.relative(Path, Included[i]) === '')
					return i;
		}

		for (let Before of Befores)
			if (IndexOf(Before) > IndexOf(Me))
			{
				Included.splice(IndexOf(Before), 1);
				Included.splice(IndexOf(Me), 0, Before);
				i++;
			}
	}

	function R(Path)
	{
		const Code = ReadFileSync(Path);
		const Includes = Match(Code, Regexp).map(Value => _Path.resolve(Path, ('../' + Value)));

		Swap(Includes, Path);

		for (let Include of Includes)
			R(Include);
	}



	const Included = GlobSync(Path);
	let i;
	for (i = 0; i < Included.length; i++)
		R(Included[i]);
	return Included;
}

//

function GetSelectors(Code)
{
	const Selectors = [];

	for (let Group of Code.matchAll(/<([^ \/>]+).*?>/g))
	{
		const Tag = Group[1];
		if (!Selectors.includes(Tag))
			Selectors.push(Tag);
	};

	return Selectors;
}

//

function SCSS_To_CSS(Code)
{
	return require('node-sass').renderSync({ data: Code }).css.toString();
}

function UnCSS(Code, Selectors)
{
	return new Promise(function (Resolve)
	{
		require('uncss')
		(
			ReadFileSync(Source + '/Index.html'),
			{
				raw: Code,
				ignore: Selectors
			},
			(Error, Output) => Resolve(Code)
		)
	});
}

function UglifyCSS(Code)
{
	return Code;		// TO DO: Ломает тени и Textarea
	return require('uglifycss').processString(Code);
}

function PostCSS_Lowercase(Code)
{
	// return require('postcss')([ require('postcss-lowercase-text') ]);
}

function PostCSS_Autoprefix(Code)
{
	return require('postcss').sync([ require('autoprefixer') ])(Code);
}

function UglifyJS(Code)
{
	return require('uglify-js').minify(Code).code;
}

function UglifyHTML(Code)
{
	return Code.replace(/\t|\n/g, '').replace(/<!--.*-->/g, '').replace(/> </g, '><');

	// return require('html-minifier').minify
	// (
	// 	Code,
	// 	{
	// 		caseSensitive: true,
	// 		collapseBooleanAttributes: true,
	// 		collapseInlineTagWhitespace: true,
	// 		collapseWhitespace: true,
	// 		// conservativeCollapse: true,
	// 		continueOnParseError: true,
	// 		// preserveLineBreaks: true,
	// 		removeAttributeQuotes: true,
	// 		removeComments: true,
	// 		removeRedundantAttributes: true
	// 	}
	// );
}



//



function GetIcons(Names)
{
	const Output = {};

	const Promises = [];
	for (let Name of Names)
		Promises.push(new Promise((Resolve) =>
		{
			FS.readFile(`node_modules/@material-design-icons/svg/${Name}.svg`, (Error, Data) =>
			{
				Output[Name] = Data.toString().replace(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">`, '').replace('</svg>', '');
				Resolve();
			});
		}));

	return new Promise((Resolve) => Promise.all(Promises).then(() => Resolve(Output)));
}

function GetIconsList(Code)
{
	return Match(Code, /Icon="(.*?)"/g);
}

function Clear()
{
	FS.readdirSync(Output).forEach(File => FS.rmSync(`${Output}/${File}`));
}

function PackCSS()
{
	const Merged = Merge
	([
		...Lazy(`${Library}/**/*.scss`, Regexps.SCSS),
		...Lazy(`${Source}/*.scss`, Regexps.SCSS)
	]).replace(Regexps.SCSS, '');

	const CSS = SCSS_To_CSS(Merged).replace('@charset "UTF-8";', '');

	// PostCSS_Lowercase(CSS);

	const UnCSSed = CSS;

	const Uglified = UglifyCSS(UnCSSed);

	WriteFile(Output + '/Style.css', Uglified);
}

function PackJS()
{
	const Merged = Merge
	([
		...Lazy(`${Library}/**/*.js`, Regexps.JS),
		...Lazy(`${Source}/*.js`, Regexps.JS)		// TO DO
	]).replace(Regexps.JS, '');

	const Icons = GetIcons(GetIconsList(ReadFileSync(`${Source}/Index.html`) + Merged));

	Promise.all([Icons]).then((Values) =>
	{
		WriteFileSync
		(
			Output + '/Script.js',
			UglifyJS
			(
				Merged
				.replace(`{ /* ...Generator puts icons here... */ }`, JSON.stringify(Values[0]))
			)
			.replace(/>( |\n|\t)*?</g, '><')
			.replace(/ +/g, ' ')
			.replace(/\t/g, '')
		);
	})
}

function PackHTML()
{
	WriteFile
	(
		Output + '/Index.html',
		UglifyHTML
		(
			`<!DOCTYPE HTML>

			 <HTML Lang="RU" AutoLayout Direction="Vertical">
				<Head>
					<Meta CharSet="UTF-8">

					<Title>${Title}</Title>
					<Link Rel="Icon" Href="Icon.svg">

					<Meta Name="Viewport" Content="width=device-width, initial-scale=1, shrink-to-fit=no">

					<Link Rel="StyleSheet" Href="Style.css?${new Date().getTime()}">
				</Head>

				${ReadFileSync(`${Source}/Index.html`)}

				<Script Src='Script.js?${new Date().getTime()}'></Script>
			 </HTML>`
		)
	);
}

function PackIcon()
{
	// const { exec } = require('child_process');
	// exec(`favicons-generate --input "${Source}/Icon.svg" --output "${Output}"`);
}

function Merge(Paths)
{
	return Paths.map(Value => ReadFileSync(Value)).join('\n');
}

//

function Main()
{
	// Clear();
	PackCSS();
	PackJS();
	PackHTML();
	PackIcon();
}

Main();