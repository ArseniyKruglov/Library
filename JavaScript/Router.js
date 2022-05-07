Router =
{
	Init()
	{
		window.addEventListener('popstate', () => this.Route());
		this.Route();
	},

	Route()
	{
		this.UpdateURL();

		for (let i = 0; i < Math.max(this.PreviousURL.length, this.CurrentURL.length); i++)
			if (this.PreviousURL[i] !== this.CurrentURL[i])
			{
				for ( ; i <= this.CurrentURL.length; i++)
				{
					const GetListener = (Request) =>
					{
						for (let Pair of this.Listeners)
						{
							const Path = Pair[0];
							const Listener = Pair[1];

							if (Request.length !== Path.length)
								continue;

							let Flag;
							for (let i = 0; i < Path.length; i++)
								if (Path[i] !== Request[i])
								{
									Flag = true;
									break;
								};
							if (Flag === true)
								continue;

							return Listener;
						};
					}

					const Listener = GetListener(this.CurrentURL.slice(0, i));
					if (Listener !== undefined)
						Listener();
				};

				return;
			};
	},

	RouteTo(URL, Event)
	{
		if (Event !== undefined)
			Event.preventDefault();

		if ('/App/' + URL !== location.pathname)
		{
			history.pushState({}, '', '/App/' + URL);		// TO DO: Специфично для проекта
			this.Route();
		};
	},

	Listeners: new Map(),

	Listen(Function, Path)
	{
		this.Listeners.set(Path, Function);
	},

	EmptyState()
	{
		history.pushState({}, '', location.pathname);
	},

	CurrentURL: [null],		// TO DO: Костылёк

	UpdateURL()
	{
		function GetURL()
		{
			const URL = location.pathname.split('/').filter(Item => Item !== '');
			URL.shift();

			return URL;
		}

		this.PreviousURL = this.CurrentURL;
		this.CurrentURL = GetURL();
	}
}