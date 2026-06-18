/*
 =======================================
 // generator function


function* generator() {
    yield 1 ;
    yield 2 ;
    yield 3 ;
    yield 4 ;
    yield 5 ;
}

const gen = generator() ;
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().done)



 =======================================
*/

/*
 =======================================

 // const vs object.freeze()

const obj = {name:"prem" , address: {city:"delhi"}} ;
console.log(obj.name) ;
obj.name = "aalu" ; // allowed
console.log(obj.name) ;

const frozen = Object.freeze({
    name:"prem"
})

console.log(frozen.name) ;
frozen.name= "gobi" //not allowed (it will be ignored silently)
console.log(frozen.name) ;


 =======================================
*/



console.log(a) ;  // undefined because a is hoisted
var a = 20 ;

hello() ; // works fine
function hello() {
    console.log("say hi!") ;
}

console.log(b); // reference err (TDZ)  
let b = 40 ;
