function letfunc(){

    if(true){
        let a=10;
        console.log(a);
    }
    console.log(a);//ReferenceError: a is not defined
}
console.log(a);//ReferenceError: a is not defined

// 1. Block Scope
// Variables declared with let are only accessible within the block { } where they are defined 
// (e.g., if, for, function blocks).
// 2. Not Accessible Outside Block
// If you try to access a let variable outside its block, it throws a ReferenceError.