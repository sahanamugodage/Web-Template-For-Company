let checkBox = document.querySelector('.cheked-box');
console.log(checkBox);
checkBox.addEventListener('change',function(){
    if (checkBox.checked) {
        document.querySelector('body').style.backgroundColor = '#033480';
    } else {
        document.querySelector('body').style.backgroundColor = '#5d5db5';
    }
});