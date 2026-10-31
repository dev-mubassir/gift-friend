/**
 * Content Configuration for Friendship Greeting Website
 * 
 * All personal content, messages, images, music, and theme settings
 * can be edited here without modifying any component code.
 */

export const siteConfig = {
  // Friend's information
  recipient: {
    name: "Ayesha", // Change to your friend's name
    nickname: "Flower", // Optional cute nickname
  },

  // Playful 4-digit password to unlock the garden
  secretPassword: "5656",

  // Theme color palette (Botanical / Warm Cream Aesthetic)
  theme: {
    warmCream: "#F7F3E8",
    softIvory: "#FFFDF5",
    sageGreen: "#A8B99A",
    lightGreen: "#DCE8D5",
    darkBotanical: "#526B53",
    softPeach: "#EBC9B5",
    mutedPink: "#E8C7CC",
    warmGold: "#D4A373",
    textDark: "#334139",
    textMuted: "#6B7C70",
  },

  // Screen 1: Welcome Screen
  welcome: {
    tagline: "A little something for you ♡",
    title: "A Secret Garden of Appreciation",
    message: "A tiny corner of the internet created with care, just for someone truly special.",
    audioHint: "Put on your earphones or turn up your volume for the best experience 🎧✨",
    buttonText: "I'm ready ✨",
  },

  // Screen 2: Password Screen
  passwordScreen: {
    title: "Secret Key",
    subtitle: "Enter the 4-digit code to bloom the garden",
    hint: "Hint: Try 5656 ♡",
    successMessage: "Welcome in! Blooming your garden... 🌸",
    errorMessage: "Oops, that didn't match. Try again!",
    resetText: "Clear",
  },

  // Screen 3 & 4: Entrance & Main Greeting Hero
  greeting: {
    badge: "For a Wonderful Friend",
    heading: "Some people make ordinary days a little more beautiful ♡",
    subtitle: "You bring warmth, laughter, and calm wherever you go. Having you as a friend is a gift that makes life so much sweeter.",
    scrollPrompt: "Explore your memories & notes below",
  },

  // Screen 5: Photo Memories (Polaroid Gallery)
  // Replace these with actual pictures in public/images/ (e.g. photo-1.jpg)
  // If an image is not found, an elegant botanical art placeholder is displayed automatically.
  photos: [
    {
      id: 1,
      src: "/images/photo-1.jpg",
      caption: "That day we laughed until our stomachs hurt ✨",
      date: "Cherished Moments",
      rotation: -2.5,
      placeholderTitle: "A Beautiful Memory ♡",
      placeholderHint: "Replace with: public/images/photo-1.jpg",
    },
    {
      id: 2,
      src: "/images/photo-2.jpg",
      caption: "Your infectious smile that brightens any room 🌸",
      date: "Sunshine & Grace",
      rotation: 2.2,
      placeholderTitle: "Your Brightest Smile ♡",
      placeholderHint: "Replace with: public/images/photo-2.jpg",
    },
    {
      id: 3,
      src: "/images/photo-3.jpg",
      caption: "Little coffee chats & endless conversations ☕",
      date: "Favorite Conversations",
      rotation: -1.8,
      placeholderTitle: "Unfiltered Chats ♡",
      placeholderHint: "Replace with: public/images/photo-3.jpg",
    },
    {
      id: 4,
      src: "/images/photo-4.jpg",
      caption: "Always grateful for your kindness and heart 🌿",
      date: "Pure Heart",
      rotation: 2.8,
      placeholderTitle: "A Heart of Gold ♡",
      placeholderHint: "Replace with: public/images/photo-4.jpg",
    },
  ],

  // Screen 6: A Little Appreciation
  appreciation: {
    badge: "Words From The Heart",
    title: "Things I Sincerely Appreciate About You",
    subtitle: "Just a gentle reminder of the wonderful qualities that make you uniquely you.",
    cards: [
      {
        id: 1,
        icon: "Sun",
        tag: "Radiance",
        quote: "Your smile makes everything brighter.",
        detail: "Even on chaotic or gloomy days, your energy brings an instant sense of warmth and cheer.",
      },
      {
        id: 2,
        icon: "Sparkles",
        tag: "Uniqueness",
        quote: "Never forget how special you are.",
        detail: "In a world that is constantly hurrying, your genuine authenticity and sweet soul stand out effortlessly.",
      },
      {
        id: 3,
        icon: "Heart",
        tag: "Grace",
        quote: "Stay the beautiful person you are.",
        detail: "The way you treat people with patience and understanding inspires everyone around you.",
      },
      {
        id: 4,
        icon: "Flower2",
        tag: "Kindness",
        quote: "The world needs more people with your kindness.",
        detail: "Your gentle thoughtfulness never goes unnoticed, even when you think no one is watching.",
      },
    ],
  },

  // Screen 7: Personal Friendship Letter
  letter: {
    badge: "A Note For You",
    date: "A quiet afternoon, 2026",
    salutation: "Dear Ayesha,",
    paragraphs: [
      "I wanted to take a quiet moment to create something handmade for you—a little digital sanctuary full of blossoms, gentle music, and gratitude.",
      "True friends who listen without judgment, celebrate your little wins, and bring peace into your life are rare treasures. You have been that friend in so many ways.",
      "Thank you for being someone I can always count on, for the shared laughs, and for simply being yourself. I hope this little gesture reminds you today of just how valued and appreciated you are.",
    ],
    closing: "Always rooting for you,",
    signature: "Your Friend ♡",
  },

  // Screen 8: Final Surprise
  finalSurprise: {
    heading: "Keep smiling, keep blooming 🌷",
    subheading: "May your days ahead be filled with as much happiness as you bring to others.",
    interactiveHint: "Tap anywhere on this screen to plant a blooming flower 🌸",
    replayButtonText: "Experience from the beginning ✨",
  },

  // Screen 4 Music configuration (Alfaz song)
  music: {
    title: "Unki Tareef",
    artist: "Alfaz",
    src: "/audio/song.mp3",
    autoPlayOnUnlock: true, // Audio starts after unlocking with password
    loop: true,
  },
};
