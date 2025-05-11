
'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// selcting
// console.log(document.body)

const header = document.querySelector('.header');
// header.style.color = 'red'

const allbtn =document.getElementsByTagName('button')
// console.log(allbtn)

const allsection =document.getElementsByClassName('section')
// console.log(allsection)

const allsecion =document.querySelectorAll('.section')
// console.log(allsecion)


//creating and inserting element
const message =document.createElement('div')
// message.classList.add('cookie-message')
// message.innerHTML='we use cookie to improver the user experience. <button class="btn btn--close--cookie">OK</button>';

// header.append(message)
// header.prepend(message)

// header.before(message)
// header.after(message)

// deleting
// document.querySelector('.btn--close--cookie').addEventListener('click' , function(){
//    message.remove() //new way
//   // message.parentElement.removeChild(message) //old style
// })

// message.style.background = '#37383d'
// message.style.width = '100%'

// console.log(message.style.color)
// console.log(message.style.backgroundColor)

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 25  +'px' 

// document.documentElement.style.setProperty('--color-primary' , 'red')

// attributes
const logo =document.querySelector('.nav__logo')
// console.log(logo.alt)
// console.log(logo.src)
// console.log(logo.className)


// console.log(logo.dataset.versionNumber)

//smooth Animation

const btnscrooll = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
const section2 = document.querySelector('#section--2')
const section3 = document.querySelector('#section--3')
const footer = document.querySelector('footer')

btnscrooll.addEventListener('click' ,function(e){
 const s1cords=section1.getBoundingClientRect()
//  console.log(s1cords) 

 section1.scrollIntoView({behavior:'smooth'})
})

// const navlinks = document.querySelectorAll('.nav__link')
// navlinks.addEventListener('click' , function(){
//   if(){
    
//   }
// })
document.querySelector('.operationsl').addEventListener('click' , function(){
  document.querySelector('#section--2').scrollIntoView({behavior:'smooth'})
})


document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click' , function(e){
    e.preventDefault()
    const id =e.target.getAttribute('href');
    document.querySelector(`${id}`).scrollIntoView({behavior:'smooth'})
  })
})

document.querySelector('.nav__links').addEventListener('click' , function(e){
  if(e.target.classList.contains('nav__link')){
    e.preventDefault()
    const id =e.target.getAttribute('href');
    document.querySelector(`${id}`).scrollIntoView({behavior:'smooth'})
  }
})

//dom travrsing

const h1 = document.querySelector('h1')

// console.log(h1.children)
// console.log(h1.parentElement.childNodes)
// console.log(h1.parentElement.children)

// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('h1').style.backgroundColor='orangered'

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)
// console.log(h1.previousSibling)
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(e){
//   console.log(e)
//   if(e !== h1){
//     e.style.transform ='scale(.5)'
//   }
// })

const tabCon = document.querySelector('.operations__tab-container')
const opTab =document.querySelectorAll('.operations__tab')
const opTabCon = document.querySelectorAll('.operations__content')

tabCon.addEventListener('click' , function(e){
 
  const target =e.target.closest('.operations__tab');
  if(!target){
    return;
  }
  opTab.forEach(function(e){
  e.classList.remove('operations__tab--active')
  })
  opTabCon.forEach(function(e){
    e.classList.remove('operations__content--active')
  })
  target.classList.add('operations__tab--active')
  const vno =target.getAttribute('data-tab')

  // const targetContent = parent.querySelector(`.operations__content--${vno}`);
  // targetContent?.classList.add('operations__content--active'); 
e.target.closest('.operations')?.querySelector(`.operations__content--${vno}`)?.classList.add('operations__content--active')
  // document.querySelector(`.operations__content--${vno}`).classList.add('operations__content--active')
})

const nav = document.querySelector('.nav')
nav.addEventListener('mouseover' , function(e){
  if(e.target.classList.contains('nav__link')){
    const allLink = e.target;
    const navl = nav.querySelectorAll('.nav__link')
    const logo= nav.querySelector('#logo')
    navl.forEach(function(e){
      if(e!==allLink){
        e.style.opacity=0.5
      }
    }) 
    logo.style.opacity=0.5
  }
})
nav.addEventListener('mouseout' , function(e){
  if(e.target.classList.contains('nav__link')){
    const allLink = e.target;
    const navl = nav.querySelectorAll('.nav__link')
    const logo= nav.querySelector('#logo')
    navl.forEach(function(e){
      if(e!==allLink){
        e.style.opacity=1
      }
    }) 
    logo.style.opacity=1
  }
})

// const viweport = section1.getBoundingClientRect()
// window.addEventListener('scroll', function(){
//   if(this.window.scrollY > viweport.top){
//   nav.classList.add('sticky')
// }else{
//   nav.classList.remove('sticky')
// }
// })



const navHIG = nav.getClientRects().height
const obsCall = function(entries){
  const [entry] =entries
  //  console.log(entries)
  //  console.log(entry)
  if(!entry.isIntersecting){ nav.classList.add('sticky')
}else{
  nav.classList.remove('sticky')
}
}


const observer = new IntersectionObserver(obsCall , { root:null, threshold :0 , rootMargin: '-90px'},)

observer.observe(header)

// observer.observe(section1)


//revel
const allsections = document.querySelectorAll('section')
const revelobscall = function(entries , revelobs){
 const [entry] = entries
//  console.log(entries)
//   console.log(entry)
  if(!entry.isIntersecting)return;
  
 entry.target.classList.remove('section--hidden')
 revelobs.unobserve(entry.target)

}
const revelobs = new IntersectionObserver( revelobscall , {root:null , threshold: 0.15})

allsections.forEach(function(e){
  revelobs.observe(e)
  e.classList.add('section--hidden')
})

// lazy img

const allIMg = document.querySelectorAll('.features__img')
const lazyImgcall = function(entries , observer){
  const [entry] = entries
  // console.log(entry)
  // console.log(entry.target.src)
  if(!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src
  // console.log(entry.target.src)
  entry.target.addEventListener('load' , function(){
     entry.target.classList.remove('lazy-img')

  })
  // observer.unobserve(entry)
}
const lazyImg  =new IntersectionObserver(  lazyImgcall , {root:null , threshold: .10 })

allIMg.forEach(function(e){
  lazyImg.observe(e)
})


//slider img

const leftBtn = document.querySelector('.slider__btn--left')
const rigBtn =document.querySelector('.slider__btn--right') 
const slides= document.querySelectorAll('.slide')
const slider = document.querySelector('.slider')
const dots = document.querySelector('.dots')
const btndots =document.querySelectorAll('.dots__dot')
let noslide;
// slider.style.transform = 'scale(0.15)'
// slider.style.overflow ='visible'


let maxSlide = slides.length
let curSlider = 0

slides.forEach(function( s, i){
 // console.log(s , i)
 s.style.transform =`translateX(${100 *i}%)`
})

rigBtn.addEventListener('click' , function(){
  if(curSlider+1 === maxSlide){
    curSlider= 0
  }else{  curSlider++;
  }
  slides.forEach(function( s, i){
   // console.log(s , i)
   s.style.transform =`translateX(${100 *(i -curSlider)}%)`
  })  

  btndots.forEach(function(e){ 
    // console.log(e)
    e.classList.remove('dots__dot--active')
  })
  document.querySelector(`.dots__dot[data-slide='${curSlider}']`).classList.add('dots__dot--active')
})

leftBtn.addEventListener('click' , function(e){
  
  if(curSlider === 0){
    curSlider= maxSlide-1
  }else{
 curSlider--;}
  slides.forEach(function( s, i){
   // console.log(s , i)
   s.style.transform =`translateX(${100 *(i-curSlider)}%)`
  })
  btndots.forEach(function(e){ 
    // console.log(e)
    e.classList.remove('dots__dot--active')
  })
  document.querySelector(`.dots__dot[data-slide='${curSlider}']`).classList.add('dots__dot--active')

})

document.addEventListener('keydown' , function(e){
  if(e.key === 'ArrowRight'){
    if(curSlider+1 === maxSlide){
      curSlider= 0
    }else{  curSlider++;
    }
    slides.forEach(function( s, i){
     // console.log(s , i)
     s.style.transform =`translateX(${100 *(i -curSlider)}%)`
    })
    btndots.forEach(function(e){ 
      // console.log(e)
      e.classList.remove('dots__dot--active')
    })
    document.querySelector(`.dots__dot[data-slide='${curSlider}']`).classList.add('dots__dot--active')
  
  }
})

document.addEventListener('keydown' , function(e){
  if(e.key === 'ArrowLeft'){
    if(curSlider === 0){
      curSlider= maxSlide-1
    }else{
   curSlider--;}
    slides.forEach(function( s, i){
     // console.log(s , i)
     s.style.transform =`translateX(${100 *(i-curSlider)}%)`
    })
    btndots.forEach(function(e){ 
      // console.log(e)
      e.classList.remove('dots__dot--active')
    })
    document.querySelector(`.dots__dot[data-slide='${curSlider}']`).classList.add('dots__dot--active')
    }
})


btndots.forEach(function(e){
  
 
  e.addEventListener('click' , function(en){
    // console.log(en)
    en.target.classList.add('dots__dot--active')
    // console.log(en.target)
    // console.log('hi')
    noslide = en.target.getAttribute('data-slide')
   curSlider=noslide

    slides.forEach(function( s, i){
      // console.log(s , i)
     s.style.transform =`translateX(${100 *(i-curSlider)}%)`
    })
    btndots.forEach(function(e){ 
      // console.log(e)
      e.classList.remove('dots__dot--active')
    })
    document.querySelector(`.dots__dot[data-slide='${curSlider}']`).classList.add('dots__dot--active')
  
  })
  // e.classList.remove('dots__dot--active')
})


//life cyle dom

document.addEventListener('DOMContentLoaded' , function(e){
  console.log('only html and javascript is loaded' )
})

window.addEventListener('load' , function(){
  console.log('full website is loded')
})
// window.addEventListener('beforeunload' , function(e){
//  e.preventDefault()
//  e.returnValue=''
// })