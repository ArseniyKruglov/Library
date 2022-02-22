function Notify(Text, Type = 0)
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
        if (Container.children.length === 0)
            Container.remove();
        else
            Element.remove();
    }

    let Element;
    Element = document.createElement('div');
    Element.className = `Notification Level-2 Round Horizontal-Default Padding-Roomy Center Type-${Type}`;
    Element.innerHTML = `<custom-icon icon='${['Chat Bubble', 'Chat Bubble', 'Error Outlined'][Type]}'></custom-icon>
                         <span class='OverflowY'>${Text}</span>`;
    Element.addEventListener('click', () => { Remove() });

    Container.append(Element);
    Element.style.height = (Element.getBoundingClientRect().height - 10 * 2) + 'px';
    setTimeout(() =>
    {
        Element.classList.add('Closing');
        setTimeout(() => { Remove() }, 250);
    }, 5000);
}