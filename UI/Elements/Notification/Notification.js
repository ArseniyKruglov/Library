function Notify(Text, Class = 'OK', Icon = 'Chat Bubble')
{
    let Container = document.getElementById('Notifications');
    if (Container === null)
    {
        Container = document.createElement('Div');
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

    const Element = document.createElement('Div');
    Element.className = `Notification Level-2 Round Horizontal-Default Padding-Roomy Center Type-${Class}`;
    Element.innerHTML = `<Custom-Icon icon='${Icon}'></Custom-Icon>
                         <Span class='OverflowY'>${Text}</Span>`;
    Element.addEventListener('click', () => Remove());

    Container.append(Element);
    Element.style.height = (Element.getBoundingClientRect().height - 10 * 2) + 'px';
    setTimeout(() =>
    {
        Element.classList.add('Closing');
        setTimeout(() => { Remove() }, 250);
    }, 5000);
}

function DefaultRequestFailHandler(Code, FallbackText = ['Error occured.', 'Произошла ошибка.'][Language], FallbackIcon = 'Error Outlined')
{
    if (~~(Code / 100) === 5 || Code === 404)
        Notify([`Server error.`, 'Ошибка на сервере.'][Language], 'Bad', 'Server');
    else if (Code === 401 || Code === 403)
        Notify([`You aren't authorized.`, 'Вы не авторизованы.'][Language], 'Bad', 'Server');
    else if (Code === 0 || Code === 408)
        Notify([`Connectivity issues.`, 'Проблемы с подключением.'][Language], 'Bad', 'Wifi');
    else
        Notify(FallbackText, 'Bad', FallbackIcon);
}