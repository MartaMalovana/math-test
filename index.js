 function implementAction () {
    // Watch the button
    const count = document.querySelector(".count");
    count.addEventListener("click", getResult);

    function getResult (e) {
        // Get operation type
        const operation = document.querySelector('input[name="operation"]:checked').value;
        console.log(operation);
        // Get numbers
        const firstNumber = Number(document.querySelector(".first-num").value);
        const secondNumber = Number(document.querySelector(".second-num").value);
        // Do operation
        let result = 0;
        let oper ='';
        if(firstNumber && secondNumber) {
            switch(operation) {
                case 'add': 
                    result = firstNumber + secondNumber;
                    oper = '+';
                    break;
                case 'sub': 
                    result = firstNumber - secondNumber;
                    oper = '-';
                    break;
                case 'mult': 
                    result = firstNumber * secondNumber;
                    oper = '*';
                    break;
                case 'div': 
                    result = firstNumber / secondNumber;
                    oper = '/';
                    break;
                default: break;
            };
        } else {
            return;
        };
        // Add to DOM
        const resultLine = document.querySelector('.result');
        resultLine.textContent = `RESULT: ${firstNumber} ${oper} ${secondNumber} = ${result}`;
        e.preventDefault();

        return resultLine;
    };

 };

 implementAction();