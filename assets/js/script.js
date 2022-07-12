var images = document.querySelectorAll('.gallery>li>a>img'), 
 modal = document.querySelector('.modal-content'),
 container = document.querySelector('.modal'),
 closeBtn = document.querySelector('.closeBtn'),
 modalImg = document.querySelector('.modalImage'),
 hamburger = document.querySelector('.hamburger'),
 closeIcon = document.querySelector('.menuClose'),
 menuIcon = document.querySelector('.bar'),
 nav = document.querySelector('nav'),
 title = document.querySelector('.title'),
 para = document.querySelector('.para'),
 imgSrc;
 menuIcon.classList.remove('bar-active')

images.forEach(function(img) {
    img.addEventListener("click", function(e) {  
        var element = img.getAttribute('heading');
        var desc = img.getAttribute('desc');
        container.classList.add('active');
        imgSrc = e.target.src;
        modalImg.setAttribute("src", imgSrc);
        title.innerHTML = element;
        para.innerHTML = desc;
    });
});

closeBtn.addEventListener('click',function() {
    container.classList.remove('active');
})

container.addEventListener('click',function(e) {
    container.classList.remove('active');
    e.stopPropagation();
})

modal.addEventListener('click',function(e) {
    e.stopPropagation();
})

hamburger.addEventListener('click',function() {
     nav.classList.toggle('active')
     menuIcon.classList.toggle('bar-active')
})





































































