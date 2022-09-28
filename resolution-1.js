// RegEx
// Escreva uma expressão regular (regex) razoavelmente flexível, 
// que seja capaz de detectar uma placa de carro 
// (ex: ABC1234, ABC-1234, ABC 1234, abc1234, ABC - 1234, etc)
//resolução primeira questão:
function validate(placa) {
    const regex = /^[a-zA-Z]{3}[\s]?[-]?[\s]?[0-9]{4}\b/
     let result = regex.test(placa)
      
     return result
    
    }
    console.log(validate('CRM4286'))
    console.log(validate('ABC1234'))
    console.log(validate('ABC-1234'))
    console.log(validate('ABC 1234'))
    console.log(validate('abc1234'))
    console.log(validate('ABC - 1234'))

    //enviar somente o regex = /^[a-zA-Z]{3}[\s]?[-]?[\s]?[0-9]{4}\b/

    