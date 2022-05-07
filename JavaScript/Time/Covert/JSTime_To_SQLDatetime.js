function JSTime_To_SQLDatetime(JSTime)
{
	return JSTime.toISOString().slice(0, 19).replace('T', ' ');
}