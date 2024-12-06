const image = document.getElementById('image');

// Aumenta a imagem em 10% no hover
image.addEventListener('mouseover', () => {
  image.style.transform = 'scale(1.1)';
});

// Restaura o tamanho original ao sair do hover
image.addEventListener('mouseout', () => {
  image.style.transform = 'scale(1)';
});

document.addEventListener('DOMContentLoaded', function () {
  const sobreSection = document.querySelector('.sobre');

  // Animação de zoom ao passar o mouse
  sobreSection.addEventListener('mouseover', function () {
      sobreSection.style.transition = 'transform 0.3s ease-in-out';
      sobreSection.style.transform = 'scale(1.02)';
  });

  // Retorna ao estado original quando o mouse sai
  sobreSection.addEventListener('mouseout', function () {
      sobreSection.style.transition = 'transform 0.3s ease-in-out';
      sobreSection.style.transform = 'scale(1)';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os links de navegação
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault(); // Impede o comportamento padrão do link

          // Seleciona o destino do link
          const targetId = link.getAttribute('href').substring(1); // Remove o "#"
          const targetElement = document.getElementById(targetId);

          // Rolagem suave até o elemento de destino
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const avaliacoes = document.querySelectorAll('.testemunhos');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  });

  avaliacoes.forEach(avaliacao => {
      avaliacao.style.opacity = '0';
      avaliacao.style.transform = 'translateY(20px)';
      avaliacao.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      observer.observe(avaliacao);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const avaliacoes = document.querySelectorAll('.avaliacao');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  });

  avaliacoes.forEach(avaliacao => {
      avaliacao.style.opacity = '0';
      avaliacao.style.transform = 'translateY(20px)';
      avaliacao.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      observer.observe(avaliacao);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const avaliacoes = document.querySelectorAll('.avaliacao');

  avaliacoes.forEach(avaliacao => {
      avaliacao.addEventListener('mouseenter', function () {
          avaliacoes.forEach(card => card.style.transform = 'scale(1)'); // Reseta outros
          this.style.transform = 'scale(1.1)'; // Aumenta o card atual
          this.style.transition = 'transform 0.3s ease'; // Suaviza o efeito
      });

      avaliacoes.forEach(avaliacao => {
          avaliacao.addEventListener('mouseleave', function () {
              this.style.transform = 'scale(1)'; // Volta ao tamanho original
          });
      });
  });
});

// script.js
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    // Mostrar o botão quando o scroll for maior que 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Quando clicar no botão, a página sobe
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.querySelector('.cta-button'); // Seleciona o botão da seção CTA
    const planosSection = document.querySelector('.planos'); // Seleciona a seção de planos

    ctaButton.addEventListener('click', function () {
        // Rolagem suave até a seção de planos
        planosSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});