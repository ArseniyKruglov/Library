function Cache_Get(Title)
{
    return JSON.parse(localStorage.getItem(Title));
}