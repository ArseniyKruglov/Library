function SendRequest(URL, Data, Callback)
{
    let FD = new FormData();
    for (let loop_Field in Data)
        FD.append(loop_Field, Data[loop_Field]);

    let XHR = new XMLHttpRequest();
    XHR.open('POST', URL);
    XHR.send(FD);

    if (Callback)
        XHR.onreadystatechange = () =>
        {
            if (XHR.readyState === 4)
                Callback(XHR.status, XHR.responseText)
        };
}