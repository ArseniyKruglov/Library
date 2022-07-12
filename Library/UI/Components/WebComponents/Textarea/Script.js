customElements.define('custom-textarea', class extends HTMLElement
{
	connectedCallback()
	{
		this.innerHTML =   `<Div>
						<Textarea>${this.innerHTML}</Textarea>
					  </Div>

					  <Button Class='Text Icon Gray Hover'></Button>`;

		// Constants
		this.Textarea = this.children[0].children[0];
		this.Expand = this.children[1];

		PassAtributes(['readonly', 'placeholder'], this, this.Textarea);

		// Constants
		this.Minimized = 150;

		// Cursor
		const Length = this.value.length;
		this.Textarea.setSelectionRange(Length, Length);

		// Expand
		this.ExpandButtonHandler();
		this.Expanded = this.ContentHeight < this.Minimized;

		// Listeners
		this.Textarea.addEventListener('input', () => this.ExpandButtonHandler());
		this.Expand.addEventListener('click', () =>
		{
			this.Expanded = !this.Expanded;
			this.ExpandButtonHandler();
		});
		window.addEventListener('resize', () => this.ExpandButtonHandler());
		document.fonts.ready.then(() => this.ExpandButtonHandler());
	}

	ExpandButtonHandler()
	{
		this.Scale();

		if (this.ContentHeight < this.Minimized)
		{
			this.Expand.hidden = true;
			this.Textarea.style.setProperty('--ContentHeight', this.ContentHeight + 'px');
		}
		else
		{
			this.Expand.hidden = false;
			this.Textarea.style.setProperty('--ContentHeight', this.Minimized + 'px');
			this.Expand.innerHTML =  `<Span>${(this.Expanded ? ['Show less', 'Свернуть'] : ['Show full', 'Показать полностью'])[1]}</Span>
							  <Custom-icon Icon='${this.Expanded ? 'expand_less' : 'expand_more'}''></Custom-icon>`;
		};
	}

	Scale()
	{
		this.Textarea.style.overflow = 'hidden';
		this.Textarea.style.height = 0;
		this.ContentHeight = this.Textarea.scrollHeight;
		this.Textarea.style.height = '';
		this.Textarea.style.overflow = '';

		this.Textarea.style.setProperty('--ContentHeight', this.ContentHeight + 'px');
	}

	get value()
	{
		return this.Textarea.value;
	}

	set value(Value)
	{
		this.Textarea.value = Value;
		this.ExpandButtonHandler();
	}

	set placeholder(Value)
	{
		this.Textarea.setAttribute('placeholder', Value);
	}
})