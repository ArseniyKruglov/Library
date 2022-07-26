Array.prototype.RemoveThis = function (Element)
{
	const Index = this.indexOf(Element);

	if (Index !== -1)
		this.splice(Index, 1);
}