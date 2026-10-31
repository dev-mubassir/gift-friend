# 🌸 A Little Secret Garden — Friendship Gift Website

An elegant, mobile-first interactive digital greeting website created as a personal gift for a cherished female friend. Designed with a dreamy botanical aesthetic featuring warm cream, soft ivory, sage green, and pastel floral tones.

---

## ✨ Features & Experience Flow

1. **Screen 1: Welcoming Scene**
   - Delicate animated botanical wreath and drifting pastel petals.
   - Handwritten heading: *"A little something for you ♡"*.
   - Gentle reminder to turn up audio or put on earphones.
   - Beautiful *"I'm ready ✨"* entrance button (audio does not autoplay until user interaction).

2. **Screen 2: Playful Secret Keypad**
   - 4-digit code entry with blooming flower bud indicators.
   - Default passcode: **`5656`** (easily customizable in `content.js`).
   - Custom touch-friendly numeric keypad with Backspace and Clear controls.
   - Gentle error shake with friendly hint on incorrect entry.
   - Blossoming flower celebration animation on success.

3. **Screen 3: Magical Entrance & Celebration**
   - Starts persistent background audio of the selected Alfaz song upon unlock.
   - High-performance Canvas particle flower rain with cherry blossoms, daisies, peach petals, leaves, and golden sparkles.
   - Organic, battery-conscious animation that pauses automatically when the tab is backgrounded.

4. **Screen 4: Main Greeting Hero**
   - Thoughtful headline: *"Some people make ordinary days a little more beautiful ♡"*.
   - Original friendship appreciation notes and delicate botanical divider.
   - Smooth navigation cue to explore further.

5. **Screen 5: Polaroid Photo Memories**
   - 4 polaroid-style photos with realistic paper drop shadows, washi tape corners, and slight organic tilts.
   - Cute handwritten captions.
   - Fullscreen Lightbox with swipe gesture navigation on mobile, keyboard arrow support, and close button.
   - Graceful fallback: If custom photos are not yet uploaded, artistic botanical cards explain where to place them without breaking the layout.

6. **Screen 6: Words of Appreciation**
   - Dedicated section celebrating her best qualities: Radiance, Uniqueness, Grace, and Kindness.
   - Sweet, respectful, uplifting friendship messages (not romantic or possessive).

7. **Screen 7: Vintage Friendship Letter**
   - Digital letter set on cream paper with deckled texture and pressed floral corner accents.
   - Interactive typewriter-style text reveal with *"Read Instantly"* and *"Replay Reveal"* controls.
   - Handwritten closing signature.

8. **Screen 8: Final Surprise & Interactive Garden**
   - *"Keep smiling, keep blooming 🌷"*.
   - Interactive touch feature: **Tap or click anywhere on screen to plant blooming flowers!**
   - Replay button to experience the whole journey again.

9. **Persistent Music Player**
   - Floating frosted-glass capsule with Alfaz's track.
   - Play / Pause / Mute toggles.
   - Subtle animated equalizer bars and track info tooltip.
   - Gracefully handles browser autoplay restrictions and errors.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Icons**: Lucide React
- **Animations**: Custom hardware-accelerated CSS + Canvas Particle System
- **Fonts**: Google Fonts (*Cormorant Garamond*, *Caveat*, *Plus Jakarta Sans*)
- **Styling**: Modern vanilla CSS with CSS variables, safe-area insets, and zero heavy UI libraries

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### 3. Build for production
```bash
npm run build
```

The compiled output will be generated inside the `dist/` directory, ready to deploy to Netlify, Vercel, Cloudflare Pages, or GitHub Pages.

---

## 🎨 Customizing Content in 5 Minutes

All personal text, names, password, photos, letter, and audio settings are centralized in **one single file**:

📁 **`src/config/content.js`**

### Change Friend's Name:
```javascript
recipient: {
  name: "HerName",
  nickname: "Flower",
}
```

### Change the Passcode:
```javascript
secretPassword: "5656", // Any 4-digit code
```

### Add Her Photographs:
Place your images inside `public/images/`:
- `public/images/photo-1.jpg`
- `public/images/photo-2.jpg`
- `public/images/photo-3.jpg`
- `public/images/photo-4.jpg`

Update the captions in `src/config/content.js`:
```javascript
photos: [
  {
    id: 1,
    src: "/images/photo-1.jpg",
    caption: "That day we laughed until our stomachs hurt ✨",
    date: "Cherished Moments",
  },
  // ...
]
```

### Change the Song:
Place any MP3 audio inside `public/audio/song.mp3` or set a remote URL:
```javascript
music: {
  title: "Song Title",
  artist: "Artist Name",
  src: "/audio/song.mp3",
}
```

### Edit the Friendship Letter:
Edit the `paragraphs` array in `src/config/content.js`:
```javascript
letter: {
  salutation: "Dear [Name],",
  paragraphs: [
    "Your custom note here...",
  ],
  signature: "Your Friend ♡",
}
```

---

## 📱 Mobile & Accessibility Optimizations

- **Safe Areas**: Built-in support for notched phones and Android home indicators via `env(safe-area-inset-bottom)`.
- **Touch Targets**: Minimum 44px–48px buttons with zero 300ms tap delay.
- **Battery & Performance**: Canvas particle engine pauses immediately when the browser tab is hidden or minimized (`visibilitychange`).
- **Reduced Motion**: Fully respects system-level `prefers-reduced-motion` settings.

---

Made with pure warmth and care 🌸
