class FetchRequest
{
	constructor(URL, Type, Data, Callback)
	{
		this.XHR = new XMLHttpRequest();

		if (Type === 'GET')
		{
			if (Object.keys(Data).length !== 0)
			{
				let First = true;
				for (let loop_Field in Data)
				{
					URL += `${First ? '?' : '&'}${loop_Field}=${Data[loop_Field]}`;
					First = false;
				};
			};

			this.XHR.open('GET', URL);
			this.XHR.send();
		}
		else
		{
			const Form = new FormData();
			for (let loop_Field in Data)
				Form.append(loop_Field, Data[loop_Field]);

			this.XHR.open('POST', URL);
			this.XHR.send(Form);
		};


		if (Callback !== undefined)
			this.XHR.onreadystatechange = () =>
			{
				if (this.XHR.readyState === 4)
					Callback({ 'Code': (this.Aborted ? 'Aborted' : this.XHR.status), 'Message': this.XHR.statusText }, this.XHR.responseText)
			};
	}

	Abort()
	{
		this.Aborted = true;
		this.XHR.abort();
	}
}