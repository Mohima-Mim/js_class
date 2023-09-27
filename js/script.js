var a = "apple";
a = "আপেল" ;
console.log(a);
// this is a string  and also it is a primitive data types.
let b = 'mango'; 
b = 'আম';
console.log(b);
// this is a string  and also it is a primitive data types.
const c = `banana`;
console.log(c); 
// this is a string  and also it is a primitive data types.

//---------------------------------------------------------------------------

var d = 1; 
console.log(d);
// this is a (number) integer and also it is a primitive data types.
let e = 100.56;
console.log(e); 
// this is a (number) float and also it is a primitive data types.
const f = 123456789086467476;
console.log(f);
// this is a (number) bigInt and also it is a primitive data types.

//-----------------------------------------------------------------------------

var g = true; 
console.log(g);
// this is a boolean and also it is a primitive data types.
let h = false;
console.log(h);
 // this is a boolean and also it is a primitive data types.
const i = true;
console.log(i);
 // this is a boolean and also it is a primitive data types.
 
//-----------------------------------------------------------------------------

var j = 5; 
console.log(j);
// this is a number and also it is a primitive data types.
let k = "mohima";
console.log(k);
 // this is a string and also it is a primitive data types.
const l = true;
console.log(l);
 // this is a boolean and also it is a primitive data types.

//-----------------------------------------------------------------------------

var m = true; 
console.log(m);
// this is a boolean and also it is a primitive data types.
let n = 256.789;
console.log(n);
 // this is a number (float) and also it is a primitive data types.
const o =`i`+` `+`love`+` `+`my`+` `+`self`;
console.log(o);
 // this is a boolean and also it is a primitive data types.

//-----------------------------------------------------------------------------





var p = ['mohima','mim'] ; 
console.log(p);
// this is a array and also it is a non-primitive data types.
let q = ["mohima","mahuya"];
console.log(q);
 // this is a array and also it is a non-primitive data types.
const r = [`mohima`,`redoan`];
console.log(r);
 // this is a array and also it is a non-primitive data types.




//-----------------Variabble Name Convention--------------- (under_Score)

 let a_a = 30;
 let b_b = 20;

//Arithmatic operator----------------------------------

console.log(a_a + b_b);
console.log(a_a - b_b);
console.log(a_a * b_b);
console.log(a_a / b_b);
console.log(a_a % b_b);
console.log(a_a**2);
console.log(b_b**2);

//-----------------Variabble Name Convention---------------(camelCasing)

let myNameIs = 20;
let mohimaMim = 40;

let aa = 20;
let bb = 20;

let aaa = 20;
let bbb = '20';

// Comparison Operator------------------------------------------

console.log(myNameIs == mohimaMim); //== flase
console.log(aa == bb); // == true
console.log(aaa == bbb); // == true

console.log(myNameIs === mohimaMim); //=== flase
console.log(aa === bb); // === true
console.log(aaa === bbb); // === false

console.log(myNameIs < mohimaMim);  // < true
console.log(aa < bb); // < false
console.log(aaa < bbb); // < false

console.log(myNameIs <= mohimaMim); // <= true
console.log(aa <= bb); // <= true
console.log(aaa <= bbb); // <= true

console.log(myNameIs > mohimaMim); // > flase
console.log(aa > bb); // > flase
console.log(aaa > bbb); // > flase


//Array Methods---------------------(class-04)----------------------------


//-------concat------------
let MM = [ 'M' , 'o' , 'h'];
let mm = [ 'i' , 'm' , 'a'];

console.log(MM.concat(mm))


let myFirstArray = [ "mahuya" , "mohima" , "redoan" , "tamzid" , "jahid" , "nusrat" , "mushira"];

//myFirstArray.shift()
//myFirstArray.unshift("Apu")
//myFirstArray.pop()
//myFirstArray.push("end")
//myFirstArray.splice(2 , 0 , "mim")
//myFirstArray.splice(2 , 1 , "mim")
//myFirstArray.splice(2 , 1 )
//delete myFirstArray[0]
//console.log(myFirstArray.length)
//let mim = myFirstArray.join(' loves ')
//console.log(mim)
console.log(myFirstArray)


//loop------------------------------------

for(let i = 1 ; i <=10 ; i++){
    console.log(`${15} x ${i} = ${15*i}`)
}


for(let i = 0 ; i< myFirstArray.length ; i++){
    console.log(myFirstArray[i])
}

