customElements.define('custom-combined-range', class extends HTMLElement
{
	connectedCallback()
	{
		this.innerHTML = `<Input Type="Number">
					<Input Type="Range">`;
	}
})