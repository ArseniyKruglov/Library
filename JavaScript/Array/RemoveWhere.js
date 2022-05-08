Array.prototype.removeWhere = function(Object, Single)
{
	if (Single === true)
	{
		for (let i = 0; i < this.length; i++)
		{
			let Remove = true;
			for (let Key in Object)
				if (this[i][Key] !== Object[Key])
				{
					Remove = false;
					break;
				};

			if (Remove === true)
			{
				this.splice(i--, 1);
				break;
			};
		};
	}
	else
	{
		for (let i = 0; i < this.length; i++)
		{
			let Remove = true;
			for (let Key in Object)
				if (this[i][Key] !== Object[Key])
				{
					Remove = false;
					break;
				};

			if (Remove === true)
				this.splice(i--, 1);
		};
	};
}