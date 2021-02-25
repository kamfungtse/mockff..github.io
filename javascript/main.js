
let myImage = document.querySelector('img');

myImage.onclick = function() {
    // myImage.setAttribute('src', 'img/img2.jpg');
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/img1.jpg') {
      myImage.setAttribute('src', 'img/img2.jpg');
    } else {
      myImage.setAttribute('src', 'img/img1.jpg');
    }
    // alert('test');
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    }
    else {
        localStorage.setItem('name',myName);
        myHeading.textContent = myName + '的迷宫';
    }

    
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '的迷宫';
  }

myButton.onclick = function(){
    setUserName();
}