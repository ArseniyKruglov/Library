function Notify(Text, Class = 'OK', Icon = 'Chat Bubble')
{
    let Container = document.getElementById('Notifications');
    if (Container === null)
    {
        Container = document.createElement('div');
        Container.id = 'Notifications';
        Container.className = 'Vertical-Default Padding-Default OverflowY';
        document.body.append(Container);
    }



    function Remove()
    {
        if (Container.children.length === 1)
            Container.remove();
        else
            Element.remove();
    }

    const Element = document.createElement('div');
    Element.className = `Notification Level-2 Round Horizontal-Default Padding-Roomy Center Type-${Class}`;
    Element.innerHTML = `<custom-icon icon='${Icon}'></custom-icon>
                         <span class='OverflowY'>${Text}</span>`;
    Element.addEventListener('click', () => Remove());

    Container.append(Element);
    Element.style.height = (Element.getBoundingClientRect().height - 10 * 2) + 'px';
    setTimeout(() =>
    {
        Element.classList.add('Closing');
        setTimeout(() => { Remove() }, 250);
    }, 5000);
}