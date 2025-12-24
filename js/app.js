// Netflix-style Website App
// Profile and PIN management

// Sample photos - replace these with your actual photos
const photos = [
  // Row 1: Cafes We Went
  {
    id: 1,
    src: 'img/agnus.jpg',
    fallbackSrc: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop',
    title: 'Agnus',
    description: 'Delicious meals together',
    fullDescription: 'An unforgettable dining experience where every bite was perfect. The ambiance, the food, and most importantly, the company made this evening truly special.',
    date: 'Season 1 • Episode 3',
    rating: '99% Match',
    tags: 'Romantic • Delicious • Memorable',
    src: 'img/agnus.png',
    title: 'Agnus',
    description: '🍽️ Tonight at Agnus\n' +
      '\n' +
      '2025 • Romance / Drama • 1h 45m\n' +
      '\n' +
      'As night falls over Unawatuna, a quiet table becomes the center of an intimate story. Soft candlelight, low conversations, and the distant rhythm of the sea set the tone for an evening that unfolds slowly and deliberately.\n' +
      '\n' +
      'Each course arrives like a carefully written scene—bold flavors, refined details, and moments of pause that invite connection. Between shared glances and unspoken understanding, the outside world fades, leaving only the warmth of the setting and the closeness of the moment.\n' +
      '\n' +
      'This is a story about presence, about savoring time, and about how a simple dinner can turn into something unforgettable.\n' +
      '\n' +
      'Starring: Good food, good company, and the night itself\n' +
      'Watch if you like: Slow-burn romances, atmospheric storytelling, and evenings that linger long after they end',
    row: 1
  },
  {
    id: 2,
    src: 'img/tavetti.png',
    title: 'Taavetti Beach Club',
    description: 'Beautiful beachside dining experience',
    fullDescription: 'Sunset views, ocean breeze, and the best company. We watched the waves crash while sharing stories and dreams. This is where time stood still.',
    date: 'Season 1 • Episode 5',
    rating: '98% Match',
    tags: 'Beachside • Romantic • Sunset Views',
    row: 1
  },
  {
    id: 3,
    src: 'img/RiffHikkaduwa.png',
    title: 'Riff Hikkaduwa',
    description: 'Amazing food and atmosphere',
    fullDescription: 'The place where we laughed until our stomachs hurt. Amazing cocktails, incredible food, and even better conversations. Every moment here felt like a celebration.',
    date: 'Season 2 • Episode 1',
    rating: '97% Match',
    tags: 'Vibrant • Fun • Delicious',
    row: 1
  },
  {
    id: 4,
    src: 'img/barista.png',
    title: 'Barisat Galle Fort',
    description: 'Historic fort dining',
    fullDescription: 'Dining in history. The old fort walls held our whispers and laughter. Traditional flavors met modern romance in this beautiful setting.',
    date: 'Season 2 • Episode 4',
    rating: '96% Match',
    tags: 'Historic • Charming • Cultural',
    row: 1
  },
  {
    id: 5,
    src: 'img/capeweligama.png',
    title: 'Cape Weligama',
    description: 'Luxury dining with ocean views',
    fullDescription: 'Pure luxury overlooking the endless ocean. We felt like royalty with every course. The view was breathtaking, but not as much as the person sitting across from me.',
    date: 'Season 2 • Episode 7',
    rating: '100% Match',
    tags: 'Luxury • Ocean View • Elegant',
    row: 1
  },
  {
    id: 6,
    src: 'img/cellestial.png',
    title: 'Celestial Galle Fort',
    description: 'Charming fort restaurant',
    fullDescription: 'Under the stars in the historic fort. The name says it all - celestial. An evening that felt like it was written in the stars.',
    date: 'Season 2 • Episode 9',
    rating: '95% Match',
    tags: 'Romantic • Starry • Historic',
    row: 1
  },
  {
    id: 7,
    src: 'img/crytsalsand.png',
    title: 'Crystal Sand',
    description: 'Beachside relaxation',
    fullDescription: 'Toes in the sand, drinks in hand, and hearts completely content. The perfect beach day turned into a perfect beach evening.',
    date: 'Season 3 • Episode 2',
    rating: '94% Match',
    tags: 'Beachside • Relaxing • Carefree',
    row: 1
  },
  {
    id: 8,
    src: 'img/raddissoncollection.png',
    title: 'Radisson Collection',
    description: 'Upscale dining experience',
    fullDescription: 'Five-star service, world-class cuisine, and the best date ever. Every detail was perfect, just like every moment with you.',
    date: 'Season 3 • Episode 5',
    rating: '99% Match',
    tags: 'Upscale • Sophisticated • Perfect',
    row: 1
  },
  // Row 2: Places We Went
  {
    id: 9,
    src: 'img/galle.png',
    title: 'Galle',
    description: 'Exploring new places',
    fullDescription: 'Adventure called and we answered. Climbing to new heights together, both literally and metaphorically. The view from the top was incredible, but the journey with you was even better.',
    date: 'Season 3 • Episode 8',
    rating: '97% Match',
    tags: 'Adventure • Scenic • Memorable',
    row: 2
  },
  {
    id: 10,
    src: 'img/colombo.png',
    title: 'Colombo',
    description: 'Beautiful evening stroll',
    fullDescription: 'Golden hour magic. Walking hand in hand as the sun painted the sky in our favorite colors. Time slowed down and everything felt perfect.',
    date: 'Season 4 • Episode 2',
    rating: '100% Match',
    tags: 'Romantic • Peaceful • Golden',
    row: 2
  },
  {
    id: 11,
    src: 'img/awarekaaley.png',
    title: 'Awareka aley',
    description: 'Discovering the city',
    fullDescription: 'Getting lost in the city streets and finding ourselves in each moment. Every corner held a new surprise, every street a new memory.',
    date: 'Season 4 • Episode 5',
    rating: '96% Match',
    tags: 'Urban • Exciting • Spontaneous',
    row: 2
  },
  // Row 3: Shopping Places We Went
  {
    id: 12,
    src: 'img/carnage.png',
    title: 'Carnage OGF',
    description: 'Finding treasures together',
    fullDescription: 'Finding hidden gems in boutique stores. You have the best taste, and together we found pieces that tell our story.',
    date: 'Season 5 • Episode 1',
    rating: '95% Match',
    tags: 'Fashionable • Fun • Quality Time',
    row: 3
  },
  {
    id: 13,
    src: 'img/Onegalleface.png',
    title: 'Market Day',
    description: 'Browsing through shops',
    fullDescription: 'The local market where we spent hours just exploring. From handmade crafts to delicious snacks, every stall was an adventure.',
    date: 'Season 5 • Episode 3',
    rating: '94% Match',
    tags: 'Local • Cultural • Charming',
    row: 3
  },

  // Row 4: Future Date Ideas
  {
    id: 15,
    src: 'img/beachdate.png',
    title: 'Beach Date',
    description: 'Walking on the sand, watching the waves together',
    fullDescription: 'Coming Soon: Barefoot walks on pristine beaches, building sandcastles, watching the sunset over the ocean, and making wishes on waves.',
    date: 'Upcoming Episode',
    rating: '100% Match (Predicted)',
    tags: 'Romantic • Relaxing • Paradise',
    row: 4
  },
  {
    id: 16,
    src: 'img/potterydate.png',
    title: 'Pottery Date',
    description: 'Creating something beautiful together',
    fullDescription: 'Coming Soon: Getting our hands dirty while creating art together. Laughing at our wonky pots and making something uniquely ours.',
    date: 'Upcoming Episode',
    rating: '99% Match (Predicted)',
    tags: 'Creative • Fun • Artsy',
    row: 4
  },
  {
    id: 17,
    src: 'img/Travellingnight.png',
    title: 'Travelling at Night',
    description: 'Late night adventures under the stars',
    fullDescription: 'Coming Soon: Late night drives with no destination, stargazing from hilltops, and deep conversations that last until sunrise.',
    date: 'Upcoming Episode',
    rating: '100% Match (Predicted)',
    tags: 'Adventurous • Romantic • Dreamy',
    row: 4
  },
  {
    id: 18,
    src: 'img/swimming.png',
    title: 'Swimming',
    description: 'Making a splash together',
    fullDescription: 'Coming Soon: Pool days, ocean swims, and splashing around like kids. Making waves and memories together.',
    date: 'Upcoming Episode',
    rating: '98% Match (Predicted)',
    tags: 'Refreshing • Playful • Summer',
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

  // Play button - Show girlfriend proposal with Netflix intro
  const playBtn = document.querySelector('.btn-play');
  const proposalModal = document.getElementById('proposal-modal');
  const proposalIntro = document.getElementById('proposal-intro');
  const proposalLoading = document.getElementById('proposal-loading');
  const proposalMessage = document.getElementById('proposal-message');
  const closeProposalBtn = document.getElementById('close-proposal');

  playBtn.addEventListener('click', () => {
    // Show modal with Netflix N intro
    proposalModal.classList.add('active');
    proposalIntro.style.display = 'flex';
    proposalLoading.classList.remove('active');
    proposalMessage.classList.remove('active');

    // After 3 seconds (N animation), show loading
    setTimeout(() => {
      proposalIntro.style.display = 'none';
      proposalLoading.classList.add('active');
    }, 3000);

    // After 5 seconds total, show the proposal message
    setTimeout(() => {
      proposalLoading.classList.remove('active');
      proposalMessage.classList.add('active');
    }, 5000);
  });

  closeProposalBtn.addEventListener('click', () => {
    proposalModal.classList.remove('active');
    resetProposal();
  });

  proposalModal.addEventListener('click', (e) => {
    if (e.target === proposalModal) {
      proposalModal.classList.remove('active');
      resetProposal();
    }
  });

  function resetProposal() {
    proposalIntro.style.display = 'flex';
    proposalLoading.classList.remove('active');
    proposalMessage.classList.remove('active');
  }

  // More Info button - Show Netflix-style info page
  const infoBtn = document.querySelector('.btn-info');
  const infoModal = document.getElementById('info-modal');
  const infoCloseBtn = document.getElementById('info-close');

  infoBtn.addEventListener('click', () => {
    infoModal.classList.add('active');
  });

  infoCloseBtn.addEventListener('click', () => {
    infoModal.classList.remove('active');
  });

  infoModal.addEventListener('click', (e) => {
    if (e.target === infoModal) {
      infoModal.classList.remove('active');
    }
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

  // Photo Modal functionality
  const photoModal = document.getElementById('photo-modal');
  const photoClose = document.getElementById('photo-close');

  photoClose.addEventListener('click', () => {
    photoModal.classList.remove('active');
  });

  photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
      photoModal.classList.remove('active');
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
  const photoHeroImg = document.getElementById('photo-hero-img');
  const photoTitle = document.getElementById('photo-title');
  const photoRating = document.getElementById('photo-rating');
  const photoDate = document.getElementById('photo-date');
  const photoTags = document.getElementById('photo-tags');
  const photoFullDesc = document.getElementById('photo-full-desc');

  photoHeroImg.src = photo.src || photo.fallbackSrc;
  photoTitle.textContent = photo.title;
  photoRating.textContent = photo.rating;
  photoDate.textContent = photo.date;
  photoTags.textContent = photo.tags;
  photoFullDesc.textContent = photo.fullDescription;

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
