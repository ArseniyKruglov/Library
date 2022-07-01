class Icon extends HTMLElement
{
	Icons =
	{
		// ...Generator puts icons here...
	}

	connectedCallback()
	{
		this.innerHTML = `<SVG ViewBox='0 0 24 24'>${this.Icons[this.getAttribute('icon')]}</SVG>`;
	}
}

customElements.define('custom-icon', Icon);