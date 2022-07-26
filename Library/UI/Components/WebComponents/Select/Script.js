customElements.define('custom-select', class extends HTMLSelectElement
{
	connectedCallback()
	{
		const Scale = (Focus) =>
		{
			const TempSelect = HTML_To_Elements
			(
				`<Select>
					<Option>${this.options[this.selectedIndex].text}</Option>
				 </Select>`
			)[0];

			this.hidden = true;
			this.after(TempSelect);
			this.style.width = `${TempSelect.getBoundingClientRect().width + 7.5}px`;
			this.hidden = false;
			TempSelect.remove();

			if (Focus)
				this.focus({ preventScroll: true });
		}

		this.addEventListener('change', () => Scale(true));
		document.fonts.ready.then(() => Scale());		// TO DO
		Scale();
	}
}, { extends: 'select' });