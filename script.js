const textLoopElement = document.getElementById('textLoop');
const texts = ['TECH!', 'DESIGN!', 'ART!'];
let index = 0;


function themeLoad(){
    let isdark = JSON.parse(localStorage.getItem('isDark'));
    console.log(isdark);
    const skyElement = document.getElementById('sky');
    const para = document.getElementById('section_text_p1');
    const para2 = document.getElementById('not_in_phone');
    const navElement = document.querySelector('nav');

    if(isdark){
        skyElement.setAttribute('src', 'assets/pexels-kubiceknov-924824.jpg');
        skyElement.setAttribute('opacity', '1');
        para.style.color = '#c800fff5';
        para2.style.color = 'white'
        navElement.style.backgroundColor = 'black';
    }else{
        skyElement.setAttribute('src', 'assets/pexels-aleksandar-pasaric-325185.jpg');
        skyElement.setAttribute('opacity', '0.2');
        para.style.color = 'black';
        para2.style.color = 'black'
        navElement.style.backgroundColor = '#f7f3f3';

    }
}

themeLoad();

function loopText() {
    textLoopElement.textContent = texts[index];
    index = (index + 1) % texts.length;
}

function themeChange(){
    let isdark = JSON.parse(localStorage.getItem('isDark'));
    isdark = !isdark;
    localStorage.setItem('isDark',isdark)
    console.log("HEY"+isdark);
    themeLoad();
}

const h1 = document.getElementById('name');
    
window.onscroll = function (e) {
    console.log(window.scrollY+":Y"); // Value of scroll Y in px
    let the_y = window.scrollY;// 1 to 500 convert to 0 to 100 -- 
    let val = (the_y/420) * 100;
    let intval = Math.floor(val);
  // Change the value of the CSS variable

// Construct the new gradient background value
    const newBackground = `linear-gradient(-70deg, #d51616 ${the_y}%, #c800fff5 50%)`;



// Apply the new background to the h1 element
    h1.style.background = newBackground;
    h1.style.webkitBackgroundClip = 'text';
    h1.style.webkitTextFillColor = 'transparent';

};

// Call loopText function initially
loopText();

// Call loopText function every 6 seconds (matching the animation duration)
setInterval(loopText, 3000);
