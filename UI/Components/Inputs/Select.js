function Select_Resize(Element)
{
	const TempSelect = HTMLToElement
	(
		`<Select>
			<Option>${Element.options[Element.selectedIndex].text}</Option>
		 </Select>`
	);

	Element.hidden = true;
	Element.after(TempSelect);
	Element.style.width = `${TempSelect.getBoundingClientRect().width + 7.5}px`;
	Element.hidden = false;
	TempSelect.remove();
	Element.focus();
}