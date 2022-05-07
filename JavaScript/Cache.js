function Cache_Get(Key)
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



function Cache_UserSettings(Get = {}, Has = {})
{
	const UserSettings = {};



	for (let Key in Get)
	{
		Object.defineProperty
		(
			UserSettings,
			Key,
			{
				get: function ()
				{
					return Cache_Get(Get[Key].CacheName) ?? Get[Key].Default ?? null;
				},
				set: function (Value)
				{
					if (Value === null)
						Cache_Remove(Get[Key].CacheName);
					else
						Cache_Set(Get[Key].CacheName, Value);

					if (IsFunction(Get[Key].Function))
						Get[Key].Function();
				}
			}
		);
	};

	for (let Key in Has)
	{
		Object.defineProperty
		(
			UserSettings,
			Key,
			{
				get: function ()
				{
					return Cache_Has(Has[Key].CacheName) ^ Has[Key].Invert;
				},
				set: function (Value)
				{
					if (Value ^ Has[Key].Invert)
						Cache_Set(Has[Key].CacheName);
					else
						Cache_Remove(Has[Key].CacheName);

					if (IsFunction(Has[Key].Function))
						Has[Key].Function();
				}
			}
		);
	};

	return UserSettings;
}