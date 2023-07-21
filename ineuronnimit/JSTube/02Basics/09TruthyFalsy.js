// TODO: falsy
// undefined
// null
// 0
// ''
// NaN


// This is coercion when the number is same but type is different but reacts same when we use ==
// but if we use === then check the data type as well.
var user = "2";

if (2===user){
    console.log("Condition is true");
}