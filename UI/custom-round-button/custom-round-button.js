class RoundButton extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =   `<button>
                                <custom-icon icon='${this.getAttribute('icon')}'></custom-icon>
                                <span class='Backlight'></span>
                            </button>`;
        this.addEventListener('click', () =>
        {
            const Ripple = document.createElement('span');
            Ripple.className = 'Ripple';
            this.children[0].append(Ripple);
            setTimeout(() => Ripple.remove(), 750);
        });
    }
}

customElements.define('custom-round-button', RoundButton);