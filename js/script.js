// ==========================================
// SONG DEDICATION QR JOURNEY - MAIN SCRIPT
// Animations, Typewriter, and Interactions
// ==========================================

// Create floating hearts
function createFloatingHearts() {
  const container = document.querySelector('.hearts-container');
  
  if (!container) {
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'hearts-container';
    document.body.appendChild(heartsContainer);
  }

  const heartsContainer = document.querySelector('.hearts-container');
  
  // Clear existing hearts
  heartsContainer.innerHTML = '';
  
  // Create 9 floating hearts
  for (let i = 0; i < 9; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤';
    heart.style.bottom = Math.random() * 10 + 'px';
    heartsContainer.appendChild(heart);
  }
}

// Typewriter effect for text
function typeWriter(element, text, speed = 50, callback = null) {
  if (!element) return;
  
  element.innerHTML = '';
  element.classList.add('typewriter');
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      element.classList.remove('typewriter');
      if (callback) callback();
    }
  }

  type();
}

// Progress bar update
function updateProgressBar(currentPage, totalPages = 10) {
  const progressText = document.querySelector('.progress-text');
  const dots = document.querySelectorAll('.dot');

  if (progressText) {
    progressText.textContent = `PAPER ${currentPage} OF ${totalPages}`;
  }

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index < currentPage);
  });
}

// Generate progress dots
function generateProgressDots(total = 10) {
  const progressDots = document.querySelector('.progress-dots');
  
  if (!progressDots) {
    console.warn('Progress dots container not found');
    return;
  }

  progressDots.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    progressDots.appendChild(dot);
  }
}

// Audio player setup
function setupAudioPlayer(audioElement) {
  if (!audioElement) return;

  audioElement.addEventListener('play', function() {
    // Optional: add animation when playing
    console.log('Audio playing');
  });

  audioElement.addEventListener('pause', function() {
    console.log('Audio paused');
  });

  audioElement.addEventListener('ended', function() {
    console.log('Audio ended');
  });
}

// Page initialization
function initializePage(pageNumber) {
  // Create floating hearts
  createFloatingHearts();

  // Generate progress dots
  generateProgressDots(10);

  // Update progress
  updateProgressBar(pageNumber);

  // Setup audio player
  const audioPlayer = document.querySelector('audio');
  if (audioPlayer) {
    setupAudioPlayer(audioPlayer);
  }

  // Add fade-in animation to main content
  const main = document.querySelector('main');
  if (main) {
    main.style.animation = 'fadeIn 1s ease-out';
  }
}

// Get page number from URL
function getPageNumber() {
  const filename = window.location.pathname.split('/').pop();
  const match = filename.match(/page(\d+)/);
  return match ? parseInt(match[1]) : 1;
}

// Next page navigation
function goToNextPage(currentPage) {
  const nextPage = currentPage + 1;
  if (nextPage <= 10) {
    window.location.href = `page${nextPage}.html`;
  } else {
    alert('🎵 You\'ve reached the end of the journey! ❤️ Thank you for listening to every song.');
  }
}

// Previous page navigation
function goToPreviousPage(currentPage) {
  const prevPage = currentPage - 1;
  if (prevPage >= 1) {
    window.location.href = `page${prevPage}.html`;
  }
}

// Smooth scroll on load
function smoothScroll() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Small delay for better UX
  setTimeout(() => {
    const pageNumber = getPageNumber();
    initializePage(pageNumber);
  }, 100);

  // Smooth scroll to top on page load
  smoothScroll();
});

// Optional: Keyboard navigation
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    const currentPage = getPageNumber();
    goToNextPage(currentPage);
  } else if (event.key === 'ArrowLeft') {
    const currentPage = getPageNumber();
    goToPreviousPage(currentPage);
  }
});

// QR Code Scanner
let qrScanner = null;

function toggleScanner() {
  const container = document.getElementById('scanner-container');
  
  if (!container) {
    console.log('Scanner container not found');
    return;
  }
  
  if (container.style.display === 'none' || container.style.display === '') {
    container.style.display = 'block';
    initializeQRScanner();
  } else {
    container.style.display = 'none';
    stopQRScanner();
  }
}

function initializeQRScanner() {
  // Load html5-qrcode library dynamically
  if (!window.Html5Qrcode) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.4/html5-qrcode.min.js';
    script.onload = startScanning;
    document.head.appendChild(script);
  } else {
    startScanning();
  }
}

function startScanning() {
  try {
    if (qrScanner) {
      qrScanner.stop().then(() => {
        qrScanner = null;
        createAndStartScanner();
      }).catch(() => {
        createAndStartScanner();
      });
    } else {
      createAndStartScanner();
    }
  } catch (e) {
    console.log('Error initializing scanner:', e);
  }
}

function createAndStartScanner() {
  const videoElement = document.getElementById('qr-video');
  
  if (!videoElement) {
    console.log('Video element not found');
    return;
  }

  qrScanner = new Html5Qrcode('scanner-container');
  
  const qrCodeSuccessCallback = (decodedText) => {
    console.log('QR Code detected:', decodedText);
    
    // Extract page number from URL
    const match = decodedText.match(/page(\d+)\.html/);
    if (match) {
      const pageNum = parseInt(match[1]);
      if (pageNum >= 1 && pageNum <= 10) {
        stopQRScanner();
        window.location.href = `page${pageNum}.html`;
      } else {
        alert('Invalid page number in QR code');
      }
    } else if (decodedText.includes('page')) {
      // Try to navigate directly if it's a full URL
      stopQRScanner();
      window.location.href = decodedText;
    } else {
      alert('Invalid QR code. Please scan a valid song dedication QR code.');
    }
  };

  const qrCodeErrorCallback = (error) => {
    // Ignore errors, scanner will keep trying
  };

  qrScanner.start(
    { facingMode: 'environment' },
    { fps: 10, qrbox: { width: 250, height: 250 } },
    qrCodeSuccessCallback,
    qrCodeErrorCallback
  ).catch((err) => {
    console.log('Error accessing camera:', err);
    alert('Camera access denied. Please enable camera permissions to use the scanner.');
    toggleScanner();
  });
}

function stopQRScanner() {
  if (qrScanner) {
    qrScanner.stop().then(() => {
      qrScanner = null;
    }).catch((err) => {
      console.log('Error stopping scanner:', err);
    });
  }
}

// Stop scanner when leaving page
window.addEventListener('beforeunload', stopQRScanner);

// Log for debugging
console.log('🎵 Song Dedication QR Journey Initialized with Scanner');
