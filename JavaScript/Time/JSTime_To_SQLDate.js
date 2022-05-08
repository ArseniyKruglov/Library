function JSTime_To_SQLDate(Date)
{
	function Double(Integer)
	{
		return Integer >= 10 ? Integer : ('0' + Integer);
	}

	return Date.getFullYear() + '-' + Double(Date.getMonth() + 1) + '-' + Double(Date.getDate());
}