const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('bg')) {
    const background =  urlParams.get('bg');
    const urlImage = `url(img/${background}.gif)`
    document.getElementById('img-container').style.backgroundImage = urlImage;
}

const moveWindowOnSTH = urlParams.has('moveWindowOnSTH');
if (moveWindowOnSTH) {
    let newWindow;

    let x, y, mousemoveCount;
    x = 10; y = 10;

    setInterval(() => {
        x = -x;
        y = -y;
    }, 1600);
    setInterval(() => {
        newWindow.moveTo(Math.floor(Math.random() * 800) + 200, Math.floor(Math.random() * 800) + 200);
    }, 5000);

    function moveWindow() {
        window.resizeTo(250, 250);
        window.moveBy(x, y);
        setTimeout(moveWindow, 1);
    }
    function openWindow(event) {
        newWindow = window.open(`http://127.0.0.1:5500/?bg=${background}`, '', 'width=250, height=250');
        moveWindow();
    }

    document.addEventListener('load', moveWindow)
    document.addEventListener('click', openWindow);
    document.addEventListener('keydown', openWindow);
    document.addEventListener('mousemove', openWindow);
}


//FIX THIS

// const moveWindowInterval = urlParams.has('moveWindowInterval');
// if (moveWindowInterval) {
//     let newWindow;

//     let x, y, mousemoveCount;
//     x = 10; y = 10;

//     setInterval(() => {
//         x = -x;
//         y = -y;
//     }, 1600);
//     setInterval(() => {
//         newWindow.moveTo(Math.floor(Math.random() * 800) + 200, Math.floor(Math.random() * 800) + 200);
//     }, 5000);

//     setInterval(openWindow(), 3000);

//     function moveWindow() {
//         window.resizeTo(250, 250);
//         window.moveBy(x, y);
//         setTimeout(moveWindow, 1);
//     }
//     function openWindow() {
//         newWindow = window.open(`http://127.0.0.1:5500/?bg=${background}`, '', 'width=250, height=250');
//         moveWindow();
//     }

//     document.addEventListener('load', moveWindow);
// }


