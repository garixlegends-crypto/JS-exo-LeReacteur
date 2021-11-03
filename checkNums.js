const checkNums = (num1, num2) => {
    // Début de votre code
    if(num2 > num1 ){
        console.log("num2 est supérieur à num1")
    }
    else if(num2 < num1){
        console.log("num2 est inférieur à num1")
    }
    else{
        console.log("num1 et num2 sont équivalents")
    }
    // Fin de votre code
  };
  console.log(checkNums(3, 122)); // Doit afficher "num2 est supérieur à num1"