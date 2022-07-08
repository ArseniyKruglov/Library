function PassAtributes(WhiteList, From, To)
{
	for (let Attribute of From.getAttributeNames())
		if (WhiteList.includes(Attribute) === true)
		// {
			To.setAttribute(Attribute, From.getAttribute(Attribute));
		// 	From.removeAttribute(Attribute);
		// };
}