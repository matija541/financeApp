const calculator = document.querySelector("#calculator");
const newDiv = document.querySelector(".rezultat");
let trenutnaOperacija;
let trenutnoStevilo="";
let levDel;
let desnDel;
let posodabljanje = false;
let mogoce;
calculator.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      let buttonValue = e.target.textContent;
      console.log('Button clicked:', buttonValue);
        if(parseInt(buttonValue)){
            trenutnoStevilo+=buttonValue;
            console.log("Izpisujem trenutno stevilo na kalkulatorju: "+trenutnoStevilo);
        }else{
            desnDel=parseInt(trenutnoStevilo);
            switch(buttonValue){
                case "C":
                    trenutnoStevilo=""
                case "/":
                    trenutnaOperacija="/"
                    break;
                case "X":
                    trenutnaOperacija="*"
                    break;
                case "-":
                    trenutnaOperacija="-"
                    break;
                case "+":
                    trenutnaOperacija="+" 
                    if(desnDel&&levDel){
                        mogoce=racunanje(desnDel,levDel,trenutnaOperacija);
                        posodabljanje = true;
                    }
                    break;
                case "=":
                    racunanje(desnDel,levDel,trenutnaOperacija);
                    break;
            }

            //posodabljanje?levDel=parseInt(trenutnoStevilo):levDel=mogoce;
            levDel=parseInt(trenutnoStevilo)
            trenutnoStevilo="";
        }
        if(buttonValue=="C"){
            newDiv.textContent=" "
        }else{
            newDiv.textContent += buttonValue;
        }
        calculator.prepend(newDiv);
        console.log("lev del:"+levDel+" desn del: "+desnDel)
    }
  });


  function racunanje(desnDel,levDel,trenutnaOperacija){
    
                    //console.log(levDel,desnDel);
                    let rezultat;
                    switch(trenutnaOperacija){
                        case "/":
                            rezultat = levDel/desnDel;
                            newDiv.textContent = rezultat;
                            break;
                        case "*":
                            rezultat = levDel*desnDel;
                            newDiv.textContent = rezultat;
                            break;
                        case "-":
                            rezultat = levDel-desnDel;
                            newDiv.textContent = rezultat;
                            break;
                        case "+":
                            rezultat = levDel+desnDel;
                            newDiv.textContent = rezultat;
                            break;
                        
                        }
                        console.log(trenutnaOperacija,levDel,desnDel);
                        calculator.prepend(newDiv);
                        return rezultat;
  }