function paresAleatorios(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        let randomNum =Math.floor(Math.random()*100);
        if (randomNum % 2 === 0) {
            array.push(randomNum)
            
        }
    
    }
    //const pares = array.filter(element => element % 2 === 0)
    console.log("random pairs",array);    
};
paresAleatorios(10);