class Dialog_FullScreen
{
	constructor()
	{
		this.Element = HTML_To_Elements
		(`
			<Dialog Class="FullScreen" AutoLayout Direction="Vertical">
				<Div AutoLayout Direction="Vertical" Width="Fill" Height="Fill" AlignX="Center" AlignY="Center" Style="Gap: 50px">
					<H2>Полноэкранный диалог!</H2>
					<Button Class="Text Fill Main Icon" OnClick="Demo_Dialog_FullScreen_Close()">
						<Custom-icon Icon="outlined/close"></Custom-icon>
						<Span>Закрыть</Span>
					</Button>
				</Div>
			</Dialog>
		`)[0];

		document.body.append(this.Element);
		document.body.classList.toggle('DialogOverflowless', true);
		this.Element.open = true;
	}

	Close()
	{
		this.Element.remove();
		document.body.classList.toggle('DialogOverflowless', false);
	}
}