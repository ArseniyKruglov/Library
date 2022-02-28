function IsBoolean(Variable)
{
    return (typeof Variable === 'boolean' || Variable instanceof Boolean);
}

function IsNumber(Variable)
{
    return isNaN(Variable) === false;
}

function IsDate(Variable)
{
    return Variable instanceof Date;
}

function IsString(Variable)
{
    return (typeof Device === 'string' || Device instanceof String);
}

function IsFunction(Variable)
{
    return Variable instanceof Function;
}