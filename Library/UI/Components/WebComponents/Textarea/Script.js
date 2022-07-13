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
		const TextLength = this.value.length;
		this.Textarea.setSelectionRange(TextLength, TextLength);

		// Expand
		this.Expander();
		this.Expanded = this.ContentHeight < this.Minimized;

		// Listeners
		this.Textarea.addEventListener('input', () => this.Expander());
		this.Expand.addEventListener('click', () =>
		{
			this.Expanded = !this.Expanded;
			this.Expander();
		});
		window.addEventListener('resize', () => this.Expander());
		document.fonts.ready.then(() => this.Expander());
	}

	Expander()
	{
		this.UpdateContentHeight();

		if (this.ContentHeight < this.Minimized)
		{
			this.Expand.hidden = true;
			this.Textarea.style.setProperty('--ContentHeight', this.ContentHeight + 'px');
		}
		else
		{
			this.Expand.hidden = false;

			if (this.Expanded)
				this.Textarea.style.setProperty('--ContentHeight', this.ContentHeight + 'px');
			else
				this.Textarea.style.setProperty('--ContentHeight', this.Minimized + 'px');

			this.Expand.innerHTML =  `<Span>${(this.Expanded ? ['Show less', 'Свернуть'] : ['Show full', 'Показать полностью'])[1]}</Span>
							  <Custom-icon Icon='${this.Expanded ? 'outlined/expand_less' : 'outlined/expand_more'}''></Custom-icon>`;
		};
	}

	UpdateContentHeight()
	{
		this.Textarea.style.overflow = 'hidden';
		this.Textarea.style.height = 0;
		this.ContentHeight = this.Textarea.scrollHeight;
		this.Textarea.style.height = '';
		this.Textarea.style.overflow = '';
	}

	get value()
	{
		return this.Textarea.value;
	}
	set value(Value)
	{
		this.Textarea.value = Value;
		this.Expander();
	}

	set placeholder(Value)
	{
		this.Textarea.setAttribute('placeholder', Value);
	}
})