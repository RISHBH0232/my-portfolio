let moreBtn = document.querySelector(".more-btn");
let btnsWrapper = document.querySelector(".btns-wrapper");
let portfolioCard = document.querySelectorAll(".service-images-wrpappers");
let textWrapperBtn = document.querySelectorAll(".si-text-wrpper");
let anchorTag = document.querySelectorAll("a");
let cursorIcon = document.querySelector(".cursor i");
let mainBody = document.querySelector(".whole-body");
let themeChangerBtn = document.querySelector(".img-btn-wrapper");

anchorTag.forEach(a => {
        a.addEventListener("mouseenter", () => {
            cursorIcon.classList.remove("fa-search", "fa-smile-o");
            cursorIcon.classList.add("fa-hand-pointer-o");
        });
        
        a.addEventListener("mouseleave", () => {
                cursorIcon.classList.remove("fa-hand-pointer-o");
            cursorIcon.classList.add("fa-search");
        });

})


moreBtn.addEventListener("click", () => {
        btnsWrapper.classList.toggle("show");
        moreBtn.classList.toggle("red");
        moreBtn.classList.toggle("close");
})

window.addEventListener("load", () => {
        const video = document.querySelectorAll("video");
        // console.log("hh")
        setTimeout(() => {
        video.forEach(vid => {
                        vid.play();
                })
        }, 5000)
        // video.
})

portfolioCard.forEach(card => {
        let randomWidth = Math.floor(Math.random() * 240) + 200;
        let randomHeight = Math.floor(Math.random() * 230) + 190;

        card.style.setProperty('--random-w', `${randomWidth}px`);
        card.style.setProperty('--random-h', `${randomHeight}px`);
})

textWrapperBtn.forEach(btn => {
        btn.addEventListener("click", () => {
                let correntContainer = btn.querySelector(".detailed-caption");
                btn.classList.toggle("clicked-btn");
                correntContainer.classList.toggle('dc-open');
        })
})

const servicesSection = document.querySelector('#service-section');
const serviceItems = document.querySelectorAll('.detailed-caption');

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      serviceItems.forEach(item => {
        item.classList.contains('dc-open');
      });
    } else {
      serviceItems.forEach(item => {
        item.classList.remove('dc-open');
      });
    }
  });
};
const observerOptions = {
  root: null,
  threshold: 0.1 
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(servicesSection);

/**************************
        theme Changer 
**************************/
themeChangerBtn.addEventListener("click", () => {
        mainBody.classList.toggle("image-theme");
        console.log("hhh")
})