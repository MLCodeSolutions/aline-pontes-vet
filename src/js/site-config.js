/* ==========================================================================
   site-config.js — dados do site da Dra. Aline Pontes
   Alterou aqui? Rode o build para refletir no dist/.
   ========================================================================== */

window.SITE = {
  brand: 'Aline Pontes',
  whatsapp: '5585987450184',
  phoneDisplay: '(85) 98745-0184',
  email: '',
  instagram: 'https://www.instagram.com/alinempvet',
  facebook: '',
  coupon: '',
  crmv: 'CRMV-CE 3713',
  domain: ''
};

/* Modo leve: economia de dados ou 2G (o mobile recebe as animações normalmente). */
(function () {
  try {
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
    var lite = conn.saveData === true ||
      /(^|-)2g$/.test(conn.effectiveType || '') ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-data: reduce)').matches);

    if (lite) document.documentElement.classList.add('is-lite');
  } catch (error) {
    /* sem suporte: segue no modo normal */
  }
}());
