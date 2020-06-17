let button = document.getElementById('save'),
    input = document.getElementById("text"),
    message=document.getElementById("message"),
    saved;

console.log(saved);
button.onclick = function (){
    if (input.value !== ""){
        input.value="";
        saved=true;
    }
    else {
        message.innerHTML="Пустая строка";
        saved = true;
    }
};
window.addEventListener('beforeunload', function(e){
    if (input.value!==""){
        saved=false
    }
    if(saved === false){
        e.preventDefault();
        e.returnValue = '';
    }
});