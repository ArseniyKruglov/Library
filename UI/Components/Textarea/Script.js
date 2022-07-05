class Textarea extends HTMLElement
{
	connectedCallback()
	{
		this.innerHTML =   `<Div>
						<Textarea>${this.innerHTML}</Textarea>
					  </Div>

					  <Button Class='Text Icon Gray Hover'></Button>`;


		this.Textarea = this.children[0].children[0];
		this.Expand = this.children[1];

		PassAtributes(['readonly', 'placeholder'], this, this.Textarea);

		this.Minimized = 150;
		this.Limit = this.Minimized + 55;

		this.Scale();

		this.Expanded = parseInt(this.Textarea.style.height) < this.Limit;
		this.ExpandHandler();
		this.Textarea.addEventListener('input', () => this.ExpandHandler());
		addEventListener('resize', () => this.ExpandHandler());
		this.Expand.addEventListener('click', () =>
		{
			this.Expanded = !this.Expanded;
			this.ExpandHandler();
		});
		document.fonts.ready.then(() => this.ExpandHandler());

		const Length = (this.getAttribute('value') || '').length;
		this.Textarea.setSelectionRange(Length, Length);
	}

	ExpandHandler()
	{
		this.Scale();

		if (parseInt(this.Textarea.style.height) < this.Limit)
		{
			this.Expand.hidden = true;
		}
		else
		{
			this.Textarea.style.maxHeight = this.Expanded ? '' : `${this.Minimized}px`;
			this.Expand.hidden = false;
			this.Expand.innerHTML =  `<Span>${(this.Expanded ? ['Show less', 'Свернуть'] : ['Show full', 'Показать полностью'])[1]}</Span>
							  <Custom-icon Icon='${this.Expanded ? 'expand_less' : 'expand_more'}''></Custom-icon>`;
		};
	}

	Scale()
	{
		this.Textarea.style.overflow = 'hidden';
		this.Textarea.style.height = 0;
		this.Textarea.style.height = (this.Textarea.scrollHeight - 20 + 2) + 'px';
		this.Textarea.style.overflow = '';
	}

	get value()
	{
		return this.Textarea.value;
	}

	set value(sValue)
	{
		this.Textarea.value = sValue;
		this.ExpandHandler();
	}

	set placeholder(sValue)
	{
		this.Textarea.setAttribute('placeholder', sValue);
	}
}

customElements.define('custom-textarea', Textarea);