<?

require_once 'C:/Users/Arseniy Kruglov/Documents/Dev/Web/lifetime.one/Web/Source/Common/Passwords.php';

$SQL = new mysqli('localhost', $Passwords['SQL']['Login'], $Passwords['SQL']['Password'], $Passwords['SQL']['Database']);
$SQL->set_charset('UTF8');