let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function removeFromCart(product) {
  const index = cart.indexOf(product);
  if (index > -1) {
    cart.splice(index, 1);
  }
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  
  cartCount.textContent = cart.length;
  cartItems.innerHTML = '';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeFromCart(item);
    li.appendChild(removeButton);
    cartItems.appendChild(li);
  });
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => {
    section.style.display = section.id === sectionId ? 'block' : 'none';
  });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('thank-you-message').style.display = 'block';
  this.reset();
});

// Initially hide all sections except the home section
document.addEventListener('DOMContentLoaded', function() {
  showSection('home');
  typeWriterEffect();
  // Rimuovi promoTypeWriterEffect
});

function typeWriterEffect() {
  const texts = [
    "Le nostre categorie di prodotti",
    "Cosmetici ecologici",
    "Prodotti per la casa",
    "Alimenti biologici",
    "Abbigliamento sostenibile",
    "Accessori eco-friendly"
  ];
  const typewriterText = document.getElementById('typewriter-text');
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[textIndex].length) {
      typewriterText.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Velocità di digitazione
    } else {
      setTimeout(() => {
        typewriterText.textContent = '';
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        type();
      }, 2000); // Pausa prima di passare al prossimo testo
    }
  }

  type();
}

// Rimuovi promoTypeWriterEffect function

let currentIndex = 0;

function showNextItem() {
  const carouselContainer = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');
  currentIndex = (currentIndex + 1) % items.length;
  const offset = -currentIndex * 100;
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextItem, 3000); // Cambia elemento ogni 3 secondi