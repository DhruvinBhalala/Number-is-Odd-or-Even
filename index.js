function check(){
    let number = document.getElementById("num").value;


    if(number % 2 == 0) {

        let a = "Even"
        document.getElementById("result").innerHTML='The number ' + number + ' is ' + a + '.';
    }

    else {
        let b = "Odd"
        document.getElementById("result").innerHTML='The number ' + number + ' is ' + b + '.';
    }

    
}

