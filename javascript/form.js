 function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const messageContainer = document.getElementById('messageContainer');
      const messageText = document.getElementById('messageText');
      const name = document.getElementById('name').value;

      messageText.textContent = `Děkujeme, ${name}! Vaša zpráva byla úspěšně odeslána. Odpovíme vám co nejdříve.`;
      messageContainer.style.display = 'block';
      form.style.display = 'none';

      setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        messageContainer.style.display = 'none';
      }, 3000);
    }