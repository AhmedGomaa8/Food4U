//scroll to top button

let scrollBtn = document.querySelector('.up');

let boxs = document.querySelectorAll('.fade-in');

let sliders = document.querySelectorAll('.slide-in');

let sliderLast = document.querySelectorAll('.slide-in-last');

window.onscroll = function () {
    if (this.scrollY >= 1000) {
        scrollBtn.classList.add('show');
    }else {
        scrollBtn.classList.remove('show');
    }
}

scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

//scrollprog

let scroller = document.querySelector('.scroller');

window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;

    scroller.style.width = `${(scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100}%`
})
//navbar
let header = document.querySelector('.header');


window.addEventListener('scroll', () => {
    if (this.scrollY >= 100) {
        header.classList.add('show');
    }else {
        header.classList.remove('show');
    }

})

//observe

let options = {
    threshold: 0,
    rootMargin: '0px 0px -200px 0px'
}


let apperOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }else {
            entry.target.classList.add('apper')
            apperOnScroll.unobserve(entry.target)
        }
    })
},options);




boxs.forEach((box) => {
    apperOnScroll.observe(box)
});

sliders.forEach((slide) => {
    apperOnScroll.observe(slide)
});
sliderLast.forEach((slide) => {
    apperOnScroll.observe(slide)
});




//Testimonial Slider 

let boxsSlider = Array.from(document.querySelectorAll('.content .box'));

let slideCount = boxsSlider.length;

let currentIndex = 1;

let prevBtn = document.getElementById('prev');

let nextBtn = document.getElementById('next');

let ulDiv = document.getElementById('ul-div');

prevBtn.onclick = preSlid;
nextBtn.onclick = nextSlid;


let ulElement = document.createElement('ul');

ulElement.setAttribute('id','ul-element');


for (let i = 1; i <= slideCount; i++) {
    let liItem = document.createElement('li');
    liItem.setAttribute('data-id', i);
    ulElement.appendChild(liItem)
}

ulDiv.appendChild(ulElement)


let createdUlElement = document.getElementById('ul-element');

let liArray = Array.from(document.querySelectorAll('#ul-element li'))

for (let i = 0; i < liArray.length; i++) {
    liArray[i].onclick = function () {
        currentIndex = parseInt(this.getAttribute('data-id'))
        theChecker()
        console.log(parseInt(this.getAttribute('data-id')))
    }
    
}

theChecker()
function preSlid() {
    currentIndex--
    theChecker()
}

function nextSlid() {
    currentIndex++
    theChecker()
}

function theChecker() {

    removeActiveClass()

    boxsSlider[currentIndex - 1].classList.add('active');

    createdUlElement.children[currentIndex - 1].classList.add('active');

    if (currentIndex === 1) {
        prevBtn.classList.add('disabled')
    }else {
        prevBtn.classList.remove('disabled')
    }

    if (currentIndex === slideCount) {
        nextBtn.classList.add('disabled')
    }else {
        nextBtn.classList.remove('disabled')
    }
}

function removeActiveClass() {
    boxsSlider.forEach(function(box) {
        box.classList.remove('active')
    })
    liArray.forEach(function(li) {
        li.classList.remove('active')
    })
    
}

//mobile navbar 

let menu = document.querySelector('.menu');

let xMark = document.querySelector('.x-mark');

let ulLinks = document.getElementById('slide-ul');



menu.onclick = function () {
    ulLinks.classList.add('show')
}
xMark.onclick = function () {
    ulLinks.classList.remove('show')
}