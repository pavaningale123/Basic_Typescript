function somefun(){

    if (true)
    {
        var x=10;
        console.log(x)
    }
    console.log(x);
}
//console.log(x);//ReferenceError: x is not defined
//var is function-scoped, so it is accessible anywhere inside the function but not outside.

// 1. Function Scope
// Variables declared with var are accessible anywhere inside the function in which they are defined.

// 2. Global Scope (if outside function)
// If var is declared outside any function, it becomes a global variable and can be accessed anywhere.

// 3. No Block Scope
// var does not respect block scope (if, for, etc.); even if declared inside a block, it is still accessible 
// throughout the entire function.