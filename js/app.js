// Netflix-style Website App
// Profile and PIN management

// Sample photos - replace these with your actual photos
const photos = [
  // Row 1: Cafes We Went
  {
    id: 1,
    src: 'img/agnus.png',
    fallbackSrc: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop',
    title: 'Agnus',
    description: 'Delicious meals together',
    fullDescription: '🍽️ Tonight at Agnus\n\n2025 • Romance / Drama • 1h 45m\n\nAs night falls over Unawatuna, a quiet table becomes the center of an intimate story. Soft candlelight, low conversations, and the distant rhythm of the sea set the tone for an evening that unfolds slowly and deliberately.\n\nEach course arrives like a carefully written scene—bold flavors, refined details, and moments of pause that invite connection. Between shared glances and unspoken understanding, the outside world fades, leaving only the warmth of the setting and the closeness of the moment.\n\nThis is a story about presence, about savoring time, and about how a simple dinner can turn into something unforgettable.\n\nStarring: Good food, good company, and the night itself\n\nWatch if you like: Slow-burn romances, atmospheric storytelling, and evenings that linger long after they end',
    date: 'Season 1 • Episode 3',
    rating: '99% Match',
    tags: 'Romantic • Delicious • Memorable',
    row: 1
  },
  {
    id: 2,
    src: 'img/tavetti.png',
    title: 'Taavetti Beach Club',
    description: 'Beautiful beachside dining experience',
    fullDescription: '🌊 Sunset at Taavetti\n\n2025 • Romance / Adventure • 2h 10m\n\nThe ocean meets elegance in this stunning beachside escape. As golden hour paints the sky in shades of amber and rose, we find ourselves at a table where the horizon stretches endlessly before us.\n\nThe sound of waves provides a natural soundtrack to our laughter and conversation. Fresh seafood, creative cocktails, and the kind of sunset that makes you forget about time—this is where memories are made against a backdrop of pure paradise.\n\nEvery glance across the table feels like a scene from a dream. The breeze carries salt air and promises of countless more evenings just like this.\n\nStarring: Ocean views, perfect timing, and two hearts in sync\n\nWatch if you like: Beach romances, golden hour photography, and moments that take your breath away',
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
    fullDescription: '🎉 A Night at Riff\n\n2025 • Comedy / Romance • 2h 35m\n\nEnergy, laughter, and the kind of night where everything feels electric. Hikkaduwa comes alive at Riff, and so do we. This isn\'t just dinner—it\'s an experience that pulses with life and flavor.\n\nCocktails crafted like art, dishes that surprise and delight, and conversations that flow as smoothly as the music in the background. The atmosphere is vibrant, the company is perfect, and every moment feels like we\'re celebrating something special.\n\nWe laugh until our cheeks hurt, share bites of incredible food, and lose track of time in the best possible way. This is the kind of night that becomes a story we\'ll tell over and over.\n\nStarring: Unforgettable flavors, infectious energy, and pure joy\n\nWatch if you like: Vibrant nightlife, culinary adventures, and evenings that feel like celebrations',
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
    fullDescription: '🏰 History Meets Romance\n\n2025 • Historical Drama / Romance • 1h 55m\n\nWithin the ancient walls of Galle Fort, history whispers through every cobblestone and archway. But tonight, we\'re writing our own story among these centuries-old stones.\n\nTraditional Sri Lankan flavors reimagined with contemporary flair—each dish tells a story of heritage and innovation. The colonial architecture frames our evening perfectly, creating an atmosphere where past and present dance together.\n\nAs the fort lights begin to glow against the darkening sky, we share coffee and conversations that feel both timeless and entirely of this moment. The weight of history makes everything feel more significant, more real.\n\nStarring: Colonial charm, cultural fusion, and timeless connection\n\nWatch if you like: Period pieces with modern heart, cultural exploration, and romance in historic settings',
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
    fullDescription: '✨ An Evening of Elegance\n\n2025 • Luxury / Romance • 3h 15m\n\nSometimes life feels like a five-star movie, and tonight is one of those nights. Perched high above the Indian Ocean, Cape Weligama offers not just a meal, but an experience that redefines luxury.\n\nCourse after course of culinary perfection, each plate a work of art that tastes even better than it looks. The ocean stretches endlessly before us, waves crashing against the rocks below, while we\'re suspended in a moment of pure sophistication.\n\nThe service is impeccable, the wine flows perfectly, but what makes this evening truly unforgettable is the company. Across from me sits someone who makes even the most luxurious setting feel like home.\n\nStarring: Ocean infinity, refined elegance, and love in its finest form\n\nWatch if you like: Luxury experiences, breathtaking views, and romance that feels like poetry',
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
    fullDescription: '⭐ Written in the Stars\n\n2025 • Romance / Fantasy • 2h 20m\n\nThe name promises something otherworldly, and Celestial delivers. Under a canopy of stars within Galle Fort\'s historic embrace, we find ourselves in a setting that feels almost magical.\n\nThe fort\'s ancient walls create an intimate courtyard where modern cuisine meets cosmic romance. String lights mimic constellations above us, and every moment feels touched by something beyond the ordinary.\n\nWe share dishes and dreams, talking about futures and possibilities while the universe seems to lean in and listen. This is the kind of evening where you make wishes and believe they might actually come true.\n\nStarring: Starlit ambiance, fort magic, and destiny in the details\n\nWatch if you like: Magical realism, romantic destiny, and evenings that feel written in the stars',
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
    fullDescription: '🏖️ Barefoot Paradise\n\n2025 • Romance / Relaxation • 4h 00m\n\nSome days are made for doing absolutely nothing, and doing it perfectly. Crystal Sand is where time slows down, worries wash away with the tide, and life is measured in sunset colors and shared smiles.\n\nToes in the soft sand, tropical drinks sweating in the heat, and the gentle sound of waves creating the perfect soundtrack for lazy conversation. We lounge, we laugh, we let the day unfold at its own perfect pace.\n\nAs afternoon melts into evening, the beach transforms into shades of gold and pink. We\'re sun-kissed, completely relaxed, and exactly where we\'re meant to be.\n\nStarring: Endless beach, perfect weather, and the art of doing nothing together\n\nWatch if you like: Beach life, slow romance, and days that feel like vacation',
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
    fullDescription: '🌟 Five Stars, Infinite Moments\n\n2025 • Luxury / Romance • 2h 50m\n\nWhen every detail matters, when excellence is the baseline, when an evening needs to be absolutely perfect—this is where you come. The Radisson Collection doesn\'t just meet expectations; it transcends them.\n\nWorld-class cuisine prepared by master chefs, sommelier-selected wines, and service so attentive it feels like the entire establishment exists just for us. The ambiance whispers sophistication, from the crisp linens to the soft lighting that makes everything glow.\n\nBut beyond the Michelin-worthy food and impeccable presentation, what makes this evening truly special is how you look across the table, how your eyes light up with each course, how this perfect setting frames a perfectly imperfect, wonderfully real connection.\n\nStarring: Culinary mastery, refined atmosphere, and a date that exceeds every expectation\n\nWatch if you like: Fine dining experiences, sophisticated romance, and evenings where everything aligns perfectly',
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
    fullDescription: '🗺️ Adventures in Galle\n\n2025 • Adventure / Romance • 5h 30m\n\nSometimes the best stories begin with "let\'s just see where this goes." Today, that mindset leads us through the winding streets and hidden corners of Galle, each turn revealing something new and wonderful.\n\nWe explore ancient ramparts with ocean views that stretch to infinity, discover tucked-away boutiques selling treasures, and stumble upon viewpoints that make us stop and just breathe it all in. Hand in hand, we navigate cobblestone streets worn smooth by centuries of footsteps.\n\nEvery photo we take is beautiful, but none quite capture the real magic—the way your eyes light up when we find something unexpected, the comfortable silence between observations, the shared understanding that getting lost together is sometimes the best way to be found.\n\nStarring: Historic charm, endless discovery, and the joy of wandering together\n\nWatch if you like: Travel adventures, cultural exploration, and love stories written in footsteps',
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
    fullDescription: '🌆 Colombo at Dusk\n\n2025 • Romance / Urban Life • 3h 00m\n\nThere\'s something magical about a city at golden hour, when the harsh edges soften and everything glows with possibility. Colombo transforms before our eyes as we stroll through its heart, watching day surrender to evening.\n\nThe city buzzes with life—street vendors calling out, traffic humming, the ocean breeze carrying salt and the promise of night. But in this moment, walking hand in hand, the chaos becomes a symphony and we\'re dancing through it together.\n\nWe watch the sun paint the sky in impossible colors—amber, rose, violet—each shade more beautiful than the last. The city lights begin their nightly performance, and we\'re here for the show, together.\n\nStarring: Urban beauty, golden hour perfection, and the magic of simple moments\n\nWatch if you like: City romance, sunset photography, and evenings that feel suspended in time',
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
    fullDescription: '🚶 Lost and Found\n\n2025 • Urban Adventure / Romance • 4h 15m\n\nThey say not all who wander are lost, but today we definitely are—and it\'s absolutely perfect. Down unfamiliar streets and through neighborhoods we\'ve never seen, we\'re writing our own map of the city.\n\nEach wrong turn becomes a right one when it leads to a hidden cafe, a street art masterpiece, or just a quiet moment of laughter about being completely directionally challenged. The city reveals itself in layers, each one more interesting than the last.\n\nWe discover that getting lost together is actually finding something better—spontaneity, surprise, and the understanding that sometimes the best destinations are the ones you never planned to reach.\n\nStarring: Urban exploration, happy accidents, and the joy of getting wonderfully lost\n\nWatch if you like: City wandering, spontaneous adventures, and romance in unexpected places',
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
    fullDescription: '🛍️ Retail Therapy & Romance\n\n2025 • Fashion / Romance • 2h 45m\n\nShopping becomes an adventure when you\'re doing it together. At Carnage, surrounded by carefully curated fashion and unique pieces, we discover that finding the perfect item is even better when you have the perfect shopping partner.\n\nYou have an eye for style that\'s undeniable—picking pieces that somehow tell stories, that feel special, that transform an ordinary wardrobe into something extraordinary. I watch you deliberate, consider, choose, and every decision feels important and right.\n\nBetween trying on clothes and offering opinions, we\'re really just spending quality time in a beautiful space. The shopping bags we leave with are full of great finds, but the real treasure is the afternoon spent together.\n\nStarring: Impeccable taste, boutique discoveries, and the joy of choosing together\n\nWatch if you like: Fashion stories, boutique shopping, and relationships built on shared aesthetics',
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
    fullDescription: '🏪 Market Adventures\n\n2025 • Cultural / Romance • 3h 20m\n\nLocal markets are where a city\'s heart really beats, and today we\'re following that rhythm through stalls and shops, discovering treasures both big and small.\n\nHandmade crafts that took someone hours to create, street food that smells impossibly good, colorful textiles, quirky souvenirs, and a thousand little things that catch our eye. We taste, touch, browse, and bargain our way through the afternoon.\n\nYou have a knack for finding the most interesting items—things I would have walked right past suddenly become must-haves when you point out their charm. We leave with bags full of memories made physical, but the real value is in the shared experience of discovery.\n\nStarring: Local culture, hidden treasures, and the art of finding magic in markets\n\nWatch if you like: Cultural exploration, street markets, and relationships built through shared discoveries',
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
    fullDescription: '🏝️ Coming Soon: Beach Paradise\n\n2025 • Romance / Adventure • TBD\n\nImagine this: endless stretches of pristine sand, waves rolling in with perfect rhythm, and nothing but time to spend together. Barefoot walks where every footprint tells a story, building sandcastles that rival architectural masterpieces, and sunset watching that becomes a spiritual experience.\n\nWe\'ll dive into crystal-clear water, float on our backs watching clouds drift by, and maybe write our names in the sand just to watch the ocean gently erase them—a beautiful reminder that some moments don\'t need to be permanent to be perfect.\n\nAs the sun sets in impossible colors, we\'ll make wishes on waves and promises to come back again and again.\n\nStarring: Ocean dreams, sandy toes, and love in its most natural setting\n\nWatch if you like: Beach romance, tropical paradise, and futures worth planning',
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
    fullDescription: '🏺 Coming Soon: Creating Together\n\n2025 • Romance / Comedy • TBD\n\nPicture us at pottery wheels, hands covered in clay, attempting to recreate that iconic scene from every romance movie ever—except our pots will probably look more like abstract art than functional pottery.\n\nWe\'ll laugh at our wobbly creations, compete to see who can make the most ridiculous shape, and discover that it doesn\'t matter if our bowls are lopsided or our vases look questionable. What matters is the shared experience of creating something with our own hands, together.\n\nAt the end, we\'ll have matching (sort of) pottery pieces that are uniquely, imperfectly, wonderfully ours—just like us.\n\nStarring: Creative chaos, clay-covered laughter, and art made with love\n\nWatch if you like: Creative dates, romantic comedies, and making memories that stick (like clay)',
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
    fullDescription: '🌙 Coming Soon: Midnight Adventures\n\n2025 • Romance / Mystery • TBD\n\nSome of the best journeys have no destination. Late night drives with windows down, playlist on shuffle, and the road illuminated only by headlights and moonlight. The world feels different after dark—quieter, more mysterious, more ours.\n\nWe\'ll drive to hilltops to stargaze, count satellites crossing the sky, and have conversations that only happen when it\'s late and guards are down. Deep talks about dreams and fears and futures, punctuated by comfortable silences and shared wonder at the universe above.\n\nTime becomes irrelevant when you\'re traveling at night with the right person. Sunrise becomes not an ending, but another beautiful beginning.\n\nStarring: Starlit roads, deep conversations, and the magic that only exists after midnight\n\nWatch if you like: Midnight adventures, philosophical romance, and journeys without destinations',
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
    fullDescription: '🏊 Coming Soon: Making Waves\n\n2025 • Romance / Comedy • TBD\n\nPool days and ocean swims where we trade sophistication for pure, joyful fun. Cannonball contests, underwater tea parties (yes, really), and the kind of playful splashing that makes everyone else at the pool smile at young love.\n\nWe\'ll float in the water talking about nothing and everything, race each other across the pool (I\'ll let you win sometimes), and discover that swimming together is less about exercise and more about finding new ways to enjoy each other\'s company.\n\nSun-kissed skin, chlorine-scented hair, and that perfect exhaustion that comes from a day well spent in the water. This is summer in its purest form.\n\nStarring: Playful competition, sun-soaked afternoons, and the simple joy of making a splash\n\nWatch if you like: Summer romance, playful love, and relationships that know how to have fun',
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

  // Image container wrapper
  const imageContainer = document.createElement('div');
  imageContainer.className = 'poster-image-container';

  const img = document.createElement('img');
  img.src = photo.src;
  img.alt = photo.title;
  img.loading = 'lazy';

  // Add NEW badge if first few photos
  if (photo.id <= 3) {
    const badge = document.createElement('div');
    badge.className = 'poster-badge';
    badge.textContent = 'NEW';
    imageContainer.appendChild(badge);
  }

  imageContainer.appendChild(img);

  // Old overlay (for non-hover state)
  const overlay = document.createElement('div');
  overlay.className = 'poster-overlay';

  const title = document.createElement('div');
  title.className = 'poster-title';
  title.textContent = photo.title;

  const metadata = document.createElement('div');
  metadata.className = 'poster-metadata';

  const match = document.createElement('span');
  match.className = 'poster-match';
  match.textContent = photo.rating || '98% Match';

  const year = document.createElement('span');
  year.className = 'poster-year';
  year.textContent = '2025';

  const duration = document.createElement('span');
  duration.className = 'poster-duration';
  duration.textContent = photo.id <= 8 ? '1 Memory' : photo.id <= 13 ? '1 Place' : '1 Adventure';

  metadata.appendChild(match);
  metadata.appendChild(year);
  metadata.appendChild(duration);

  const tags = document.createElement('div');
  tags.className = 'poster-tags';
  const tagText = photo.tags ? photo.tags.split('•')[0].trim() : 'Romantic';
  tags.textContent = tagText;

  overlay.appendChild(title);
  overlay.appendChild(metadata);
  overlay.appendChild(tags);

  imageContainer.appendChild(overlay);

  // NEW: Netflix hover card
  const hoverCard = document.createElement('div');
  hoverCard.className = 'poster-hover-card';

  // Action buttons row
  const actions = document.createElement('div');
  actions.className = 'poster-actions';

  // Play button (white)
  const playBtn = document.createElement('button');
  playBtn.className = 'poster-action-btn play-btn';
  playBtn.innerHTML = '▶';
  playBtn.title = 'Play';
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openPhotoModal(photo);
  });

  // Add to list button
  const addBtn = document.createElement('button');
  addBtn.className = 'poster-action-btn';
  addBtn.innerHTML = '+';
  addBtn.title = 'Add to My List';
  addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Like button
  const likeBtn = document.createElement('button');
  likeBtn.className = 'poster-action-btn';
  likeBtn.innerHTML = '👍';
  likeBtn.title = 'Like';
  likeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // More info dropdown button
  const dropdownBtn = document.createElement('button');
  dropdownBtn.className = 'poster-action-btn';
  dropdownBtn.innerHTML = '▼';
  dropdownBtn.title = 'More Info';
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openPhotoModal(photo);
  });

  actions.appendChild(playBtn);
  actions.appendChild(addBtn);
  actions.appendChild(likeBtn);
  actions.appendChild(dropdownBtn);

  // Hover metadata (maturity, duration, quality)
  const hoverMetadata = document.createElement('div');
  hoverMetadata.className = 'poster-hover-metadata';

  const maturityBadge = document.createElement('span');
  maturityBadge.className = 'poster-maturity';
  maturityBadge.textContent = '18+';

  const durationSpan = document.createElement('span');
  durationSpan.textContent = photo.id <= 8 ? '1 Memory' : photo.id <= 13 ? '1 Place' : '1 Adventure';

  const qualityBadge = document.createElement('span');
  qualityBadge.className = 'poster-quality';
  qualityBadge.textContent = 'HD';

  hoverMetadata.appendChild(maturityBadge);
  hoverMetadata.appendChild(durationSpan);
  hoverMetadata.appendChild(qualityBadge);

  // Hover genre tags
  const hoverTags = document.createElement('div');
  hoverTags.className = 'poster-hover-tags';
  hoverTags.textContent = photo.tags || 'Romantic • Memorable • Beautiful';

  hoverCard.appendChild(actions);
  hoverCard.appendChild(hoverMetadata);
  hoverCard.appendChild(hoverTags);

  imageContainer.appendChild(hoverCard);

  // Assemble poster
  poster.appendChild(imageContainer);

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

