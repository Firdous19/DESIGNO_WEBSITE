


const submitButton = document.querySelector('#btn');
const formItem = document.querySelectorAll(".form-item"); 
const forminputs = [];

// 




//

submitButton.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.form_input');
    const arrinput = Array.from(inputs)
    // const arrInputPara = Array.from(input_paras);
    if(submitButton.textContent!=="Submitted")
    {
    const input_paras = document.querySelectorAll('.input_para');
    for(const item of input_paras)
    {
        item.remove();  
    }
    for (let i=0;i<arrinput.length;i++) {
    if (arrinput[i].value === '') {
               formItem[i].insertAdjacentHTML("beforeend","<p class='input_para'>field can't be empty</p>"); 
    }}
    if(arrinput.every((item)=>(item.value!=="")))
    {
         
          for(const item of arrinput)
          {
             item.value="";
          }
          submitButton.textContent="Submitted"; 
    }
   }
   else 
   alert("You have already submitted once"); 
    }); 
 
  
  
//   dsdsdsdsdsds
  
    // if (empty.length === 0) {
    //     alert("Form submitted Succesfully");
    //     arrinput.forEach((input) => {
    //         input.value = '';
    //     });
    // }
    // else {
    //     for (const index of empty) {
    //         arrInputPara[index].classList = 'active';
    //     }
    // };


// console.log(inputs)


