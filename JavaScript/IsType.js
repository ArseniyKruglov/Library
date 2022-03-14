function IsBoolean(Variable)
{
    return (typeof Variable === 'boolean' || Variable instanceof Boolean);
}

function IsNumber(Variable)
{
    return isNaN(Variable) === false;
}

function IsInteger(Variable)
{
    return IsNumber(Variable) && Number.isInteger(Variable);
}

function IsDate(Variable)
{
    return Variable instanceof Date;
}

function IsString(Variable)
{
    return (typeof Variable === 'string' || Variable instanceof String);
}

function IsFunction(Variable)
{
    return Variable instanceof Function;
}