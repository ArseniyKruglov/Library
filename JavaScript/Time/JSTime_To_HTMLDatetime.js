function JSTime_To_HTMLDatetime(JSTime)
{
    return new Date(new Date(JSTime) - new Date().getTimezoneOffset() * 60 * 1000).toISOString().slice(0, 16);
}