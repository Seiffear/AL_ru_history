  document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("floating-button");
 
  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
 
  // Плавная прокрутка при клике на кнопку
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


   let translations = {};

    fetch('translations.json')
      .then(response => response.json())
      .then(data => {
        translations = data;
        const saved = localStorage.getItem('selectedVariant') || 'EN';
        loadTranslation(saved);
      });

    function loadTranslation(variant) {
      const data = translations[variant];
      if (!data) return;

      // Найти все элементы с data-key и заменить текст
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) {
          el.textContent = data[key];
        }
      });

      localStorage.setItem('selectedVariant', variant);
    }