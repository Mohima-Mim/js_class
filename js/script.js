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
console.log(myFirstArray);
console.log(myFirstArray.reverse());


//----------------For-loop------------------------------------

for(let i = 1 ; i <=10 ; i++){
    console.log(`${15} x ${i} = ${15*i}`)
}


for(let i = 0 ; i< myFirstArray.length ; i++){
    console.log(myFirstArray[i])
}

//_______________________________Class=05_______________________________

//------slice--------------------------
let ac = "amr nam mohima";
console.log(ac.slice(8 , 14));


let bc = ac.slice(0 , 4);
console.log(bc);


//---------subString----------------
let cc = "Mohima Akter Mim";
console.log(cc.substring(7 , 12));

let dc = cc.substring(0 , 12);
console.log(dc);


// -----------substr--------------------
let ec = "taufik vhaiya";
console.log(ec.substr(7));


// -----------replace/replaceAll-------------
let fc = "i like my work.";
console.log(fc.replace("like" , "love"));

let gc = "I love my work and work and work and work.";
let firstPart = gc.slice(0 , 6);
let secondPart = gc.slice(9 , 42);
let result = firstPart.concat(secondPart); //---------------concat-------------------
console.log(result);
console.log(result.replaceAll("work" , "mySelf"));

// ----------toUpperCase-----------------------
let hc = "sheikh redoan ahmed srabon";
console.log(hc.toUpperCase());


// ----------toUpperCase-----------------------
let ic = "SHEIKH REDOAN AHMED SRABON";
console.log(ic.toLowerCase());

// ----------trim-----------------------
let jc = "                           Sheikh Redoan Ahmed Srabon                           "
console.log(jc.trim());
console.log(jc.trimStart());
console.log(jc.trimEnd());



//---------String Lenth Check-----------------
console.log(gc.length);         





// ----------------if-else---------------------





// --------------Switch-------------------------
let flower = "rose";

switch (flower){
    case "rose":
        console.log("Roses are red");
        break;
    case "violet":
        console.log("Violets are blue");
        break;
    case "sunflower":
        console.log("Sunflowers are yellow");
        break;
    default:
        console.log("Please select another flower");
}

// --------------------Function---------------------


// ------------------Normal_Function---------------

const  body = document.querySelector("body");



function myNormalFunction (a = "w" , b = "x" , c = "y" , d = "z"){
    let fullNAme = a.concat(b).concat(c).concat(d);
    return fullNAme;
};

let returnFullName = myNormalFunction("My" , " name" , " is" , " Mohima");

function nameShowFunction (name = "Nothing To Show") {
    let heading = document.createElement("h1");
    body.appendChild(heading);
    heading.innerHTML= name;
    heading.style.color= "#000";
    heading.style.textAlign= "center";
    heading.style.marginTop= "200px";
    heading.style.fontSize= "70px";
    body.style.background= "linear-gradient(7deg, rgb(0, 255, 207), rgb(177, 14, 113))";
    body.style.height= "100vh";
};

nameShowFunction(returnFullName);


//-------------Arrow_Function--------------------------


let myArrowFunction =  (ab = "w" , bb = "x" , cb = "y" , db = "z") => {
    let fullNAme = ab.concat(bb).concat(cb).concat(db);
    return fullNAme;
}
let arrowFullName = myArrowFunction("I" , " love" , " my" , " work");

let nameShowArrowFunction =  (name2 = "Nothing To Show") => {
    let heading1 = document.createElement("h2");
    body.appendChild(heading1);
    heading1.innerHTML= name2;
    heading1.style.color= "white";
    heading1.style.textAlign= "center";
    heading1.style.marginTop= "80px";
    heading1.style.fontSize= "50px";
};

nameShowArrowFunction(arrowFullName);


//-----------------Anonymous_Function-----------------------------


let annoFun = function (aaa = "w" , bbb = "x" , ccc = "y" , ddd = "z"){
    let fullNAme = aaa.concat(bbb).concat(ccc).concat(ddd);
    return fullNAme;
};

 let anFun = annoFun("I" , " love" , " java" , " Script");

let newFun = function (name3 ="Nothing to show"){
    let heading3 = document.createElement("h3");
    body.appendChild(heading3);
    heading3.innerHTML= name3;
    heading3.style.color= "#000";
    heading3.style.textAlign= "center";
    heading3.style.marginTop= "80px";
    heading3.style.fontSize= "60px";
};

newFun(anFun);