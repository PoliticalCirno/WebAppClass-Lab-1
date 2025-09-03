const greet2 = function(aname="ron", lname="weasley"){

    console.log(`Hello ${aname} ${lname}`);
}

//greet2();
//greet2("Harry");
//const greet3 = (aname, lname="weasley") => console.log("Balls " + aname + " " + lname);
//greet3("LIBERTY");

const sandwich = {
    bread : "Baguette",
    meat : "Chateaubriand",
    toppings: ["Compound butter", "Bechamel", "Hollandaise"],
    smell : function(){console.log("Exquisite")}
}
const {bread, meat, toppings, smell} = sandwich;
console.log(sandwich.bread + " " + sandwich.meat + " " + sandwich.toppings)
sandwich.smell();

console.log(bread + " " + meat + " " + toppings)
sandwich.smell();