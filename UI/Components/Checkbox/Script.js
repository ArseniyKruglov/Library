class CustomCheckbox extends HTMLElement
{
	connectedCallback()
	{
		this.innerHTML =	`<Label>
						<Input Type='Checkbox'>
						<Div AutoLayout Direction='Horizontal' AlignY='Center'>
							<!-- <Custom-icon Icon='check_box_outline_blank'></Custom-icon>
							<Custom-icon Icon='check_box'></Custom-icon> -->

							<Custom-round-button Icon='check_box_outline_blank'></Custom-round-button>

							<Div>${this.getAttribute('Label') || ''}</Div>
						</Div>
					 </Label>`;

		PassAtributes(['checked', 'value', 'disabled', 'name', 'readonly', 'required'], this, this.children[0].children[0]);

		this.addEventListener('mousedown', (Event) =>
		{
			if (Event.detail > 1)
				Event.preventDefault();
		}, false);

		this.addEventListener('change', () =>
		{
			this.children[0].children[1].children[0].dispatchEvent(new Event('click'));
			this.children[0].children[1].children[0].Icon = this.checked ? 'check_box' : 'check_box_outline_blank';
		});
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