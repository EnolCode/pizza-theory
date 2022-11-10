const harina  = "400 gramos de harina de trigo";
const agua = "200 ml de agua";
const aceite = "2 cucharaditas de aceite de oliva";
const levadura = "15 gramos de levadura fresca";
const sal = "1 pizca de sal";


const ingredientes = ["Salsa de tomate", "cebolla caramelizada", "queso de cabra", "mozzarella", "bacon"]

function makingMasa(){
    return `Hacemos la masa con ${harina}, le echamos ${agua} y ${aceite}, ${sal} con ${levadura} y removemos todo.`
}
function makingPizza(){
    return `Añadimos a la masa ya 200 gramos de ${ingredientes[0]}`
   
}
function harina1(){
    return harina
}


console.log(harina1())
console.log(makingMasa())
console.log(makingPizza())
