import '../scss/style.scss'


      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
          breakpoints: {
    768: {
      enabled: false,
    }
  }
        
      });

const showBtn = document.getElementById('showButton');
const hideBtn = document.getElementById('hideButton');
const bottomItems = document.querySelectorAll('.swiper');

function hideBottomGrid(show) {
  bottomItems.forEach(item => {
    item.style.height = show ? 'auto' : '200px'; 
    item.style.overflow = show ? 'visible' : 'hidden';
  });


  showBtn.style.display = show ? 'none' : 'flex';
  hideBtn.style.display = show ? 'flex' : 'none';

  // if (typeof swiper !== 'undefined') {
  //   swiper.update(); 
  // }
}

showBtn.addEventListener('click', () => hideBottomGrid(true));
hideBtn.addEventListener('click', () => hideBottomGrid(false));



const showSecondBtn = document.getElementById('showSecondButton');
const hideSecondBtn = document.getElementById('hideSecondButton');
const secondBottomItems = document.querySelectorAll('.bottom-hide');

function hideSecondBottomGrid(show) {
secondBottomItems.forEach(item => {
  item.style.height = show ? 'auto' : '200px';
  item.style.overflow = show ? 'visible' : 'hidden';
});

 showSecondBtn.style.display = show ? 'none' : 'flex';
  hideSecondBtn.style.display = show ? 'flex' : 'none';

}


showSecondBtn.addEventListener('click', () => hideSecondBottomGrid(true));
hideSecondBtn.addEventListener('click', () => hideSecondBottomGrid(false));