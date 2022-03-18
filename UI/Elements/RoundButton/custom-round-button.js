class RoundButton extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =   `<button>
                                <Custom-Icon icon='${this.getAttribute('icon')}'></Custom-Icon>
                                <Span class='Backlight'></Span>
                            </button>`;

        const PassAtributes = (Attributes, To) =>
        {
            for (let loop_Attribute of this.getAttributeNames())
                if (Attributes.includes(loop_Attribute) === true)
                {
                    To.setAttribute(loop_Attribute, this.getAttribute(loop_Attribute));
                    this.removeAttribute(loop_Attribute);
                };
        }

        PassAtributes(['type'], this.children[0]);


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