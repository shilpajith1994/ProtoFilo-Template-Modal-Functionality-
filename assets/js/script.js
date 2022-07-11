var images = document.querySelectorAll('.gallery>li>a>img'), 
 modal = document.querySelector('.modal-content'),
 container = document.querySelector('.modal'),
 closeBtn = document.querySelector('.closeBtn'),
 modalImg = document.querySelector('.modalImage'),
 hamburger = document.querySelector('.hamburger'),
 closeIcon = document.querySelector('.menuClose'),
 menuIcon = document.querySelector('.bar'),
 nav = document.querySelector('nav'),
 imgSrc;
 menuIcon.classList.remove('bar-active')

images.forEach(function(img) {
    img.addEventListener("click", function(e) {
        container.classList.add('active');
        imgSrc = e.target.src;
        modalImg.setAttribute("src", imgSrc);
    });
});

closeBtn.addEventListener('click',function() {
    container.classList.remove('active');
})

container.addEventListener('click',function() {
    container.classList.remove('active');
})

hamburger.addEventListener('click',function() {
     nav.classList.toggle('active')
     menuIcon.classList.toggle('bar-active')
})





































































