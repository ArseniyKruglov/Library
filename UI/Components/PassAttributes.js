function PassAtributes(Attributes, From, To)
{
	for (let Attribute of From.getAttributeNames())
		if (Attributes.includes(Attribute.toLowerCase()) === true)
		{
			To.setAttribute(Attribute, From.getAttribute(Attribute));
			From.removeAttribute(Attribute);
		};
}