class CustomCheckbox extends HTMLElement
{
	connectedCallback()
	{
		this.innerHTML =	`<Label>
						<Input Type='Checkbox'>
						<Div AutoLayout Direction='Horizontal' AlignY='Center'>
							<Custom-icon Icon='check_box_outline_blank'></Custom-icon>
							<Custom-icon Icon='check_box'></Custom-icon>

							<Div Class='Backlight'></Div>

							<Div>${this.getAttribute('Label') || ''}</Div>
						</Div>
					 </Label>`;

		PassAtributes(['checked', 'value', 'disabled', 'name', 'readonly', 'required'], this, this.children[0].children[0]);

		// this.addEventListener('click', () =>
		// {
		// 	const Ripple = document.createElement('Div');
		// 	Ripple.className = 'Ripple';
		// 	this.children[0].children[1].append(Ripple);
		// 	setTimeout(() => Ripple.remove(), 750);
		// });

		this.addEventListener('mousedown', (Event) =>
		{
			if (Event.detail > 1)
				Event.preventDefault();
		}, false);
	}



	// TO DO: Перенести все свойства

	get checked()
	{
		return this.children[0].children[0].checked;
	}

	set checked(Value)
	{
		return this.children[0].children[0].checked = Value;
	}
}

customElements.define('custom-checkbox', CustomCheckbox);