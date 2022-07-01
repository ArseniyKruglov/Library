function Select_Resize(Element)
{
	const TempSelect = HTML_To_Elements
	(
		`<Select>
			<Option>${Element.options[Element.selectedIndex].text}</Option>
		 </Select>`
	)[0];

	Element.hidden = true;
	Element.after(TempSelect);
	Element.style.width = `${TempSelect.getBoundingClientRect().width + 7.5}px`;
	Element.hidden = false;
	TempSelect.remove();
	Element.focus();
}