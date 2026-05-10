# 💕 Song Dedication QR Journey

A romantic, interactive website for sharing 10 handpicked songs with personalized messages. Each QR code directs to a unique webpage with lyrics, audio player, and heartfelt messages.

## ✨ Features

- 🎵 **10 Romantic Songs** - Beautiful song collection with curated lyrics
- 💬 **Personal Messages** - Heartfelt, customizable messages on each page
- 🎧 **Audio Player** - HTML5 audio player with custom styling
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Romantic Aesthetic** - Dark theme with pink/purple gradients and glassmorphism
- ✨ **Smooth Animations** - Fade-in effects, floating hearts, hover animations
- 🔄 **Easy Navigation** - Previous/Next buttons, progress indicators
- 📊 **Progress Tracking** - Visual progress bar showing current paper (1-10)
- 🎯 **Typewriter Effect** - JavaScript-powered text animations
- 🚀 **GitHub Pages Ready** - Deploy for free on GitHub Pages

## 📁 Project Structure

```
song-dedication-qr-journey/
├── index.html              # Landing page with paper grid
├── page1.html through page10.html  # Individual song pages
├── css/
│   └── style.css           # All styling and animations
├── js/
│   └── script.js           # JavaScript for animations and interactivity
├── songs/
│   ├── song1.mp3 through song10.mp3  # Your audio files
├── images/
│   └── (optional images)
└── README.md               # This file
```

## 🎯 How to Use

### 1. **Add Your Songs**
Place your MP3 files in the `songs/` folder and name them `song1.mp3` through `song10.mp3`.

### 2. **Customize Content**
Edit each `page1.html` through `page10.html`:
- Change the song title in `<h2>` tag
- Update lyrics in the `.lyrics` section
- Modify personal message in `.personal-message` div

Example:
```html
<h2>Your Song Title - Artist Name</h2>
<p class="subtitle">Your custom subtitle</p>

<div class="lyrics">
  <p>"Your lyrics here"</p>
  <p>"Next line of lyrics"</p>
</div>

<div class="personal-message">
  💌 <strong>Your Personal Message:</strong><br><br>
  Your heartfelt message goes here...
</div>
```

### 3. **Generate QR Codes**
For each page, generate a QR code pointing to:
- `https://yourusername.github.io/repo-name/page1.html`
- `https://yourusername.github.io/repo-name/page2.html`
- etc.

Use a free QR code generator like:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Server](https://qr.page)

### 4. **Print & Distribute**
Print the QR codes on 10 sheets of paper and give them to your special someone!

## 🚀 Deployment on GitHub Pages

### Step 1: Create a GitHub Repository
```bash
1. Go to github.com and create a new repository
2. Name it (e.g., "song-dedication-qr-journey")
3. Don't initialize with README (we'll push ours)
```

### Step 2: Initialize Git Locally
```bash
git init
git add .
git commit -m "Initial commit: Song Dedication QR Journey"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
```
1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Select "main" branch as source
4. Save
5. Your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

### Step 4: Generate QR Codes
Update the URLs in your QR codes to point to:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/page1.html`
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/page2.html`
- And so on...

## 🎨 Customization

### Change Colors
Edit `css/style.css` and modify:
```css
--primary: #ff69b4;      /* Pink */
--secondary: #da70d6;    /* Purple */
--dark: #0a0a0a;         /* Dark background */
```

### Change Font
Update the font-family in `style.css`:
```css
font-family: 'Your Font Here', sans-serif;
```

### Adjust Animations
Modify animation speeds in `style.css`:
```css
@keyframes fadeIn {
  animation-duration: 1s;  /* Change this */
}
```

## 💡 Tips & Tricks

1. **Mobile Testing** - Open the pages on your phone to test responsiveness
2. **Audio Optimization** - Use 128kbps MP3 for best file size/quality balance
3. **Custom Messages** - Make each message personal and specific to your relationship
4. **Song Selection** - Choose songs that have meaning in your relationship
5. **Print Quality** - Use high-quality paper for a premium feel

## 🔧 Technical Details

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

### File Size Recommendations
- Each MP3: 2-5 MB (for reasonable download times)
- Total site: Under 50 MB (ideal for GitHub Pages)

### Accessibility
- Semantic HTML
- Color contrast meets WCAG standards
- Keyboard navigation supported (Arrow keys)
- Audio controls are native and accessible

## 📝 Keyboard Shortcuts

- **→ Right Arrow** - Go to next paper
- **← Left Arrow** - Go to previous paper

## 🐛 Troubleshooting

### Audio won't play
- Check file format is MP3
- Verify file path is correct: `songs/songX.mp3`
- Some servers require CORS headers (GitHub Pages supports this)

### Pages not loading
- Check all links use relative paths (not absolute)
- Verify all files are in the repository
- Clear browser cache and reload

### QR codes not working
- Test URL works in browser first
- Ensure correct GitHub Pages URL in QR code
- Try different QR code generator if issues persist

## 🎁 Creative Ideas

- Add background music to the landing page
- Create a "memory" section with photos on each page
- Add a countdown timer for special dates
- Include video messages for a personal touch
- Create a guest book or message section

## 📄 License

Free to use and modify for personal use. Perfect for special occasions like:
- Valentine's Day
- Anniversaries
- Proposals
- Weddings
- Just because surprises!

## 💕 Final Note

This project is all about expressing love through music and words. Customize every detail to make it uniquely yours. Your special someone is in for an unforgettable surprise!

---

**Made with ❤️ for your special someone**
