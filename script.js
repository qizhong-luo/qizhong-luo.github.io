const languageButton = document.querySelector('.language');
const translatedElements = document.querySelectorAll('[data-en][data-zh]');

function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  translatedElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageButton.textContent = language === 'en' ? '中文' : 'EN';
  languageButton.setAttribute('aria-label', language === 'en' ? '切换为中文' : 'Switch to English');
  languageButton.setAttribute('aria-pressed', language === 'zh');
  localStorage.setItem('portfolio-language', language);
}

languageButton.addEventListener('click', () => {
  setLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh');
});

document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(localStorage.getItem('portfolio-language') || 'zh');
