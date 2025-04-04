const calculator = document.querySelector("#calculator");
const newDiv = document.createElement("div");
let trenutnaOperacija;
let trenutnoStevilo="";
let levDel;
let desnDel;
calculator.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      let buttonValue = e.target.textContent;
      console.log('Button clicked:', buttonValue);
        if(parseInt(buttonValue)){
            trenutnoStevilo+=buttonValue;
            console.log(trenutnoStevilo);
            levDel=parseInt(trenutnoStevilo);
        }else{
            desnDel=parseInt(trenutnoStevilo);
            switch(buttonValue){
                case "C":
                    trenutnoStevilo=""
                case "/":
                    trenutnaOperacija="/"
                    racunanje(desnDel,levDel,trenutnaOperacija);
                    break;
                case "X":
                    trenutnaOperacija="*"
                    racunanje(desnDel,levDel,trenutnaOperacija);
                    break;
                case "-":
                    trenutnaOperacija="-"
                    racunanje(desnDel,levDel,trenutnaOperacija);
                    break;
                case "+":
                    trenutnaOperacija="+"
                    racunanje(desnDel,levDel,trenutnaOperacija) 
                    break;
                case "=":
                    racunanje(desnDel,levDel,trenutnaOperacija);
                    break;
            }
            trenutnoStevilo="";
        }
        if(buttonValue=="C"){
            newDiv.textContent=" "
        }else{
            newDiv.textContent += buttonValue;
        }
        calculator.prepend(newDiv);
        console.log(levDel,desnDel)
    }
  });


  function racunanje(desnDel,levDel,trenutnaOperacija){
    
                    console.log(levDel,desnDel);
                    switch(trenutnaOperacija){
                        case "/":
                            if(desnDel)newDiv.textContent = levDel/=desnDel;
                            else newDiv.textContent = levDel/desnDel;
                            break;
                        case "*":
                            newDiv.textContent = levDel*=desnDel;
                            break;
                        case "-":
                            newDiv.textContent = levDel-=desnDel;
                            break;
                        case "+":
                            if(desnDel)newDiv.textContent = levDel+=desnDel;
                            else newDiv.textContent = levDel+desnDel;
                            break;
                        
                        }
                        console.log(trenutnaOperacija,levDel,desnDel);
                        calculator.prepend(newDiv);
  }