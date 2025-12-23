// Netflix-style Website App
// Profile and PIN management

// Sample photos - replace these with your actual photos
const photos = [
  // Row 1: Cafes We Went
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop',
    title: 'Agnus Tivetti Beach Club',
    description: 'Beautiful beachside dining experience',
    row: 1
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    title: 'Riff Hikkaduwa',
    description: 'Amazing food and atmosphere',
    row: 1
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    title: 'Barisat Galle Fort',
    description: 'Historic fort dining',
    row: 1
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=600&fit=crop',
    title: 'Cape Weligama',
    description: 'Luxury dining with ocean views',
    row: 1
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
    title: 'Celestial Galle Fort',
    description: 'Charming fort restaurant',
    row: 1
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop',
    title: 'Crystal Sand',
    description: 'Beachside relaxation',
    row: 1
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    title: 'Radisson Collection',
    description: 'Upscale dining experience',
    row: 1
  },
  // Row 2: Places We Went
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    title: 'Mountain Views',
    description: 'Exploring new places',
    row: 2
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
    title: 'Sunset Walk',
    description: 'Beautiful evening stroll',
    row: 2
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1533093818119-ac1fa47a6653?w=800&h=600&fit=crop',
    title: 'City Adventure',
    description: 'Discovering the city',
    row: 2
  },
  // Row 3: Shopping Places We Went
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    title: 'Shopping Spree',
    description: 'Finding treasures together',
    row: 3
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop',
    title: 'Market Day',
    description: 'Browsing through shops',
    row: 3
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&h=600&fit=crop',
    title: 'Mall Adventure',
    description: 'Shopping and fun',
    row: 3
  },
  // Row 4: Future Date Ideas
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    title: 'Beach Date',
    description: 'Walking on the sand, watching the waves together',
    row: 4
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop',
    title: 'Pottery Date',
    description: 'Creating something beautiful together',
    row: 4
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop',
    title: 'Travelling at Night',
    description: 'Late night adventures under the stars',
    row: 4
  },
  {
    id: 17,
    src: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop',
    title: 'Swimming',
    description: 'Making a splash together',
    row: 4
  }
];

// Profile configuration
const profiles = {
  sahan: {
    name: 'Sahan',
    pin: '1234',
    avatar: 'img/sahan-avatar.png',
    fallbackAvatar: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg'
  },
  chamudi: {
    name: 'Chamudi',
    pin: '4321',
    avatar: 'img/chamudi-avatar.png',
    fallbackAvatar: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
  }
};

let currentProfile = null;
let currentPinAttempt = '';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initializeProfileSelection();
  initializePinScreen();
  initializeBrowseScreen();

  // Start with profile selection screen
  showScreen('profile-screen');
});

// Profile Selection
function initializeProfileSelection() {
  const profileCards = document.querySelectorAll('.profile-card');

  profileCards.forEach(card => {
    card.addEventListener('click', () => {
      const profileId = card.dataset.profile;
      selectProfile(profileId);
    });
  });
}

function selectProfile(profileId) {
  currentProfile = profiles[profileId];

  // Update PIN screen with profile info
  const pinProfileImg = document.getElementById('pin-profile-img');
  const pinProfileName = document.getElementById('pin-profile-name');

  pinProfileImg.src = currentProfile.avatar;
  pinProfileImg.onerror = () => {
    pinProfileImg.src = currentProfile.fallbackAvatar;
  };
  pinProfileName.textContent = currentProfile.name;

  // Clear PIN inputs
  clearPinInputs();

  // Show PIN screen
  showScreen('pin-screen');

  // Focus first PIN input
  document.querySelector('.pin-input[data-index="0"]').focus();
}

// PIN Entry
function initializePinScreen() {
  const pinInputs = document.querySelectorAll('.pin-input');
  const backBtn = document.getElementById('back-to-profiles');

  pinInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const value = e.target.value;

      if (value.length === 1) {
        currentPinAttempt += value;

        // Move to next input or validate
        if (index < pinInputs.length - 1) {
          pinInputs[index + 1].focus();
        } else {
          validatePin();
        }
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        pinInputs[index - 1].focus();
        currentPinAttempt = currentPinAttempt.slice(0, -1);
      }
    });

    // Prevent paste
    input.addEventListener('paste', (e) => {
      e.preventDefault();
    });
  });

  backBtn.addEventListener('click', () => {
    currentProfile = null;
    currentPinAttempt = '';
    clearPinInputs();
    showScreen('profile-screen');
  });
}

