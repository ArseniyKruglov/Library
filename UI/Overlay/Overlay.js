class Overlay
{
    constructor()
    {
        this.Animation = true;
        this.Element = document.createElement('Div');
        this.Element.classList.add('Overlay', 'Center');
        this.Element.innerHTML = `<Div class='Background ${this.Animation ? 'Animation' : ''}'></Div>
                                  <Div class='Content VeryRound Level-1'></Div>`;
        this.Element.children[0].addEventListener('click', () => { this.Close() });
    }

    Open()
    {
        document.body.append(this.Element);
    }

    Close()
    {
        this.Element.remove();
    }

    get Content()
    {
        return this.Element.children[1];
    }
}