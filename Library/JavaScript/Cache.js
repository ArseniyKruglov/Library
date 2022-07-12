function Cache_Get(Key)		// TO DO: Критическая ошибка
{
	return JSON.parse(localStorage.getItem(Key));
}

function Cache_Has(Key)
{
	return localStorage.getItem(Key) !== null;
}

function Cache_Set(Key, Value)
{
	if (Value === undefined)
		localStorage.setItem(Key, '');
	else
		localStorage.setItem(Key, JSON.stringify(Value));
}

function Cache_Remove(Key)
{
	localStorage.removeItem(Key);
}