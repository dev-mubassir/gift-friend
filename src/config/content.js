/**
 * Content Configuration for Tamanna's Friendship & Sports Encouragement Website
 * 
 * Clean, respectful, supportive friendship tone.
 * Celebrates Tamanna's strength, dedication in weightlifting/sports,
 * and upcoming tournament encouragement.
 */

export const siteConfig = {
  // Friend's information
  recipient: {
    name: "Tamanna",
    nickname: "Champ",
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
    textDark: "#2F3E33",
    textMuted: "#637567",
  },

  // Screen 1: Welcome Screen
  welcome: {
    heading: "A little surprise for you, Tamanna! 🌷",
    subtitle: "Because even the strongest people deserve a little encouragement sometimes.",
    audioHint: "Before we begin, turn your volume up and get comfortable. A little surprise is waiting for you!",
    buttonText: "Let's begin! ♡",
  },

  // Screen 2: Password Screen
  passwordScreen: {
    title: "Secret Key",
    subtitle: "One little secret stands between you and your surprise.",
    hint: "Hint: Try 5656 ♡",
    successMessage: "Welcome in! Let's get you inspired... 🌸",
    errorMessage: "Oops, that didn't match. Try again!",
    resetText: "Clear",
  },

  // Screen 3 & 4: Entrance & Main Greeting Hero
  greeting: {
    badge: "A Note From Your Friend",
    heading: "Hey Tamanna, keep blooming! 🌼",
    message: "Here's a tiny reminder from your friend: you're stronger than you sometimes realise. Every little effort, every tough training session and every challenge you face is helping you become a better version of yourself. Keep believing in yourself!",
    scrollPrompt: "Explore your motivation & memories below",
  },

  // Screen 5: Sports Motivation Section (Section 7)
  sportsMotivation: {
    badge: "Tournament Motivation",
    heading: "To the Strong Girl, Tamanna 💪",
    subtitle: "A reminder of your dedication, grit, and power before the big day.",
    cards: [
      {
        id: 1,
        icon: "Dumbbell",
        tag: "True Strength",
        text: "Strong isn't just about how much weight you can lift. It's also about showing up when you're tired, trying again after a difficult day and having the courage to keep going.",
      },
      {
        id: 2,
        icon: "Flame",
        tag: "Dedication",
        text: "Your training, dedication and hard work matter. Every repetition, every practice session and every small improvement is a step forward.",
      },
      {
        id: 3,
        icon: "Target",
        tag: "Preparation",
        text: "Your tournament is coming soon. Trust your preparation, stay focused and give yourself the chance to shine. Don't let nervousness make you forget how much work you've already put in.",
      },
      {
        id: 4,
        icon: "Trophy",
        tag: "Courage",
        text: "Win or lose, your effort and courage are worth respecting. Go out there, enjoy your game and give it your best!",
      },
    ],
    highlight: "Lift strong. Play strong. Stay confident. You've got this, Tamanna!",
  },

  // Screen 6: Photo Memories (Real Photographs of Tamanna)
  photoGallery: {
    badge: "Cherished Memories",
    heading: "A Few Little Moments 📸",
    subtitle: "A little collection celebrating your cheerfulness and strength.",
  },

  photos: [
    {
      id: 1,
      src: "/images/photo-1.jpg",
      caption: "Keep being you!",
      date: "Pure Cheer",
      rotation: -2.2,
      placeholderTitle: "Tamanna's Smile ♡",
      placeholderHint: "public/images/photo-1.jpg",
    },
    {
      id: 2,
      src: "/images/photo-2.jpg",
      caption: "A little collection of smiles.",
      date: "Sunshine Spirit",
      rotation: 2.0,
      placeholderTitle: "Sunshine Spirit ♡",
      placeholderHint: "public/images/photo-2.jpg",
    },
    {
      id: 3,
      src: "/images/photo-3.jpg",
      caption: "Strong, cheerful and unstoppable.",
      date: "Unstoppable Energy",
      rotation: -1.8,
      placeholderTitle: "Unstoppable Energy ♡",
      placeholderHint: "public/images/photo-3.jpg",
    },
    {
      id: 4,
      src: "/images/photo-4.jpg",
      caption: "Another reason to keep smiling.",
      date: "Bright Moments",
      rotation: 2.5,
      placeholderTitle: "Bright Moments ♡",
      placeholderHint: "public/images/photo-4.jpg",
    },
  ],

  // Screen 7: Personal Friendship Letter
  letter: {
    badge: "From Your Friend",
    date: "Tournament Season, 2026",
    heading: "A Little Note for You, Tamanna",
    salutation: "Hey Tamanna! 🌷",
    paragraphs: [
      "I just wanted to make something a little different for you, especially with your tournament coming up.",
      "First of all, never underestimate yourself. I know sports and training aren't always easy. There are tiring days, difficult sessions, moments when things don't go as planned and times when progress feels slow. But that's exactly where your strength shows.",
      "Every bit of effort you put into your training counts. Every repetition, every practice session and every time you choose not to give up is making you stronger.",
      "Remember, you don't have to be perfect at everything. Just stay consistent, trust your hard work and keep learning. When the tournament starts, don't let pressure take away the fun of playing. Stay calm, believe in your preparation and give it everything you've got.",
      "And one more thing: your worth isn't decided by a medal, a score or a result. Win or lose, be proud of yourself for having the courage to compete and the determination to keep improving.",
      "Keep lifting, keep playing and keep pushing your limits. I genuinely hope you achieve everything you're working towards.",
      "Always stay strong, keep smiling and never stop believing in yourself.",
    ],
    closing: "Your friend,",
    signature: "Someone cheering for you! 💚",
  },

  // Screen 8: Final Surprise
  finalSurprise: {
    heading: "Go Shine, Tamanna! 🌸",
    message: "Your next chapter is waiting. Walk into it with confidence, give your best and make yourself proud. Sending you lots of positive energy for your upcoming tournament!",
    finalLine: "Keep growing. Keep getting stronger. Keep blooming.",
    interactiveHint: "Tap anywhere on this screen to plant a blooming flower 🌸",
    replayButtonText: "Experience from the beginning ✨",
  },

  // Music configuration (Alfaz song starting at 1:20 = 80s)
  music: {
    title: "Unki Tareef",
    artist: "Alfaz",
    src: "/audio/song.mp3",
    startTime: 80, // Starts at exactly 1 minute 20 seconds
    autoPlayOnUnlock: true,
    loop: true,
  },
};
