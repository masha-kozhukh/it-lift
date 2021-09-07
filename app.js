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
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
           
       
        });
        burger.classList.toggle('toggle');
    
    });
    
}
navSider();

//form
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
        
        if (error === 0){
            form.classList.add('_sending');
            // let response = await fetch ('sendmail.php',{
            //     method:'POSR',
            // });
            // if(response.ok){
            //     let result = await response.json();
            //     alert(result.message);
            //     formPreview.innerHTML = '';
            //     form.reset();
            // form.classList.remove('_sending');
            // }else{
            //     alert('error');
            //form.classList.remove('_sending');
            // }



        }else{
            alert ('you missed something');
        }
      

    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index<formReq.length; index++){
            const input = formReq[index];

            formRemoveError(input);
            
            if(input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }
            if(input.classList.contains('_numb')){
                if (numbTest(input)){
                    formAddError(input);
                    error++;
                }
            }else{
                if (input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
           
            
            

        }
        return error;

    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest (input) {
        return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(input.value);
       
    }
    function numbTest (input) {
        return !/^[\+380\.]+\d[\d\(\)\ -]{10,14}\d$/.test(input.value);
       
    }

   
    


});