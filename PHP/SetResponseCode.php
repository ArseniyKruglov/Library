<?

function SetResponseCode($Code, $Message = null)
{
	$Code = intval($Code);

	if (is_null($Message))
		http_response_code($Code);
	else
		header(trim("HTTP/1.0 $Code $Message"));

	exit();
}