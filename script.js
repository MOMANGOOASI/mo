// script.js - Gestione del modale Preventivo, Cookie Consent e altre interazioni
document.addEventListener('DOMContentLoaded', function() {
  // Modale Preventivo
  const modal = document.getElementById('preventivoModal');
  const openBtns = document.querySelectorAll('.cta-preventivo');
  const closeBtn = document.querySelector('.modal .close');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  const form = document.querySelector('#preventivoModal form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert('Richiesta inviata con successo!');
        modal.style.display = 'none';
        form.reset();
      } else {
        alert('Errore durante l\'invio della richiesta.');
      }
    } catch (error) {
      alert('Errore durante l\'invio della richiesta.');
    }
  });

  // Cookie Consent
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptCookies = document.getElementById('acceptCookies');

  if (!localStorage.getItem('cookiesAccepted')) {
    cookieConsent.style.display = 'flex';
  } else {
    cookieConsent.style.display = 'none';
  }

  acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieConsent.style.display = 'none';
  });
});
