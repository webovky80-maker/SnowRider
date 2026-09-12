export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Gameplay' | 'Technical' | 'Unblocked';
}

export const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Snow Rider 3D Unblocked?',
    answer:
      'Snow Rider 3D Unblocked is a free, web-based 3D winter sports and endless downhill toboggan runner. Players steer various sleds down an infinite, procedurally generated snow-covered mountain, dodging pine trees, jumping across bottomless ice ravines, and collecting holiday gifts to unlock high-tier sledges. Because it runs directly in HTML5 WebGL with zero plugins or installation, it can be played unblocked at school, college, or workplace networks.',
  },
  {
    category: 'Unblocked',
    question: 'Why is Snow Rider 3D so popular on school Chromebooks?',
    answer:
      'Snow Rider 3D delivers instant, lag-free 60 FPS gameplay without requiring Flash, local admin rights, or external downloads. School filters like Securly or GoGuardian often allow GitHub Pages and WebGL sandboxes, making this unblocked version a favorite for quick gaming breaks during study halls and lunch hours.',
  },
  {
    category: 'Gameplay',
    question: 'How do you unlock all the sleds in Snow Rider 3D?',
    answer:
      'Sleds are unlocked using the gift boxes you collect during your downhill runs. The starting Wooden Sled is unlocked immediately. Additional vehicles range from the Plastic Runner (50 gifts), Arctic Snow Tube (100 gifts), Alpine Bob Pro (160 gifts), Santa\'s Magic Sleigh (220 gifts), up to the supreme Carbon Stealth Glider (300 gifts). Gifts accumulate across all your runs.',
  },
  {
    category: 'Gameplay',
    question: 'What are the keyboard controls for Snow Rider 3D?',
    answer:
      'Use the Left Arrow or A key to steer left, and the Right Arrow or D key to steer right. Press the Up Arrow, W key, or Spacebar to jump over chasms, rocks, and wooden fences. On mobile phones and touch tablets, you can steer by tapping the left/right sides of the display or using on-screen virtual controls.',
  },
  {
    category: 'Technical',
    question: 'Do I need to download or install anything to play?',
    answer:
      'No. Snow Rider 3D runs entirely inside modern web browsers using HTML5 and WebGL graphics. It is fully compatible with Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari, and Opera across Windows, macOS, Linux, iOS, Android, and ChromeOS.',
  },
  {
    category: 'Gameplay',
    question: 'What is the highest possible score in Snow Rider 3D?',
    answer:
      'Because the mountain slopes are procedurally generated and endless, there is no mathematical score cap. Veteran players often reach distances exceeding 3,000 to 5,000 meters. The global record holder surpassed 8,500 meters by mastering centerline balance and avoiding unnecessary jumps.',
  },
  {
    category: 'Gameplay',
    question: 'Which sled has the best stats in Snow Rider 3D?',
    answer:
      'The Carbon Stealth Glider (costing 300 gifts) features the highest top speed (98/100) and sharpest steering response (95/100). However, many top speedrunners prefer Santa\'s Magic Sleigh for its forgiving shock absorption on steep cliff drops.',
  },
  {
    category: 'Technical',
    question: 'Is Snow Rider 3D Unblocked safe to play?',
    answer:
      'Yes, 100% safe. The game runs client-side inside a sandboxed iframe without collecting personal credentials, requesting invasive browser permissions, or executing binary files on your machine.',
  },
  {
    category: 'Gameplay',
    question: 'How can I survive when giant snowballs start rolling downhill?',
    answer:
      'Snowballs follow a diagonal trajectory based on slope incline. The best strategy is to look ahead by 2–3 seconds, identify the lane they are rolling toward, and gently slide into the opposite lane without making sharp panic turns.',
  },
  {
    category: 'Technical',
    question: 'Can I play Snow Rider 3D in Fullscreen mode?',
    answer:
      'Yes! Our player includes a dedicated Fullscreen button in the game action toolbar, as well as a Theater Mode button that enlarges the viewport without hiding your navigation options.',
  },
  {
    category: 'General',
    question: 'Who developed Snow Rider 3D?',
    answer:
      'Snow Rider 3D was created by TapNation, a prominent digital games publisher celebrated for intuitive physics mechanics, high replayability, and engaging 3D mobile and web experiences.',
  },
  {
    category: 'Technical',
    question: 'Will my unlocked sleds and gift counts save if I refresh the page?',
    answer:
      'Yes. The game saves your accumulated gift currency, unlocked vehicles, and high scores locally in your browser cache and localStorage, so your achievements are preserved between gaming sessions.',
  },
];
