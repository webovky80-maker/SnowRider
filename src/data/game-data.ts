export interface SledItem {
  id: string;
  name: string;
  giftsRequired: number;
  speed: number;
  steering: number;
  stability: number;
  description: string;
  badge?: string;
  iconColor: string;
}

export interface ObstacleItem {
  name: string;
  danger: 'Low' | 'Medium' | 'High' | 'Extreme';
  description: string;
  avoidanceTip: string;
  icon: string;
}


export const GAME_INFO = {
  title: 'Snow Rider 3D',
  subtitle: 'Unblocked Winter Sports Adventure',
  developer: 'TapNation',
  embedUrl: 'https://snowrider-unblocked.github.io/game',
  category: 'Winter Sports / 3D Endless Runner',
  rating: 4.85,
  ratingCount: '5,248,190',
  likes: '5.2M',
  dislikes: '94K',
  plays: '48.6M',
  releaseYear: '2024',
  version: '1.9.2',
  description:
    'Experience high-octane 3D downhill sledding in Snow Rider 3D Unblocked! Dodge massive pine trees, leap across bottomless ice chasms, collect wrapped holiday gifts, and unlock lightning-fast sleds in the most thrilling winter sports simulator on the web.',
};

export const SLEDS: SledItem[] = [
  {
    id: 'classic',
    name: 'Classic Wooden Sled',
    giftsRequired: 0,
    speed: 65,
    steering: 70,
    stability: 85,
    description: 'The iconic traditional toboggan. Well-balanced, highly reliable, and perfect for learning mountain curves.',
    badge: 'Starter',
    iconColor: 'from-amber-600 to-amber-800',
  },
  {
    id: 'plastic-runner',
    name: 'Plastic Speed Sledge',
    giftsRequired: 50,
    speed: 75,
    steering: 80,
    stability: 75,
    description: 'Molded lightweight polymer construction delivers swift acceleration and sharper turns on compact powder.',
    iconColor: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'inflatable-tube',
    name: 'Arctic Snow Tube',
    giftsRequired: 100,
    speed: 70,
    steering: 60,
    stability: 95,
    description: 'Cushioned air-ring design with forgiving impact resistance. Bounces safely off minor bumps with ease.',
    badge: 'High Bounce',
    iconColor: 'from-red-500 to-orange-500',
  },
  {
    id: 'bobsleigh-pro',
    name: 'Alpine Bob Pro',
    giftsRequired: 160,
    speed: 85,
    steering: 85,
    stability: 80,
    description: 'Aerodynamic steel-runner sled engineered for Olympic velocity and surgical trajectory adjustments.',
    badge: 'Pro Racer',
    iconColor: 'from-emerald-500 to-teal-700',
  },
  {
    id: 'santa-sleigh',
    name: "Santa's Magic Sleigh",
    giftsRequired: 220,
    speed: 92,
    steering: 90,
    stability: 88,
    description: 'Infused with holiday magic and enchanted runners. Glides effortlessly across treacherous icy crevasses.',
    badge: 'Legendary',
    iconColor: 'from-rose-600 to-amber-500',
  },
  {
    id: 'stealth-glider',
    name: 'Carbon Stealth Glider',
    giftsRequired: 300,
    speed: 98,
    steering: 95,
    stability: 92,
    description: 'Ultra-advanced carbon-fiber monocoque structure offering the highest top speed and supreme responsiveness.',
    badge: 'Ultimate Tier',
    iconColor: 'from-purple-600 to-indigo-900',
  },
];

export const OBSTACLES: ObstacleItem[] = [
  {
    name: 'Towering Pine Trees',
    danger: 'High',
    description: 'Dense clusters of evergreen trees scattered across the hills. Colliding with trunks immediately halts your run.',
    avoidanceTip: 'Look 2–3 seconds ahead down the hill rather than focusing directly in front of your sled.',
    icon: '🌲',
  },
  {
    name: 'Giant Rolling Snowballs',
    danger: 'Extreme',
    description: 'Enormous boulders of compressed snow rolling downhill across lanes, tracking unpredictably along slopes.',
    avoidanceTip: 'Anticipate their diagonal rolling trajectory and steer swiftly toward the opposing flank.',
    icon: '⚪',
  },
  {
    name: 'Bottomless Ice Chasms',
    danger: 'Extreme',
    description: 'Deep canyon fissures in the mountain bedrock that require precision jump timing and adequate momentum.',
    avoidanceTip: 'Hit the ramp at full forward velocity and tap Spacebar or Up Arrow right at the lip of the ridge.',
    icon: '🏔️',
  },
  {
    name: 'Frozen Rock Boulders',
    danger: 'Medium',
    description: 'Jagged granite rocks concealed under fresh snowdrifts. They remain stationary but take up significant space.',
    avoidanceTip: 'Gentle corrective steering is safer than aggressive panic slaloms.',
    icon: '🪨',
  },
  {
    name: 'Wooden Barrier Fences',
    danger: 'Medium',
    description: 'Old livestock fences dividing mountain pastures that appear abruptly around steep blind corners.',
    avoidanceTip: 'Jump clean over short fences or steer through gaps marked by candy cane trail markers.',
    icon: '🪵',
  },
];

export const CONTROLS = [
  { key: 'Up Arrow / W', action: 'Jump / Hop', purpose: 'Clear fissures, small rocks, and fence barriers' },
  { key: 'Left Arrow / A', action: 'Steer Left', purpose: 'Carve left around trees and avoid rolling boulders' },
  { key: 'Right Arrow / D', action: 'Steer Right', purpose: 'Carve right and maneuver toward holiday gift boxes' },
  { key: 'Spacebar', action: 'High Jump', purpose: 'Execute maximum vertical airtime across wide canyon gaps' },
  { key: 'P / Esc', action: 'Pause Game', purpose: 'Freeze the action or access sound / settings' },
  { key: 'R', action: 'Restart Run', purpose: 'Instantly restart your downhill descent from the summit' },
];

export const GAME_MODES = [
  {
    title: 'Endless Mountain Run',
    tagline: 'Infinite Slope Challenge',
    description:
      'The core experience. Set off from the peak and survive as long as humanly possible down an infinitely procedural snowy mountain that gets progressively steeper and faster.',
  },
  {
    title: 'Gift Collection Frenzy',
    tagline: 'Unlock All Sleds',
    description:
      'Target high-risk gift placements to accumulate seasonal gift points quickly. Collect 300 gifts to unlock the ultimate Carbon Stealth Glider.',
  },
  {
    title: 'High-Score Speedrun',
    tagline: 'Global Leaderboard Ascent',
    description:
      'Focus purely on survival distance and multipliers. Compare your record distance against millions of riders worldwide.',
  },
];

export const PRO_TIPS = [
  'Centerline Balancing: Avoid hugging the far edges of the slope. Riding near the center gives you 360-degree reaction room when boulders roll.',
  'Jump Sparingly: Sleds lose steering control while airborne. Only jump when clearing a mandatory chasm or barrier.',
  'Risk vs. Reward for Gifts: Never sacrifice a 2,000+ meter high score run for a single gift box positioned right in front of a tree trunk.',
  'Momentum Preservation: Small micro-taps on steering keys preserve more velocity than holding a turn continuously.',
  'Master the Hill Drops: When plunging down vertical drop-offs, release direction keys momentarily to ensure smooth shock-absorbing landings.',
];

