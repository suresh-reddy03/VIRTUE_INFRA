let navbar = document.querySelector('.header .navbar');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}


window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


var index = 0;
var slides = document.querySelectorAll(".slides");
function changeSlide(){
  if(index<0){
    index = slides.length-1;
  }

  if(index>slides.length-1){
    index = 0;
  }

  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";

  }

  slides[index].style.display= "block";


  index++;

  setTimeout(changeSlide,2000);

}

changeSlide();

$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});


/*amenities*/

document.addEventListener("DOMContentLoaded", function () {
    const mySwiper2_wrapper = document.querySelector(".mySwiper2 .swiper-wrapper"),
    mySwiper_container = document.querySelector(".mySwiper"),
          clone = mySwiper2_wrapper.cloneNode(true);
    mySwiper_container.appendChild(clone);

    const swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 8,
    slidesPerView: mySwiper2_wrapper.childNodes.length,
    freeMode: true,
    watchSlidesProgress: true
    });
    const swiper2 = new Swiper(".mySwiper2", {
    autoplay: {
        delay: 1000,
        disableOnInteraction: false
    },
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    loopedSlides: mySwiper2_wrapper.childNodes.length,
    spaceBetween: 13,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    thumbs: {
        swiper: swiper
    }
    });
},false);



var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});


  $(document).ready(function() {
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });


  var gallery = document.querySelector('.gallery');
  var galleryItems = document.querySelectorAll('.gallery-item');
  var numOfItems = gallery.children.length;
  var itemWidth = 23; // percent: as set in css

  var featured = document.querySelector('.featured-item');

  var leftBtn = document.querySelector('.move-btn.left');
  var rightBtn = document.querySelector('.move-btn.right');
  var leftInterval;
  var rightInterval;

  var scrollRate = 0.2;
  var left;

  function selectItem(e) {
  	if (e.target.classList.contains('active')) return;

  	featured.style.backgroundImage = e.target.style.backgroundImage;

  	for (var i = 0; i < galleryItems.length; i++) {
  		if (galleryItems[i].classList.contains('active'))
  			galleryItems[i].classList.remove('active');
  	}

  	e.target.classList.add('active');
  }

  function galleryWrapLeft() {
  	var first = gallery.children[0];
  	gallery.removeChild(first);
  	gallery.style.left = -itemWidth + '%';
  	gallery.appendChild(first);
  	gallery.style.left = '0%';
  }

  function galleryWrapRight() {
  	var last = gallery.children[gallery.children.length - 1];
  	gallery.removeChild(last);
  	gallery.insertBefore(last, gallery.children[0]);
  	gallery.style.left = '-23%';
  }

  function moveLeft() {
  	left = left || 0;

  	leftInterval = setInterval(function() {
  		gallery.style.left = left + '%';

  		if (left > -itemWidth) {
  			left -= scrollRate;
  		} else {
  			left = 0;
  			galleryWrapLeft();
  		}
  	}, 1);
  }

  function moveRight() {
  	//Make sure there is element to the leftd
  	if (left > -itemWidth && left < 0) {
  		left = left  - itemWidth;

  		var last = gallery.children[gallery.children.length - 1];
  		gallery.removeChild(last);
  		gallery.style.left = left + '%';
  		gallery.insertBefore(last, gallery.children[0]);
  	}

  	left = left || 0;

  	leftInterval = setInterval(function() {
  		gallery.style.left = left + '%';

  		if (left < 0) {
  			left += scrollRate;
  		} else {
  			left = -itemWidth;
  			galleryWrapRight();
  		}
  	}, 1);
  }

  function stopMovement() {
  	clearInterval(leftInterval);
  	clearInterval(rightInterval);
  }

  leftBtn.addEventListener('mouseenter', moveLeft);
  leftBtn.addEventListener('mouseleave', stopMovement);
  rightBtn.addEventListener('mouseenter', moveRight);
  rightBtn.addEventListener('mouseleave', stopMovement);


  //Start this baby up
  (function init() {
  	var images = [
  		'images/9.jpeg',
  		'images/8.jpeg',
  		'images/7.jpeg',
  		'images/6.jpeg',
  		'images/5.jpeg',
  		'images/2.jpeg',
  		'images/1.jpeg'
  	];

  	//Set Initial Featured Image
  	featured.style.backgroundImage = 'url(' + images[0] + ')';

  	//Set Images for Gallery and Add Event Listeners
  	for (var i = 0; i < galleryItems.length; i++) {
  		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
  		galleryItems[i].addEventListener('click', selectItem);
  	}
  })();








var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});
