class Checkbox extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =    `<label style='--Color: ${this.getAttribute('color') || 'var(--Main)'}'>
                                <input type='checkbox' ${ this.hasAttribute('checked') ? 'checked' : '' }>
                                <Div>
                                    <Span>
                                        <svg viewBox='0 0 24 24' fill='var(--Color)' hidden><path d='m19,19l-14,0m14,-16l-14,0c-1.1,0 -2,0.9 -2,2l0,14c0,1.1 0.9,2 2,2l14,0c1.1,0 2,-0.9 2,-2l0,-14c0,-1.1 -0.9,-2 -2,-2z'/></svg>
                                        <svg viewBox='0 0 24 24' fill='var(--Color)'><path d='M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/></svg>
                                        <svg viewBox='0 0 24 24' fill='var(--Color)'><path d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>
                                    </Span>
                                    <Span hidden></Span>
                                    <Span class='EmptyHidden'>${this.getAttribute('name') || ''}</Span>
                                </Div>
                            </label>`;

        this.Checkbox = this.children[0].children[0];
        this.Title = this.children[0].children[1].children[2];
        this.Checked = this.children[0].children[1].children[0].children[1];
        this.Unchecked = this.children[0].children[1].children[0].children[2];

        this.addEventListener('change', () => PlayClass(this.children[0], this.Checkbox.checked ? 'Checked' : 'Unchecked', 500));
    }

    get checked()
    {
        return this.Checkbox.checked;
    }

    set checked(Checked)
    {
        if (Checked !== this.Checkbox.checked)
        {
            this.Checkbox.checked = Checked;
            PlayClass(this.children[0], Checked ? 'Checked' : 'Unchecked', 500);
        };
    }

    // attributeChangedCallback(sName, xOldValue, xNewValue)
    // {
    //     if (this.innerHTML)
    //         switch (sName)
    //         {
    //             case 'name':
    //                 this.Title.innerHTML = xNewValue;
    //                 break;

    //             case 'color':
    //                 this.Checked.setAttribute('fill', xNewValue);
    //                 this.Unchecked.setAttribute('fill', xNewValue);
    //                 break;

    //             case 'checked':
    //                 this.Checkbox.checked = (xNewValue != undefined);
    //                 break;
    //         }
    // }

    // static get observedAttributes() { return ['name', 'color', 'checked'] }
}

customElements.define('custom-checkbox', Checkbox);