<?

function DateCheck($Date)
{
    $DateTime = DateTime::createFromFormat('Y-m-d H:i:s', $Date);
    return $DateTime && $DateTime->format('Y-m-d H:i:s') == $Date;
}