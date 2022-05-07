<?

function SecureQuery($SQL, $Request, $Types, $Data)
{
	$Query = $SQL->prepare($Request);
	$Query->bind_param($Types, ...$Data);
	$Query->execute();
	return $Query->get_result();
}