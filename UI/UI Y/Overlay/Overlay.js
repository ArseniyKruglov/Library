class Overlay
{
    constructor()
    {
        this.Animation = true;
        this.Element = document.createElement('div');
        this.Element.className = 'Overlay';
        this.Element.innerHTML = `<div class='Background ${this.Animation ? 'Animation' : ''}'></div>
                                  <div class='Content VeryRound Level-1'></div>`;
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