let fizzbuzz =(a,b) =>{

    for(let i =1; i<=100; i++){

    if(i%a==0 && i%b==0){        
        console.log("FizzBuzz");    
    }else if(i%a==0){
        console.log("Fizz");
    }else if(i%b==0){
            console.log("Fizz");
    }else {
        console.log(i);
    }
  }
}

fizzbuzz(4,2);