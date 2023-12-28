const inputs = document.getElementsByTagName('input');
const textarea = document.getElementsByTagName('textarea');

console.log(input);
inputs.forEach((input) => {
    input.addEventListener('click', () => {
        input.classList('.active');
    });
});

textarea.addEventListener('click', () => {
    textarea.classList('.active')
});