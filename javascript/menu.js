const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navigation.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', menuToggle.classList.contains('active'));
    });

    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navigation.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });