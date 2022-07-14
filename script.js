//Exercice 1
let myAlphabet =[
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"$",
"*",
"/",
"-",
"+",
]

console.log(myAlphabet.length); // 31
//Exercice 2
let planets=["Terre", "Saturne", "Mars", "Nepturne", "Lune"] ;
console.log(planets);

planets.forEach(planet => {
    console.log(planet);
});

let someDataTypes=['String', 1, true, undefined];
someDataTypes.forEach((someDataType)=>{
    console.log(someDataType);
});
console.log(typeof someDataTypes[0]);
console.log(typeof someDataTypes[1]);
console.log(typeof someDataTypes[2]);
console.log(typeof someDataTypes[3]);
//Exercice 3

let empAray=[];
console.log(empAray);

let copyaddempAray = empAray.slice();
copyaddempAray.push("Parfait");
console.log(copyaddempAray);
// Exercice 4
let furnitures=['Tabel', 'Chairs', 'Couch'];
 furnitures.forEach((furniture) => {

   let newArrayOfFurniture = new String(furniture);
   console.log(newArrayOfFurniture.split(""))

 });

//console.log(furnitures.toString().split(""))
   
let values1= ["Apple", 1, false, "2"];

values1.forEach(value=>{
    if(typeof(value)==="number"){
        values1.splice();
      console.log(value);
    }
  })

let values2 = [`5`, "Fries", 2 , true];

values2.forEach(value=>{
    if(typeof(value)==="number"){
        values2.splice();
      console.log(value)
    }
  })

let values3 = ["Mars", "Strawberry", 9];

values3.forEach(value=>{
    if(typeof(value)==="number"){
        values3.splice();
      console.log(value);
    }
  })
    
let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];

const commonWord= studentCoursesA.filter(Element=> studentCoursesB.includes(Element));
console.log(commonWord);


      
    










