class Icon extends HTMLElement
{
	Icons = { /* ...Generator puts icons here... */ }

	connectedCallback()
	{
		this.innerHTML = `<SVG ViewBox='0 0 24 24'>${this.Icons[this.getAttribute('icon')]}</SVG>`;
	}

	set Icon(Value)
	{
		this.children[0].innerHTML = this.Icons[Value];
	}
}

customElements.define('custom-icon', Icon);