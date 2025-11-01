// reveal on scroll
const sections = document.querySelectorAll('section, .tp-card');
const reveal = ()=>{
    const trigger = window.innerHeight * 0.8;
    sections.forEach(s=>{
        const top = s.getBoundingClientRect().top;
        if(top < trigger) s.classList.add('show'); else s.classList.remove('show');
    });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// open projet placeholder
document.getElementById('open-projet')?.addEventListener('click', function(e){
    e.preventDefault();
    alert('Lien de projet: remplacez ce comportement par l\'ouverture de votre projet (Drive, page, etc.)');
});
