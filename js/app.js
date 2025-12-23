// Netflix-style Website App
// Profile and PIN management

// Sample photos - replace these with your actual photos
const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop',
    title: 'Beautiful Sunset',
    description: 'A magical evening together',
    row: 1
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop',
    title: 'Coffee Date',
    description: 'Our favorite coffee spot',
    row: 1
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1533093818119-ac1fa47a6653?w=800&h=600&fit=crop',
    title: 'Adventure Time',
    description: 'Exploring new places',
    row: 2
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=600&fit=crop',
    title: 'Happy Moments',
    description: 'Making memories',
    row: 2
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop',
    title: 'Special Day',
    description: 'Celebrating together',
    row: 3
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&h=600&fit=crop',
    title: 'Peaceful Evening',
    description: 'Just the two of us',
    row: 3
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=600&fit=crop',
    title: 'Love',
    description: 'Forever and always',
    row: 4
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&h=600&fit=crop',
    title: 'Together',
    description: 'Our journey',
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
