class RoundButton extends HTMLElement
{
	connectedCallback()
	{
		this.innerHTML =	`<Button>
						<Custom-icon Icon='${this.getAttribute('Icon')}'></Custom-icon>
						<Div Class='Backlight'></Div>
					 </Button>`;

		PassAtributes(['type', 'tabindex'], this, this.children[0]);

		this.addEventListener('click', () =>
		{
			const Ripple = document.createElement('Div');
			Ripple.className = 'Ripple';
			this.children[0].append(Ripple);
			setTimeout(() => Ripple.remove(), 750);
		});
	}

	set Icon(Value)
	{
		this.children[0].children[0].Icon = Value;
	}
}

customElements.define('custom-round-button', RoundButton);