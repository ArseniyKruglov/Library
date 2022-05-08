function HTMLToElement(HTML)
{
	const Container = document.createElement('Div');
	Container.innerHTML = HTML;
	return Container.children;
}