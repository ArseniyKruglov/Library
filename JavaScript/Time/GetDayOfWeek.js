Date.prototype.GetDayOfWeek = function ()
{
	// TO DO: Доделать

	function WeekStart(Region, Language)
	{
		const RegionSaturday = 'AEAFBHDJDZEGIQIRJOKWLYOMQASDSY'.match(/../g);
		const RegionSunday = 'AGARASAUBDBRBSBTBWBZCACNCODMDOETGTGUHKHNIDILINJMJPKEKHKRLAMHMMMOMTMXMZNINPPAPEPHPKPRPTPYSASGSVTHTTTWUMUSVEVIWSYEZAZW'.match(/../g);
		const LanguageSaturday = ['ar', 'arq', 'arz', 'fa'];
		const LanguageSunday = 'amasbndzengnguhehiidjajvkmknkolomhmlmrmtmyneomorpapssdsmsnsutatethtnurzhzu'.match(/../g);

		return (
			Region ? (
				RegionSunday.includes(Region) ? 'Sunday' :
				RegionSaturday.includes(Region) ? 'Saturday' : 'Monday') : (
				LanguageSunday.includes(Language) ? 'Sunday' :
				LanguageSaturday.includes(Language) ? 'Saturday' : 'Monday'));
	};

	function WeekStartLocale(Locale)
	{
		const Parts = Locale.match(/^([a-z]{2,3})(?:-([a-z]{3})(?=$|-))?(?:-([a-z]{4})(?=$|-))?(?:-([a-z]{2}|\d{3})(?=$|-))?/i);
		return WeekStart(Parts[4], Parts[1]);
	}



	switch (WeekStartLocale(navigator.language))
	{
		case 'Monday':
			return (this.getDay() + 6) % 7;

		case 'Saturday':
			return (this.getDay() + 1) % 7;

		case 'Sunday':
			return this.getDay();
	};
}