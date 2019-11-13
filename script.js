var btnElement = document.querySelector('#button');

btnElement.style.width = 100;
btnElement.style.height = 100;
btnElement.style.float = 'left';



btnElement.onclick = function() {
    var appElement = document.createElement('div');
    appElement.setAttribute('class', 'box');
    appElement.style.backgroundColor = '#F00';
    appElement.style.width = 100;
    appElement.style.height = 100;
    appElement.style.position = 'relative';
    appElement.style.float = 'left';

    var setElement = document.querySelector('#app');
    setElement.appendChild(appElement);

    appElement.onmouseover = function(){
        appElement.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}