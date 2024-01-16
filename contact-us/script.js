


const submitButton = document.querySelector('#btn');
const formItem = document.querySelectorAll(".form-item"); 
const nameField = document.getElementById("name"); 
const emailField = document.getElementById("email"); 
const numberField = document.getElementById("number"); 
const textAreaField = document.getElementById("textarea"); 

 
// 




//

submitButton.addEventListener('click',async () => {
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
        const username = nameField.value; 
        const userEmail = emailField.value; 
        const userNumber = numberField.value; 
        const userDes = textAreaField.value;
          for(const item of arrinput)
          {
             item.value="";
          }
          submitButton.textContent="Submitted"; 

          const obj = {
            username,userEmail,userNumber,userDes
          }
          
         const res = await fetch("http://localhost:3000/submitForm",{
            method : "POST",
            headers : {
            "Content-Type" : "application/json",
        },
            body : JSON.stringify(obj) 
        }); 
        const data = await res.json(); 
        console.log(data); 
    }
   }
   else 
   alert("You have already submitted once"); 
    }); 




