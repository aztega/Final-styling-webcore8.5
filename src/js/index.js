import '../scss/style.scss'


      const swiper = new Swiper(".mySwiper", {
        // slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
          breakpoints: {
    530: {
      enabled: false,
    }
  }
        
      });

const showBtn = document.getElementById('showButton');
const hideBtn = document.getElementById('hideButton');
const bottomItems = document.querySelectorAll('.brandRepairs .swiper-wrapper');

function hideBottomGrid(show) {
  bottomItems.forEach(item => {
    item.style.height = show ? 'auto' : '165px'; 
    item.style.overflow = show ? 'visible' : 'hidden';
  });


  showBtn.style.display = show ? 'none' : 'flex';
  hideBtn.style.display = show ? 'flex' : 'none';
}



showBtn.addEventListener('click', () => hideBottomGrid(true));
hideBtn.addEventListener('click', () => hideBottomGrid(false));




const showSecondBtn = document.getElementById('showSecondButton');
const hideSecondBtn = document.getElementById('hideSecondButton');
const hideSecondBottom = document.querySelectorAll('.equipment-repairs .swiper-wrapper');

function hideSecondBottomGrid(show) {
  hideSecondBottom.forEach(item => {
    item.style.height = show ? 'auto' : '180px'; 
    item.style.overflow = show ? 'visible' : 'hidden';
  });

  showSecondBtn.style.display = show ? 'none' : 'flex';
  hideSecondBtn.style.display = show ? 'flex' : 'none';
}

showSecondBtn.addEventListener('click', () => hideSecondBottomGrid(true));
hideSecondBtn.addEventListener('click', () => hideSecondBottomGrid(false));

swiper.update()