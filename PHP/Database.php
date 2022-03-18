<?

require __DIR__ . '/../../Common/Passwords.php';

$SQL = new mysqli('localhost', $Passwords['SQL']['Login'], $Passwords['SQL']['Password'], $Passwords['SQL']['Database']);
$SQL->set_charset('UTF8');