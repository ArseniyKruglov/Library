function Timestamp(Date)	// 01.01.1970, 03:00:00
{
	return Date.toLocaleDateString(undefined, { 'year': 'numeric', 'month': '2-digit', 'day': '2-digit', 'hour': '2-digit', 'minute': '2-digit', 'second': '2-digit' });
}