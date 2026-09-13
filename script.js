function openLightbox(type, source) {
    const modal = document.getElementById('lightbox');
    const modalImg = document.getElementById('lightbox-img');
    const modalVideo = document.getElementById('lightbox-video');
    
    modal.style.display = "flex";
    
    if (type === 'image') {
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
        modalImg.src = source;
    } else if (type === 'video') {
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = source;
        modalVideo.play();
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox');
    const modalVideo = document.getElementById('lightbox-video');
    
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
}

function sendToWhatsApp(event) {
    event.preventDefault();
    
    let name = document.getElementById('wa-name').value;
    let email = document.getElementById('wa-email').value;
    let message = document.getElementById('wa-message').value;
    
    // നിങ്ങളുടെ വാട്സാപ്പ് നമ്പർ ഇവിടെ നൽകുക (രാജ്യത്തിന്റെ കോഡ് സഹിതം, ഉദാഹരണത്തിന്: 919876543210)
    let phoneNumber = "919544053121"; 
    
    let whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=` + 
    encodeURIComponent(`Hello, I want to inquire about your services.\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`);
        
window.open(whatsappUrl, '_blank');
}

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ഏതെങ്കിലും ലിങ്കിൽ ക്ലിക്ക് ചെയ്താൽ മെനു ഓട്ടോമാറ്റിക് ആയി ക്ലോസ് ആകാൻ
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
