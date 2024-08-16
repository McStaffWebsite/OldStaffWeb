const switchTheme = () => {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme;
    
    // Determine the new theme
    newTheme = (dataTheme === 'light') ? 'dark' : 'light';
    
    // Set the new theme
    rootElem.setAttribute('data-theme', newTheme);
    
    // Save the new theme in localStorage
    localStorage.setItem('theme', newTheme);
};

// Check for saved theme in localStorage and apply it
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Attach event listener to the theme switcher button
const el = document.getElementById('theme-switcher');
if (el) {
  el.addEventListener('click', switchTheme);
}


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });
