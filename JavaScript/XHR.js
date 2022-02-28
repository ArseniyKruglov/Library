function SendRequest(URL, Type, Data, Callback)
{
    const XHR = new XMLHttpRequest();

    if (Type === 'GET')
    {
        if (Object.keys(Data).length !== 0)
        {
            let First = true;
            for (let loop_Field in Data)
            {
                URL += `${First ? '?' : '&'}${loop_Field}=${Data[loop_Field]}`;
                First = false;
            };
        };

        XHR.open('GET', URL);
        XHR.send();
    }
    else
    {
        const Form = new FormData();
        for (let loop_Field in Data)
            Form.append(loop_Field, Data[loop_Field]);

        XHR.open('POST', URL);
        XHR.send(Form);
    };


    if (Callback !== undefined)
        XHR.onreadystatechange = () =>
        {
            if (XHR.readyState === 4)
                Callback({ 'Code': XHR.status, 'Message': XHR.statusText }, XHR.responseText)
        };
}