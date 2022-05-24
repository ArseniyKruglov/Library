class ProcessingEffect
{
	constructor(Element)
	{
		this.Element = Element;
	}

	Begin()
	{
		this.Element.classList.add('Processing');

		this.Fog = HTMLToElements(
			`<Div Class='Fog' AutoLayout Direction='Horizontal' AlignX='Center' AlignY='Center'>
				<Div Class='mdl-spinner mdl-js-spinner is-active'></Div>
			 </Div>`)[0];
		this.Element.append(this.Fog);
		componentHandler.upgradeDom();
		setTimeout(() =>  this.Fog.style.opacity = '75%', 0);
	}

	End()
	{
		this.Fog.style.opacity = '0%';
		setTimeout(() =>
		{
			this.Fog.remove();
			this.Element.classList.remove('Processing');
		}, 100);
	}

	Clean()
	{
		for (let Child of this.Element.children)
			if (Child !== this.ProgressBar && Child !== this.Fog)
				Child.remove();
	}
}