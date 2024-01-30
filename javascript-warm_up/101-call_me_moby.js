function executeXTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
}

function execute(){
    console.log("C is fun'")
}

executeXTimes(3, execute);