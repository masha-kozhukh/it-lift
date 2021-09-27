var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });
  var swiper = new Swiper(".partners-swiper", {
    slidesPerView: 5,
    spaceBetween: 90,
    centeredSlides: true,
    freeMode: true,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
   
  });

const navSider = ()=>{
    const burger = document.querySelector('.burger__menu');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.nav__list');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('header-active');
        navLinks.forEach((link, index) =>{
            if (link.style.animation){
                link.style.animation = ''
            }else{
                if (window.innerWidth < 950 ){
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    link.addEventListener('click' , ()=>{
                      nav.classList.remove('header-active');
                      burger.classList.remove('toggle');
                    });
                }
            }
           
       
        });
        burger.classList.toggle('toggle');
    
    });
    
}
navSider();

    //scroll to top
        const offset = 100; 
        const scrollUP = document.querySelector(".scroll-up");
        const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
        const pathLength = scrollUpSvgPath.getTotalLength();

        scrollUpSvgPath.style.strokeDasharray=`${pathLength} ${pathLength}`;
        scrollUpSvgPath.style.transition='stroke-dashoffset 20ms';

        const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

        //updateDashoffset
        const updateDashoffset =()=>{
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const dashoffset = pathLength -( getTop() * pathLength / height);

            scrollUpSvgPath.style.strokeDashoffset = dashoffset;
        };

        // onScroll

        window.addEventListener("scroll" , () => {
            updateDashoffset();
            if(getTop() > offset){
                scrollUP.classList.add('scroll-up--active')
            }else{
                scrollUP.classList.remove('scroll-up--active')
            }
        });

        //click
        scrollUP.addEventListener("click" , ()=>{
            window.scrollTo({
                top:0,
                behavior:'smooth'
            })
        });

        //input phone

        let selector = document.querySelectorAll('input[type="tel"]');

        let im = new Inputmask("+38 (099)999-99-99");


           //validate form
          im.mask(selector);

        let selector2 = document.querySelector('input[type="tel"]');

        // selector2.addEventListener('input', function(){
        //   console.log(selector2.value)


        //   const re = /^\d*(\.\d+)?$/

        //   console.log(selector2.value.match(/[0-9]/g).length)


        //   console.log(selector2.value.replace(/[0-9]/g, "0"));
          
        // });

        
       

        let validateForms = function(selector, rules, successModal, yaGoal) {
          new window.JustValidate(selector, {
            rules: rules,
            // submitHandler: function(form) {
            //   let formData = new FormData(form);

            //   let xhr = new XMLHttpRequest();

            //   xhr.onreadystatechange = function() {
            //     if (xhr.readyState === 4) {
            //       if (xhr.status === 200) {
            //         console.log('Отправлено');
            //       }
            //     }
            //   }

            //   xhr.open('POST', 'mail.php', true);
            //   xhr.send(formData);

            //   form.reset();

              
            // }
          });
        }

        validateForms('.form', { email: {required: true, email: true}, tel: {required: true} }, '.thanks-popup', 'send goal');


