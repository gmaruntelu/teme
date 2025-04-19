let n = 40

function devidedByTen (n){
    if (n % 10===0) {
        console.log (true)
    } else {
        console.log(false)
    }
}

devidedByTen(40)

function tellFortune (n,z,y,x) {
    console.log('Vei fi un' + x + 'in' + y + 'casatorit cu' + z + "si vei avea" + n + 'copii')
}

tellFortune (3,'Emanuel','Italia','Programator')


let day = 3

switch (day) {
    case 1 : 
    console.log("Luni")
    break;
    case 2 : 
    console.log("Marti")
    break;
    case 3 : 
    console.log("Miercuri")
    break;
    case 4 : 
    console.log("Joi")
    break;
    case 5 : 
    console.log("Vineri")
    break;
    case 6 : 
    console.log("Sambata")
    break;
    case 7 : 
    console.log("Duminica")
    break;
    default:
        console.log("weekend")
    

}
    
