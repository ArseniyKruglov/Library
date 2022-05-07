function FormatTimer(Time, Days, Hours, Minutes, Seconds)   // TO DO
{
	if (Time >= 0)
	{
		function Double(Integer)
		{
			return Integer >= 10 ? Integer : ('0' + Integer);
		}

		const Seconds_ = Math.floor(Time / 1000);
		const Minutes = Math.floor((Time / (1000 * 60)) % 60);
		const Hours = Math.floor((Time / (1000 * 60 * 60)) % 24);
		const Days = Math.floor(Time / (24 * 60 * 60 * 1000));

		return `${Days > 0 ? `${Days}:` : ''}${Days > 0 ? Double(Hours) : Hours}:${Double(Minutes)}${Seconds === true ? `:${Seconds}` : ''}`;
	}
	else
	{
		return '—';
	};
}