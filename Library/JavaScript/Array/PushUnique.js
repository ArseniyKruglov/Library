Array.prototype.PushUnique = function (Element)
{
	if (this.indexOf(Element) === -1)
		this.push(Element);
}