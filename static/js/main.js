(function() {
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const setThemeColor = (e) => {
    if (e.matches) {
      themeColor.setAttribute('content', '#161e40');
    } else {
      themeColor.setAttribute('content', '#ffffff');
    }
  }
  darkModeMediaQuery.addEventListener('change', setThemeColor);
  setThemeColor(darkModeMediaQuery);
})();
