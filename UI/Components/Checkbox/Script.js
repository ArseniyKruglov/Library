class CustomCheckbox extends HTMLElement
{
	connectedCallback()
	{
		this.innerHTML =	`<Label>
						<Input Type='Checkbox'>
						<Div AutoLayout Direction='Horizontal'>
							<Custom-icon Icon='Checkbox-Unchecked'></Custom-icon>
							<Custom-icon Icon='Checkbox-Checked'></Custom-icon>

							<Div>${this.getAttribute('Label') || ''}</Div>
						</Div>
					 </Label>`;

		PassAtributes(['checked', 'value', 'disabled', 'name', 'readonly', 'required'], this, this.children[0].children[0]);
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