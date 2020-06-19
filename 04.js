let arr = [];
document.addEventListener('keydown', f)

function f(ev){
    arr.push(ev.code);

}
let arr1 = ["ControlLeft", "KeyS"],
arr2 = ["ControlLeft", "KeyA"],
arr3 = ["ControlLeft", "ShiftLeft", "KeyS"];


document.addEventListener('keyup', function(ev) {
   console.log(arr)
    if(arr[0] === arr1[0] && arr[1]===arr1[1]){
        alert("Сохранено"); //ctrl+s
    }
    if(arr[0] === arr2[0] && arr[1]===arr2[1]){
        alert("Выбрано всё"); //ctrl+a  
    }
    if(arr[0] === arr3[0] && arr[1]===arr3[1] && arr[2]===arr3[2]){
        alert("Сохранено всё"); //ctrl+shift+s  
    }
        arr = [];
   })