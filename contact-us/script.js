const submitButton = document.querySelector('#btn');

const forminputs = [];
const empty = [];

let obj = {
    name: '',
    email: '',
    phone: '',
    message: ''
};

submitButton.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.form_input');
    const input_paras = document.querySelectorAll('.input_para');
    let i = 0;

    const arrinput = Array.from(inputs)
    const arrInputPara = Array.from(input_paras);

    for (const input of arrinput) {
        if (input.value === '') {
            empty.push(i);
        }
        i++;
    }

    if (empty.length === 0) {
        alert("Form submitted Succesfully");
        arrinput.forEach((input) => {
            input.value = '';
        });
    }
    else {
        for (const index of empty) {
            arrInputPara[index].classList = 'active';
        }
    }
});


// console.log(inputs)


