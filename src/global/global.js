function format (date, fmt) {
    date = new Date(date)
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    var o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (var k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            var str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};

function toCn (date) {
    var cnFmt = ['年','月','日']
    var fmtDate = format(date,'yyyy-M-d');
    fmtDate = fmtDate.split('-');
    var cnDate = '';
    fmtDate.forEach(function (ele,i){
        cnDate = cnDate + ele + cnFmt[i];
    });
    return cnDate;
}





export default {
    format,
    toCn
}