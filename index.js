let calculate = document.getElementById('calculation');
let answers = document.getElementById('output');
let but = Array.from(document.getElementsByClassName('button'));
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

  


