/*
Classe em TypeScript
Crie uma classe em TypeScript que ao ser instanciada, receba em seu construtor
uma string de data em formato "HH:mm:ss DD/MM/YYYY".
Trate os possíveis erros ao instanciar.
Em seguida, adicione os métodos getUnix() e getDatetime()
que retornam a data utilizada na construção em formato UNIX
ou 'YYYY-MM-DD HH:mm:ss' respectivamente.
*/
// ✅ Format using reusable function
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
// format as "hh:mm:ss YYYY-MM-DD "
function formatDate(date) {
    return ([
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
    ].join(':')
        + ' ' +
        [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/'));
}
var GetTheDate = /** @class */ (function () {
    function GetTheDate() {
        this.date = formatDate(new Date());
    }
    GetTheDate.prototype.getUnix = function () {
        this.date = formatDate(new Date());
        console.log("data-formatada", "".concat(this.date));
        var _a = this.date.split(' '), getHours = _a[0], getData = _a[1];
        console.log("data", getData, "horas", getHours);
        var _b = getData.split('/'), day = _b[0], month = _b[1], year = _b[2];
        var _c = getHours.split(':'), hours = _c[0], minutes = _c[1], seconds = _c[2];
        console.log("horinhas", hours);
        var date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
        console.log("aparecendo aqui após o newDate", date);
        var timestampInMs = date.getTime();
        console.log("min", timestampInMs);
        var timestampInSeconds = Math.floor(date.getTime() / 1000); //unix mode
        console.log("unixxxx", timestampInSeconds);
    };
    GetTheDate.prototype.getDateTime = function () {
        this.date = formatDate(new Date());
        var _a = this.date.split(' '), getHours = _a[0], getData = _a[1];
        var _b = getData.split('/'), year = _b[0], month = _b[1], day = _b[2];
        var result = getData + ' ' + getHours;
        console.log(result);
        return result;
    };
    return GetTheDate;
}());
var data = new GetTheDate();
data.getUnix();
data.getDateTime();
