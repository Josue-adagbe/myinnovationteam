  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");
  
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
  
  // Fermer le menu après clic sur un lien (mobile)
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
  
const bouton = document.getElementById('bouton');

if (bouton) {
  bouton.addEventListener('click', () => {
    alert('Ne déposez aucun fichier sur le site pour le moment. Veuillez envoyer toutes vos réponses sur WhatsApp.');
  });
} else {
  console.error('Élément avec ID "contact" introuvable');
}
