//console.log("pozdrav iz JS");

//var a=5;
//console.log(a);

//var b='Jova';
//a = "car";
//console.log(a);

//var  vreme =(9); 
 //if vreme <(10); {
   //  console.log("Dobro jutro");
 //} else {
   //  console.log("Dobar dan");
 //}


 //var i = 0;
 //do {
   //alert( i );
   //i++;
 //} while (i <= 10);


//var auta = ["renault", "bmw", "vw"];
//console.log(auta[1])
//var a = auta[0]
//console.log(a)
//var duzinaNiza = auta.length
//console.log(duzinaNiza)
//auta.push('mercedes')
//console.log(auta.length)
//for (var i = 0; i < auta.length; i++) {
//  console.log(auta[i])
//}



//Zadatak 1
//A)
var x = 3,
y = -4,
z = x - y
if (z > 0) {
  console.log("Zbir prve dve je pozitivan broj")
} else if (z < 0) {
  console.log("Razlika prve dve je pozitivan broj")
}

//B)
var x = 3,
 y = -4,
 z = x - y
if (x * z > 15)
  if(y < 0) {
    console.log("Proizvod prve i trece je veci od 15 i druga varijable je negativna")
  }
else if (x * z > 15) 
  if (y > 0) {
    console.log("Proizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna")
  }

//Zadatak 2
var x = 3
switch (true) {
  case (x >= 1 && x <= 5):
      console.log('Zadata vrednost je izmedju 1 i 5 i zadata vrednost je (' + x + ')')
      break
  case 2: (x >= 8 && x <= 10) 
  console.log("Zadata vrednost je izmedju 8 i 10")
  break
  default:
  console.log("Спроси блять у Витали Zadata vrednost nije u navedenom opsegu")
}


//Zadatak 3
var x = -7
    var у = 1
    while (x + y < 1) {
      console.log( x + y )
        y++
    }

//Zadatak 4
var i;
for (i = 1; i <= 10; i++)
if (i % 2 == 0) {
  console.log( i )
}

//Zadatak 5
var auta = ["saab", "volvo", "mercedes"]
var duzinaNiza = auta.length
console.log(duzinaNiza)
for (var i = 0; i < auta.length; i++) {
  console.log(auta[i])
}

//Zadatak 6
var auta = ["saab", "volvo", "mercedes"]
var duzinaNiza = auta.length
console.log(duzinaNiza)
for (var i = 0; i < auta.length; i++) {
  console.log(auta[i])  
  if (auta[i] == "volvo") {
    index = i
    break
  }
}

//Zadatak 7
var auta = ["saab", "volvo", "mercedes"]
var duzinaNiza = auta.length
console.log(duzinaNiza)
for (var i = 0; i < auta.length; i++) {
  console.log(auta[i])  
  if (auta[i] == "volvo") {
    index = i
    continue
  }
}

//Zadatak 8
for (var i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log( i );
  }
}

//Zadatak 9
//Napisati program koji računa srednju vrednost niza celih brojeva.
var grades = [80, 77, 88, 95, 68]
var total = 0
for(var i = 0; i < grades.length; i++) {
    total += grades[i]

var avg = total / grades.length
console.log( total )
}

//Zadatak 13 i Zadatak 14

//Zadatak 12
for (var i = 0; i < 4; i++) {
   for (var j = 0; j < 4; j++) {
   }

}