function validatePin() {
  const errorMsg = document.getElementById('pin-error');

  if (currentPinAttempt === currentProfile.pin) {
    errorMsg.textContent = '';
    currentPinAttempt = '';

    // Show loading screen with Netflix animation
    showScreen('loading-screen');

    // Simulate loading time (like real Netflix)
    setTimeout(() => {
      loadBrowseScreen();

      // Fade out loading screen
      const loadingScreen = document.getElementById('loading-screen');
      loadingScreen.classList.add('fade-out');

      // Wait for fade-out before showing browse screen
      setTimeout(() => {
        loadingScreen.classList.remove('fade-out');

        // Add entrance animation class
        const browseScreen = document.getElementById('browse-screen');
        browseScreen.classList.add('entering');

        showScreen('browse-screen');

        // Add hero animation
        setTimeout(() => {
          const heroSection = document.querySelector('.hero-section');
          if (heroSection) {
            heroSection.classList.add('animate-in');
          }
        }, 100);

        // Remove entrance class after animation
        setTimeout(() => {
          browseScreen.classList.remove('entering');
        }, 800);
      }, 500); // Wait for fade-out animation
    }, 2000); // 2 second loading animation

  } else {
    errorMsg.textContent = 'Incorrect PIN. Please try again.';
    currentPinAttempt = '';
    clearPinInputs();

    // Shake animation
    const pinContainer = document.querySelector('.pin-input-container');
    pinContainer.style.animation = 'shake 0.5s';
    setTimeout(() => {
      pinContainer.style.animation = '';
    }, 500);

    document.querySelector('.pin-input[data-index="0"]').focus();
  }
}

function clearPinInputs() {
  document.querySelectorAll('.pin-input').forEach(input => {
    input.value = '';
  });
  document.getElementById('pin-error').textContent = '';
}

// Browse Screen
function initializeBrowseScreen() {
  const logoutBtn = document.getElementById('logout-btn');

  logoutBtn.addEventListener('click', () => {
    currentProfile = null;
    currentPinAttempt = '';
    showScreen('profile-screen');
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Modal functionality
  const modal = document.getElementById('photo-modal');
  const modalClose = document.querySelector('.modal-close');

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

function loadBrowseScreen() {
  // Update current profile avatar in navbar
  const navAvatar = document.getElementById('current-profile-avatar');
  navAvatar.src = currentProfile.avatar;
  navAvatar.onerror = () => {
    navAvatar.src = currentProfile.fallbackAvatar;
  };

  // Populate photo rows
  for (let i = 1; i <= 4; i++) {
    const rowElement = document.getElementById(`row-${i}`);
    rowElement.innerHTML = ''; // Clear existing

    const rowPhotos = photos.filter(photo => photo.row === i);

    rowPhotos.forEach(photo => {
      const posterEl = createPosterElement(photo);
      rowElement.appendChild(posterEl);
    });
  }
}

function createPosterElement(photo) {
  const poster = document.createElement('div');
  poster.className = 'poster';

  const img = document.createElement('img');
  img.src = photo.src;
  img.alt = photo.title;
  img.loading = 'lazy';

  const overlay = document.createElement('div');
  overlay.className = 'poster-overlay';

  const title = document.createElement('div');
  title.className = 'poster-title';
  title.textContent = photo.title;

  overlay.appendChild(title);
  poster.appendChild(img);
  poster.appendChild(overlay);

  // Click to open modal
  poster.addEventListener('click', () => {
    openPhotoModal(photo);
  });

  return poster;
}

function openPhotoModal(photo) {
  const modal = document.getElementById('photo-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');

  modalImg.src = photo.src;
  modalTitle.textContent = photo.title;
  modalDescription.textContent = photo.description;

  modal.classList.add('active');
}

// Screen management
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  document.getElementById(screenId).classList.add('active');

  // Manage body scrolling
  if (screenId === 'browse-screen') {
    document.body.classList.add('browse-active');
  } else {
    document.body.classList.remove('browse-active');
  }
}

// Add shake animation for wrong PIN
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
  }
`;
document.head.appendChild(style);

// Console message
console.log('%cNetflix-Style Website', 'color: #E50914; font-size: 24px; font-weight: bold;');
console.log('%cMade with d for Chamudi', 'color: #fff; font-size: 16px;');
console.log('\n=� Profile PINs:\n- Sahan: 1234\n- Chamudi: 4321');
