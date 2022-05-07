class Overlay
{
	constructor(Type = 'Window')
	{
		this.Type = Type;
		this.Animation = true;

		if (Type === 'Window')
		{
			let HTML = `<Div Class='Overlay Window Center'>
						<Div Class='Background ${this.Animation ? 'Animation' : ''}'></Div>
						<Div Class='Content VeryRound Level-1'></Div>
					</Div>`;

			this.Element = HTMLToElement(HTML);
			this.Element.children[0].addEventListener('click', () => this.Close());
		}
		else if (Type === 'Fullscreen')
		{
			let HTML = `<Div Class='Overlay Fullscreen'></Div>`;

			this.Element = HTMLToElement(HTML);
			document.body.classList.add('BehindOverlay');
		};
	}

	Open()
	{
		document.body.append(this.Element);
	}

	Close()
	{
		this.Element.remove();

		if (this.Type === 'Fullscreen')
			document.body.classList.remove('BehindOverlay');
	}

	get Content()
	{
		if (this.Type === 'Window')
			return this.Element.children[1];
		else if (this.Type === 'Fullscreen')
			return this.Element;
	}
}