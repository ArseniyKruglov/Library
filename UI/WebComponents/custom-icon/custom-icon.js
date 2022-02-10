class Icon extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `<svg viewBox='0 0 24 24'><${this.Icons[(this.getAttribute('icon'))]}></svg>`;
    }
}

customElements.define('custom-icon', Icon);