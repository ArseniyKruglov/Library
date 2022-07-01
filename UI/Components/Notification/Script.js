function Notify(Text, Class = 'OK', Icon = 'Chat Bubble')
{
	let Container = document.getElementById('Notifications');
	if (Container === null)
	{
		Container = HTML_To_Elements(`<Div ID='Notifications' AutoLayout Direction='Vertical' AlignX='End'></Div>`)[0];
		document.body.append(Container);
	};



	function Remove()
	{
		if (Container.children.length === 1)
			Container.remove();
		else
			Element.remove();
	}

	const Element = HTML_To_Elements
	(`<Div Class='Notification Type-${Class}' AutoLayout Direction='Horizontal' AlignY='Center' Width='Fit'>
		<Custom-icon Icon='${Icon}'></Custom-Icon>
		<Span>${Text}</Span>
	  </Div>`)[0];
	Element.addEventListener('click', () => Remove());

	Container.append(Element);
	Element.style.height = (Element.getBoundingClientRect().height - 15 * 2) + 'px';
	setTimeout(() =>
	{
		Element.classList.add('Closing');
		setTimeout(() => Remove(), 250);
	}, 5000);
}

function Notify_RequestFail(Code, FallbackText = ['Error occured.', 'Произошла ошибка.'][Language], FallbackIcon = 'Error Outlined')
{
	if (Code === 'Aborted')
		return;
	if (~~(Code / 100) === 5 || Code === 404)
		Notify([`Server error.`, 'Ошибка на сервере.'][Language], 'Bad', 'Server');
	else if (Code === 401 || Code === 403)
		Notify([`You aren't authorized.`, 'Вы не авторизованы.'][Language], 'Bad', 'Server');
	else if (Code === 0 || Code === 408)
		Notify([`Connectivity issues.`, 'Проблемы с подключением.'][Language], 'Bad', 'Wifi');
	else
		Notify(FallbackText, 'Bad', FallbackIcon);
}