let newXHR = callback => {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 注册回调
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.response);
        }
    };
    return xmlhttp;
};

export function post(url, param = {}, callback) {
    let xmlhttp = newXHR(callback);
    xmlhttp.open('POST', url, true);
    xmlhttp.send(param);
};

export function get(url, callback) {
    let xmlhttp = newXHR(callback);
    xmlhttp.open('GET', url, true);
    xmlhttp.send(null);
};
