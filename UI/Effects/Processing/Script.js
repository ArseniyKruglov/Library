class ProcessingEffect
{
	constructor(Element)
	{
		this.Element = Element;
	}

	Begin()
	{
		this.Element.classList.add('Processing');

		this.Fog = HTMLToElements(`<Div Class='Fog'></Div>`)[0];
		this.Element.append(this.Fog);
		setTimeout(() =>  this.Fog.style.opacity = '75%', 0);

		this.ProgressBar = HTMLToElements(`<Div Class='mdl-progress mdl-js-progress mdl-progress__indeterminate'></Div>`)[0];
		this.Element.append(this.ProgressBar);
		componentHandler.upgradeDom();
	}

	End()
	{
		this.ProgressBar.remove();

		this.Fog.style.opacity = '0%';
		setTimeout(() =>
		{
			this.Fog.remove();
			this.Element.classList.remove('Processing');
		}, 500);
	}

	Clean()
	{
		for (let Child of this.Element.children)
			if (Child !== this.ProgressBar && Child !== this.Fog)
				Child.remove();
	}
}