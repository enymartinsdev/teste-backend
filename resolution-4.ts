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
function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
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
        console.log("data-formatada", `${this.date}`)
        let [getHours, getData] = this.date.split(' ')
        console.log("data", getData, "horas", getHours)

        const [day, month, year] = getData.split('/');
        const [hours, minutes, seconds] = getHours.split(':');
        console.log("horinhas", hours)

        const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
        console.log("aparecendo aqui após o newDate", date)

        const timestampInMs = date.getTime();
        console.log("min", timestampInMs)

        const timestampInSeconds = Math.floor(date.getTime() / 1000); //unix mode
        console.log("unixxxx", timestampInSeconds)
    }

    getDateTime(): void {
        //TODO
    }

}

let data = new GetTheDate()
data.getUnix()
data.getDateTime()
