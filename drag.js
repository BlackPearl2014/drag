

function drag(id) {  
    console.log('drag');
    var obj = document.getElementById(id);
    obj.onmousedown = function (e) { 
        console.log('mousedown');
    }
}

console.log(123);