// Christmas Music Control
document.addEventListener('DOMContentLoaded', () => {
  const musicToggle = document.getElementById('music-toggle');
  const christmasMusic = document.getElementById('christmas-music');
  const playingIcon = document.querySelector('.music-playing');
  const mutedIcon = document.querySelector('.music-muted');
  let isPlaying = false;

  if (musicToggle && christmasMusic) {
    // Set initial volume
    christmasMusic.volume = 0.3;

    // Handle audio loading errors
    christmasMusic.addEventListener('error', (e) => {
      console.log('Christmas music file not found. Please add christmas-music.mp3 to the audio/ folder or root directory.');
      musicToggle.style.opacity = '0.5';
      musicToggle.style.cursor = 'not-allowed';
    });

    // Handle successful load
    christmasMusic.addEventListener('loadeddata', () => {
      console.log('Christmas music loaded successfully!');
      musicToggle.style.opacity = '1';
      musicToggle.style.cursor = 'pointer';
    });

    musicToggle.addEventListener('click', () => {
      if (isPlaying) {
        christmasMusic.pause();
        musicToggle.classList.remove('playing');
        playingIcon.style.display = 'none';
        mutedIcon.style.display = 'block';
      } else {
        christmasMusic.play().catch(err => {
          console.log('Could not play music. Error:', err.message);
          // Show visual feedback
          musicToggle.style.opacity = '0.5';
          setTimeout(() => {
            musicToggle.style.opacity = '1';
          }, 1000);
        });
        musicToggle.classList.add('playing');
        playingIcon.style.display = 'block';
        mutedIcon.style.display = 'none';
      }
      isPlaying = !isPlaying;
    });

    // Try to autoplay when browse screen is shown
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('active') &&
            mutation.target.id === 'browse-screen' &&
            !isPlaying) {
          // Small delay to help with autoplay
          setTimeout(() => {
            musicToggle.click();
          }, 500);
          observer.disconnect();
        }
      });
    });

    const browseScreen = document.getElementById('browse-screen');
    if (browseScreen) {
      observer.observe(browseScreen, { attributes: true, attributeFilter: ['class'] });
    }
  }
});
