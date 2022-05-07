class Tabs extends HTMLElement
{
	connectedCallback()
	{
		this.classList.add('Vertical-Default');
		this.children[0].classList.add('Titles');
		this.children[1].classList.add('Content');
		this.Select(0);

		for (let i = 0; i < this.children[0].children.length; i++)
		{
			const Element = document.createElement('Span');
			Element.classList.add('Highlight');
			this.children[0].children[i].append(Element);
			this.children[0].children[i].classList.add('Medium', 'Vertical-Tiny');
			this.children[0].children[i].addEventListener('click', () => this.Select(i));
		};
	}

	Select(Index)
	{
		for (let i = 0; i < this.children[0].children.length; i++)
			if (i === Index)
			{
				this.children[0].children[i].classList.add('Selected');
				this.children[1].children[i].classList.add('Selected');
			}
			else
			{
				this.children[0].children[i].classList.remove('Selected');
				this.children[1].children[i].classList.remove('Selected');
			};
	}
}

customElements.define('custom-tabs', Tabs);