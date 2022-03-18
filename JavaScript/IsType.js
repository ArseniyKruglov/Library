function IsNumber(Variable)
{
    return isNaN(Variable) === false;
}

function IsInteger(Variable)
{
    return IsNumber(Variable) && Number.isInteger(Variable);
}

function IsString(Variable)
{
    return (typeof Variable === 'string' || Variable instanceof String);
}

function IsBoolean(Variable)
{
    return (typeof Variable === 'boolean' || Variable instanceof Boolean);
}

function IsObject(Variable)
{
    return (typeof Variable === 'object' || Variable instanceof Object);
}

function IsDate(Variable)
{
    return Variable instanceof Date;
}

function IsFunction(Variable)
{
    return Variable instanceof Function;
}