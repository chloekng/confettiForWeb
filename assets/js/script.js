$(document).ready(function() {

  // make bg masonry
  var colcade = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item'
  });


  // add images to the pins

  let pins = document.getElementsByClassName("grid-item");

  let addImages = function(pins) {
    for (let i = 0; i < pins.length; i++) {
      let pin = pins[i];
      pin.style.backgroundImage = "url('assets/img/pin" + [i] + ".jpg')"; 
      pin.style.backgroundSize = "cover";
      pin.style.backgroundPosition = "center center";
    }

    
  }

  addImages(pins);

  // bottom right
  let bottomRight = document.createElement("div");
  bottomRight.className = "bottom-right";

  let plus = document.createElement("img");
  plus.className = "bottom-right-icon plus";
  plus.src = "assets/img/plus.svg";

  let questionMark = document.createElement("img");
  questionMark.className = "bottom-right-icon question-mark";
  questionMark.src = "assets/img/question-mark.svg";

  bottomRight.append(plus);
  bottomRight.append(questionMark);
  $(".app").append(bottomRight);



  // nav bar

  $(".navIcon").click(function() {

    window.location.href = "index.html";


  });

  // confetti animate
  let confetti = document.createElement("div");
  confetti.className = "confetti";
  $(".homefeedPage").append(confetti);

  // lottie starburst

  let confettiAnimate = lottie.loadAnimation({
    container: confetti, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets1.lottiefiles.com/private_files/lf30_mcnw8vrl.json' // the path to the animation json
  });



});