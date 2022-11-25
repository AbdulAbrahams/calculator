const calculate = document.getElementById('calculation');
const answers = document.getElementById('output');
const but = Array.from(document.getElementsByClassName('button'));
const operators = document.querySelector(['data-operand']);
let lastPosition = but.length -1;
let sum = '';

function evaluateSum() {
    but.map( button => {
    button.addEventListener('click', (e) =>{
       switch(e.target.innerText) {
        case('='):
        output.innerText = eval(calculate.innerText);
            break
            case('←'):
                calculate.innerText = calculate.innerText.slice(0,-1);
                break
            case('+'):
                if(calculate.innerText[calculate.innerText.length -1] == ('+')){
                    return
                }else if(calculate.innerText[calculate.innerText.length -1] == ('/')){
                    return('+')
                }
                case('-'):
                if(calculate.innerText[calculate.innerText.length -1] == ('-')){
                    return
                }else if(calculate.innerText[calculate.innerText.length -1] == ('-')){
                    return('*')
                } 
                case('*'):
                if(calculate.innerText[calculate.innerText.length -1] == ('*')){
                    return
                }else if(calculate.innerText[calculate.innerText.length -1] == ('*')){
                    return('+')
                }else if(calculate.innerText[calculate.innerText.length -1] == ('+')){
                    return('*')
                }
                case('/'):
                if(calculate.innerText[calculate.innerText.length -1] == ('/')){
                    return
                }else if(calculate.innerText[calculate.innerText.length -1] == ('+')){
                    return('/')
                }else if(calculate.innerText[calculate.innerText.length -1] == ('*')){
                    return('/')
                }
                case('.'):
                if(calculate.innerText[calculate.innerText.length -1] == ('.')){
                    return
                }          
            default:
            calculate.innerText += e.target.innerText;     
       }
    });
});
  }
  evaluateSum();

function clearSum(){
    but.map( button => {
        button.addEventListener('click', (e) =>{
           switch(e.target.innerText) {
    case('C'):
        calculate.innerText = '';
        answers.innerText = '';
            break
       }
    })
})
};

clearSum();