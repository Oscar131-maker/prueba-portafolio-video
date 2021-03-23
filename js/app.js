const thumbnails = document.querySelectorAll('.miniatura');
const menu = document.querySelector('#header');
const linksMenu = document.querySelectorAll('.list-container li a');
const btnmenu = document.querySelector('.btn-menu');
const closemenu = document.querySelector('.btn-close-menu');
const menuresponsive = document.querySelector('.menu');
let offmenu = true;

// Event listener
EventListeners();
function EventListeners(){
   
    // Overlay reproductor
    OverlayPlay();

    // Menu responsive
    Menuresponsive();

    // Close menu
    Closemenu();

}

// Functionas
function OverlayPlay(){

    thumbnails.forEach(thumbnail => {

        const parentThumbnail = thumbnail.parentElement;
        
        // Hover
        thumbnail.addEventListener('mouseenter', () => {
           const playOverlay = document.createElement('div');
           playOverlay.classList.add('video-reproductor');
           playOverlay.innerHTML = `<i class="fas fa-play"></i>`;
           parentThumbnail.appendChild(playOverlay);
           
           // Click modal
           playOverlay.addEventListener('click', () => {

            const main = document.querySelector('main');
            
            const modalcontainer = document.createElement('div');
            modalcontainer.classList.add('modal-container');
            modalcontainer.innerHTML = `
                <span class="close-modal"><img src="assets/img/x-white.svg"></span>
                <h3 class="h3-section">${thumbnail.getAttribute('data-title')}</h3>
                <hr class="hr-section">
                <div class="video-container">
                <iframe src="${thumbnail.getAttribute('data-url')}" 
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;

            main.appendChild(modalcontainer);

            // Close modal
            Closemodal();

           });

        });

    });

}

// Close modal
function Closemodal(){

   const closemodal = document.querySelector('.close-modal');

   closemodal.addEventListener('click', () => {
       const modal = document.querySelector('.modal-container');
       modal.remove();
   });

}

// Menu scroll
let menuscroll = window.pageYOffset;

window.onscroll = () => {
   
  let windowScroll = window.pageYOffset;
  
  linksMenu.forEach(element => {
    if(windowScroll >= 100){

       menu.style.backgroundColor = "#ffffff";
       element.style.color = "#141414";
       document.querySelector('.logo-menu .logo > h1').style.color = "#141414";
     
    }else{
       menu.style.backgroundColor = "transparent";
       element.style.color = "#ffffff";
       document.querySelector('.logo-menu .logo > h1').style.color = "#ffffff";
    }

  });

}

// Menu responsive
function Menuresponsive(){

  btnmenu.addEventListener('click', () => {
    menuresponsive.style.right = "0";
    menuresponsive.style.transition = "500ms";
  });
}

// Close menu
function Closemenu(){
    closemenu.addEventListener('click', () => {
      menuresponsive.style.right = "-130%";
      menuresponsive.style.transition = "500ms";
    });
}

// Active menu
linksMenu.forEach(link => {

  // Active link
  const active = link.classList.contains('active');
   
  link.addEventListener('click', (event) => {
    linksMenu.forEach(element => {
       element.classList.remove('active');
    });

      link.classList.add('active');      
  });

});


