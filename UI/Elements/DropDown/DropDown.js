class DropDown
{
    constructor(Source)
    {
        this.Source = Source;
        this.Element = document.createElement('Div');
        this.Element.classList.add('DropDown', 'Level-2');
    }

    Open()
    {
        document.body.append(this.Element);
        this.Coordinates();
        addEventListener('resize', () => this.Coordinates());
        setTimeout(() => addEventListener('click', () => this.Close()), 0);
    }

    Close()
    {
        // this.Source.focus();
        this.Element.remove();
        removeEventListener('click', () => this.Close());
        removeEventListener('resize', () => this.Coordinates());
    }

    Coordinates()
    {
        this.Element.style.top = 0;
        this.Element.style.left = 0;

        const BoundingClientRect = this.Source.getBoundingClientRect();

        let Top = BoundingClientRect.bottom  + 5;
        let Left = BoundingClientRect.right - this.Element.clientWidth;

        if (Top + this.Element.clientHeight > window.innerHeight)
            Top = window.innerHeight - this.Element.clientHeight;
        if (Left + this.Element.clientWidth > window.innerWidth)
            Left = window.innerWidth - this.Element.clientWidth;
        if (Top < 0)
            Top = 0;
        if (Left < 0)
            Left = 0;

        this.Element.style.top = Top + 'px';
        this.Element.style.left = Left + 'px';
    }
}

function DropDown_Template(DropDown, Actions)
{
    DropDown.Element.classList.add('Template', 'Vertical', 'Round');

    for (let loop_Action of Actions)
    {
        const Element = document.createElement('button');

        Element.innerHTML =    `${loop_Action.Icon ? `<Custom-Icon icon='${loop_Action.Icon}'></Custom-Icon>` : ''}
                                <Span>${loop_Action.Caption}</Span>`;

        Element.addEventListener('click', loop_Action.Callback);

        Element.classList.add('Center', 'Horizontal-Default');



        DropDown.Element.append(Element);
    };
}