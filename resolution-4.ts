//Crie uma classe em TypeScript que ao ser instanciada, 
//receba em seu construtor uma string de data em formato "HH:mm:ss DD/MM/YYYY". 
//Trate os possíveis erros ao instanciar. 
//Em seguida, adicione os métodos getUnix() e getDatetime()
//que retornam a data utilizada na construção em formato UNIX ou 'YYYY-MM-DD HH:mm:ss' respectivamente.

// Format using reusable function
function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0'); //every time will be with 2 digits, even when 01:00:00
}

// format as "hh:mm:ss YYYY-MM-DD "
function formatDate(date: Date) {
    return (
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':')
        + ' ' +
        [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/')
    )
}



class GetTheDate {
    date: string

    constructor() {
        this.date = formatDate(new Date())
    }

    getUnix(): void {
        this.date = formatDate(new Date())

        let [getHours, getData] = this.date.split(' ')

        const [day, month, year] = getData.split('/');
        const [hours, minutes, seconds] = getHours.split(':');

        const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);

        const timestampInMs = date.getTime();
        console.log("min", timestampInMs)

        const timestampInSeconds = Math.floor(date.getTime() / 1000); //unix mode
        console.log("unix", timestampInSeconds)
    }

    getDateTime(): string {
        const formatedDate = formatDate(new Date())
        this.date = formatedDate

        let [getHours, getData] = this.date.split(' ')

        let dia = getData.split("/")[0];
        let mes = getData.split("/")[1];
        let ano = getData.split("/")[2];
        console.log("day", dia, "mes", mes, "ANO", ano)

        const formatedYearFirst = ano + '-' + mes + '-' + dia
        console.log("finalResult", formatedYearFirst + ' ' + getHours)
        return formatedYearFirst
    }

}

let getDates = new GetTheDate()
getDates.getUnix()
getDates.getDateTime()
