class RoundButton extends HTMLElement
{
	connectedCallback()
	{
		this.innerHTML =	`<Button>
						<Custom-icon Icon='${this.getAttribute('Icon')}'></Custom-icon>
						<Span Class='Backlight'></Span>
					 </Button>`;

		PassAtributes(['type', 'tabindex'], this, this.children[0]);


		this.addEventListener('click', () =>
		{
			const Ripple = document.createElement('Span');
			Ripple.className = 'Ripple';
			this.children[0].append(Ripple);
			setTimeout(() => Ripple.remove(), 750);
		});
	}
}

customElements.define('custom-round-button', RoundButton);