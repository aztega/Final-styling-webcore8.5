import '../scss/style.scss'


      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
          breakpoints: {
    500: {
      enabled: false,
    }
  }
        
      });

const showBtn = document.getElementById('showButton');
const hideBtn = document.getElementById('hideButton');
const bottomItems = document.querySelectorAll('.brandRepairs .swiper');

function hideBottomGrid(show) {
  bottomItems.forEach(item => {
    item.style.height = show ? 'auto' : '190px'; 
    item.style.overflow = show ? 'visible' : 'hidden';
  });


  showBtn.style.display = show ? 'none' : 'flex';
  hideBtn.style.display = show ? 'flex' : 'none';
}



showBtn.addEventListener('click', () => hideBottomGrid(true));
hideBtn.addEventListener('click', () => hideBottomGrid(false));




const showSecondBtn = document.getElementById('showSecondButton');
const hideSecondBtn = document.getElementById('hideSecondButton');
const hideSecondBottom = document.querySelectorAll('.equipment-repairs .swiper');

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


const sidebar = document.querySelector('.sidebar');
const backdrop = document.getElementById('sidebarBackdrop');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const hideGroup = document.querySelector('.second-header-group')

function openSidebar() {
  sidebar.classList.add('is-active');
  backdrop.classList.add('is-active'); 
  document.body.style.overflow = 'hidden'; 
  hideGroup.style.display = 'none';
}

function closeSidebar() {
  sidebar.classList.remove('is-active');
  backdrop.classList.remove('is-active');
  document.body.style.overflow = 'auto';
  hideGroup.style.display = 'flex';
}

menuIcon.addEventListener('click', openSidebar);
closeIcon.addEventListener('click', closeSidebar);

backdrop.addEventListener('click', closeSidebar);
