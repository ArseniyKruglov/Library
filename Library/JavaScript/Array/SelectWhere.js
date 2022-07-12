Array.prototype.SelectWhere = function (Object, Single)
{
	if (Single === true)
	{
		for (let i = 0; i < this.length; i++)
		{
			let Select = true;
			for (let Key in Object)
				if (this[i][Key] !== Object[Key])
				{
					Select = false;
					break;
				};

			if (Select === true)
				return this[i];
		};
	}
	else
	{
		let Array = [];

		for (let i = 0; i < this.length; i++)
		{
			let Select = true;
			for (let Key in Object)
				if (this[i][Key] !== Object[Key])
				{
					Select = false;
					break;
				};

			if (Select === true)
				Array.push(this[i]);
		};

		return Array;
	};
}