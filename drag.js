

function drag(id) {  
    console.log('drag');
    var obj = document.getElementById(id);
    obj.onmousedown = function (e) { 
        var disX = 1;
        console.log('mousedown');
    }
}

console.log(123);