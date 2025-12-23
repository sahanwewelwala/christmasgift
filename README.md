# Netflix-Style Photo Gallery 🎬❤️

A beautiful Netflix-style website created as a special gift! Browse through your cherished memories with a sleek, mobile-friendly interface.

## 🎯 Features

- **Profile Selection**: Choose between Sahan and Chamudi profiles
- **PIN Protection**: Secure 4-digit PIN entry for each profile
- **Netflix UI**: Authentic Netflix design with smooth animations
- **Photo Gallery**: Browse photos organized in rows (just like Netflix movies!)
- **Mobile Responsive**: Works perfectly on phones, tablets, and desktops
- **Photo Modal**: Click any photo to view it in full size

## 🔐 Login Details

### Profiles and PINs:
- **Sahan**: PIN is `1234`
- **Chamudi**: PIN is `4321`

## 📸 How to Add Your Own Photos

### Option 1: Add Photos to the img folder (Recommended)

1. **Add your photos** to the `img/` folder
2. **Name them clearly**, for example:
   - `memory1.jpg`
   - `vacation2.png`
   - `birthday3.jpg`

3. **Edit the photos array** in `js/app.js` (around line 5):

```javascript
const photos = [
  {
    id: 1,
    src: 'img/memory1.jpg',  // Change this to your photo path
    title: 'Our First Date',  // Change this title
    description: 'The day we fell in love', // Change this description
    row: 1  // Which row to display (1-4)
  },
  {
    id: 2,
    src: 'img/vacation2.jpg',
    title: 'Beach Vacation',
    description: 'Best trip ever!',
    row: 1
  },
  // Add more photos here...
];
```

### Option 2: Use Online URLs

You can also use URLs from image hosting services:

```javascript
{
  id: 1,
  src: 'https://your-image-url.com/photo.jpg',
  title: 'Photo Title',
  description: 'Photo description',
  row: 1
}
```

### Row Organization

- **row: 1** - "Our Favorite Moments"
- **row: 2** - "Adventures Together"
- **row: 3** - "Special Occasions"
- **row: 4** - "Just Us"

You can change these row titles in `index.html` (lines 114, 121, 128, 135).

## 🎨 Customization

### Change Profile Avatars

1. Add avatar images to the `img/` folder:
   - `sahan-avatar.png`
   - `chamudi-avatar.png`

2. The images are already configured in the HTML! Just add the files.

### Change PINs

Edit the PINs in `js/app.js` (around line 51):

```javascript
const profiles = {
  sahan: {
    name: 'Sahan',
    pin: '1234',  // Change this PIN
    // ...
  },
  chamudi: {
    name: 'Chamudi',
    pin: '4321',  // Change this PIN
    // ...
  }
};
```

### Change Hero Background

Edit the hero section background in `css/style.css` (line 292):

```css
background: linear-gradient(to bottom, rgba(0,0,0,0.3), var(--netflix-black)),
            url('YOUR_IMAGE_URL_HERE') center/cover;
```

## 🚀 How to Use

1. **Open** `index.html` in your web browser
2. **Select** a profile (Sahan or Chamudi)
3. **Enter** the 4-digit PIN
4. **Browse** your beautiful memories!
5. **Click** any photo to view it in full size

## 📱 Mobile Friendly

This website is fully responsive and works great on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers

## 🎁 Special Notes

- The default photos are placeholder images from Unsplash
- Replace them with your own special photos to make it truly personal!
- You can add as many photos as you want to each row
- The website will automatically create a scrollable gallery if there are many photos

## 💡 Tips

- Use high-quality photos for the best experience
- Landscape photos (wider than tall) work best for the gallery
- Keep file sizes reasonable (under 2MB) for faster loading
- Give each photo a meaningful title and description

---

Made with ❤️ for Chamudi

Enjoy your Netflix-style photo gallery! 🎬✨
