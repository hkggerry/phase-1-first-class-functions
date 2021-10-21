function receivesAFunction(spy){
    console.log(spy());
}
receivesAFunction(function(){ return "This is how you get a call back!"});

function returnsANamedFunction(){
    return function namedFunction(){
        return "Here is a Named Function."
    };
}

function returnsAnAnonymousFunction(){
    return () => {
        return "Here is an Anonymous Function."
    }
}