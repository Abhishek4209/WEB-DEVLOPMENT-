function h(x,fn){
    // h-> is a hof
    // fn -> callback
    console.log(x*x);
    fn();
}

h(10,function(){
    console.log('done with callback');
})

setTimeout(function(){
console.log('timer done');
},3000)