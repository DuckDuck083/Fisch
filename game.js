const SAVE_KEY = "tidebound-isles-save-v1";

const islands = [
  {
    id: "starter",
    name: "Starter Cove",
    cost: 0,
    range: 1,
    mark: "\u{1F3DD}\u{FE0F}",
    description: "Calm shallows with friendly fish and clear water.",
    color: "#44b8a5",
    fish: ["minnow", "snapper", "crab", "glowfin"]
  },
  {
    id: "kelp",
    name: "Kelpwood Atoll",
    cost: 450,
    range: 2,
    mark: "\u{1F33F}",
    description: "A green maze where quick fish dart between kelp stalks.",
    color: "#2f9468",
    fish: ["kelp-eel", "mossback", "tangleray", "emerald-tuna"]
  },
  {
    id: "pirate",
    name: "Corsair Key",
    cost: 900,
    range: 2,
    mark: "\u{1F3F4}\u{200D}\u{2620}\u{FE0F}",
    pirate: true,
    description: "A black-market dock with cursed catches, raiders, and buried loot.",
    color: "#8d6a34",
    fish: ["parrotfish", "cutlass-eel", "powder-keg-puffer", "captains-curse"]
  },
  {
    id: "wreck",
    name: "Shipwreck Spire",
    cost: 1700,
    range: 3,
    mark: "\u{2693}",
    pirate: true,
    description: "Broken masts, sunken treasure, and fish hiding in cannon holes.",
    color: "#6f7b83",
    fish: ["barnacle-grouper", "ghost-mackerel", "coin-snapper", "kraken-child"]
  },
  {
    id: "volcano",
    name: "Emberhook Isle",
    cost: 1300,
    range: 3,
    mark: "\u{1F30B}",
    description: "Hot currents, heavy bites, and rare molten catches.",
    color: "#d45d3a",
    fish: ["ash-carp", "cinderfin", "lava-ray", "obsidian-shark"]
  },
  {
    id: "frost",
    name: "Frostwake Fjord",
    cost: 2800,
    range: 4,
    mark: "\u{1F9CA}",
    description: "Slippery water where patient anglers find glittering giants.",
    color: "#78bfe9",
    fish: ["snowflake-smelt", "ice-pike", "aurora-cod", "crystal-whale"]
  },
  {
    id: "siren",
    name: "Siren Reef",
    cost: 3900,
    range: 4,
    mark: "\u{1FAF5}",
    description: "Pink coral, singing currents, and strange glittering fish.",
    color: "#d66aa6",
    fish: ["coral-clown", "harpfin", "siren-jelly", "pearl-serpent"]
  },
  {
    id: "void",
    name: "Moonless Shoal",
    cost: 0,
    range: 5,
    secret: true,
    mark: "\u{1F311}",
    description: "A hidden night-water island that appears only to proven explorers.",
    color: "#6b5bd6",
    fish: ["starling-fish", "phase-squid", "eclipse-marlin", "ancient-leviathan"]
  }
];

const fish = {
  "minnow": { name: "Sunny Minnow", rarity: "Common", value: 18, difficulty: 0.75, size: [1, 4], mark: "\u{1F41F}" },
  "snapper": { name: "Red Snapper", rarity: "Common", value: 32, difficulty: 0.95, size: [3, 12], mark: "\u{1F420}" },
  "crab": { name: "Pocket Crab", rarity: "Uncommon", value: 55, difficulty: 1.1, size: [1, 6], mark: "\u{1F980}" },
  "glowfin": { name: "Glowfin Koi", rarity: "Rare", value: 130, difficulty: 1.45, size: [5, 18], mark: "\u{2728}" },
  "kelp-eel": { name: "Kelp Eel", rarity: "Common", value: 75, difficulty: 1.25, size: [8, 24], mark: "\u{1F40D}" },
  "mossback": { name: "Mossback Bass", rarity: "Uncommon", value: 120, difficulty: 1.45, size: [12, 36], mark: "\u{1F41F}" },
  "tangleray": { name: "Tangleray", rarity: "Rare", value: 230, difficulty: 1.8, size: [24, 70], mark: "\u{1FABC}" },
  "emerald-tuna": { name: "Emerald Tuna", rarity: "Legendary", value: 520, difficulty: 2.2, size: [45, 140], mark: "\u{1F49A}" },
  "parrotfish": { name: "Parrotfish Raider", rarity: "Common", value: 105, difficulty: 1.35, size: [6, 22], mark: "\u{1F99C}" },
  "cutlass-eel": { name: "Cutlass Eel", rarity: "Uncommon", value: 190, difficulty: 1.75, size: [18, 60], mark: "\u{1F5E1}\u{FE0F}" },
  "powder-keg-puffer": { name: "Powder Keg Puffer", rarity: "Rare", value: 390, difficulty: 2.15, size: [10, 36], mark: "\u{1F4A3}" },
  "captains-curse": { name: "Captain's Curse", rarity: "Legendary", value: 950, difficulty: 2.7, size: [40, 130], mark: "\u{1F480}" },
  "barnacle-grouper": { name: "Barnacle Grouper", rarity: "Common", value: 180, difficulty: 1.65, size: [24, 80], mark: "\u{1FAA8}" },
  "ghost-mackerel": { name: "Ghost Mackerel", rarity: "Uncommon", value: 310, difficulty: 2.0, size: [12, 42], mark: "\u{1F47B}" },
  "coin-snapper": { name: "Coin Snapper", rarity: "Rare", value: 620, difficulty: 2.35, size: [16, 55], mark: "\u{1FA99}" },
  "kraken-child": { name: "Kraken Child", rarity: "Mythic", value: 1600, difficulty: 3.05, size: [90, 260], mark: "\u{1F419}" },
  "ash-carp": { name: "Ash Carp", rarity: "Common", value: 150, difficulty: 1.55, size: [14, 42], mark: "\u{1F41F}" },
  "cinderfin": { name: "Cinderfin", rarity: "Uncommon", value: 250, difficulty: 1.85, size: [22, 65], mark: "\u{1F525}" },
  "lava-ray": { name: "Lava Ray", rarity: "Rare", value: 470, difficulty: 2.25, size: [60, 180], mark: "\u{1F336}\u{FE0F}" },
  "obsidian-shark": { name: "Obsidian Shark", rarity: "Mythic", value: 1100, difficulty: 2.8, size: [130, 420], mark: "\u{1F988}" },
  "snowflake-smelt": { name: "Snowflake Smelt", rarity: "Common", value: 240, difficulty: 1.75, size: [4, 14], mark: "\u{2744}\u{FE0F}" },
  "ice-pike": { name: "Ice Pike", rarity: "Uncommon", value: 380, difficulty: 2.05, size: [30, 95], mark: "\u{1F41F}" },
  "aurora-cod": { name: "Aurora Cod", rarity: "Rare", value: 760, difficulty: 2.55, size: [55, 150], mark: "\u{1F308}" },
  "crystal-whale": { name: "Crystal Whale", rarity: "Legendary", value: 1800, difficulty: 3.1, size: [500, 1400], mark: "\u{1F40B}" },
  "coral-clown": { name: "Coral Clownfish", rarity: "Common", value: 290, difficulty: 1.9, size: [2, 8], mark: "\u{1F420}" },
  "harpfin": { name: "Harpfin", rarity: "Uncommon", value: 520, difficulty: 2.25, size: [8, 28], mark: "\u{1F3B5}" },
  "siren-jelly": { name: "Siren Jelly", rarity: "Rare", value: 980, difficulty: 2.75, size: [6, 30], mark: "\u{1FABC}" },
  "pearl-serpent": { name: "Pearl Serpent", rarity: "Legendary", value: 2100, difficulty: 3.2, size: [80, 240], mark: "\u{1F9AA}" },
  "starling-fish": { name: "Starling Fish", rarity: "Rare", value: 900, difficulty: 2.45, size: [10, 40], mark: "\u{1F31F}" },
  "phase-squid": { name: "Phase Squid", rarity: "Legendary", value: 1500, difficulty: 2.9, size: [45, 130], mark: "\u{1F991}" },
  "eclipse-marlin": { name: "Eclipse Marlin", rarity: "Mythic", value: 3200, difficulty: 3.35, size: [180, 520], mark: "\u{2600}\u{FE0F}" },
  "ancient-leviathan": { name: "Ancient Leviathan", rarity: "Secret", value: 9000, difficulty: 4.0, size: [1200, 3200], mark: "\u{1F451}" }
};

const pirateEvents = [
  { name: "Black Flag Ambush", win: "You outsailed a raider sloop", lose: "A raider sloop boarded your deck" },
  { name: "Buried Map", win: "A soaked treasure map led to bonus coins", lose: "The map was a fake and cost you time" },
  { name: "Cannon Smoke", win: "You dodged cannon fire and grabbed floating loot", lose: "Cannon fire scattered part of the catch" },
  { name: "Cursed Chest", win: "The cursed chest opened for you", lose: "The cursed chest demanded a coin offering" }
];

const upgrades = {
  rod: [
    { name: "Twig Rod", cost: 0, power: 1, control: 1, text: "A starter rod with honest wobble." },
    { name: "Carbon Rod", cost: 300, power: 1.18, control: 1.12, text: "A wider reel zone and better catch speed." },
    { name: "Storm Rod", cost: 950, power: 1.42, control: 1.28, text: "Keeps up with fish bursts." },
    { name: "Astral Rod", cost: 2600, power: 1.75, control: 1.55, text: "Turns impossible catches into fair fights." },
    { name: "Captain's Harpoon", cost: 5200, power: 2.05, control: 1.72, text: "A pirate-forged rod with brutal control." },
    { name: "Abyss Anchor Rod", cost: 9800, power: 2.35, control: 1.95, text: "Special: huge fish lose stamina faster." }
  ],
  boat: [
    { name: "Rowboat", cost: 0, range: 1, speed: 1, text: "Enough to reach nearby coves." },
    { name: "Skiff", cost: 500, range: 2, speed: 1.08, text: "Unlocks nearby island routes." },
    { name: "Wavecutter", cost: 1500, range: 3, speed: 1.16, text: "Built for volcanic routes." },
    { name: "Moonrunner", cost: 4200, range: 4, speed: 1.25, text: "Can follow strange currents." },
    { name: "Black Flag Galleon", cost: 7600, range: 5, speed: 1.35, text: "A pirate ship that can chase secret waters." },
    { name: "Storm Submarine", cost: 12500, range: 6, speed: 1.5, text: "Special: faster fish tracking and future deep-sea access." }
  ],
  bait: [
    { name: "Bread Bait", cost: 0, luck: 1, text: "Simple bait for simple bites." },
    { name: "Shrimp Mix", cost: 240, luck: 1.2, text: "Better odds for uncommon catches." },
    { name: "Glow Worms", cost: 850, luck: 1.45, text: "Rare fish notice the shimmer." },
    { name: "Meteor Chum", cost: 2300, luck: 1.85, text: "Draws legends from deep water." },
    { name: "Cursed Doubloons", cost: 5000, luck: 2.25, text: "Pirate bait that tempts mythic fish." },
    { name: "Void Truffle", cost: 10500, luck: 2.75, text: "Special: strongest rare-fish lure in the game." }
  ],
  gear: [
    { name: "Lucky Tacklebox", cost: 0, luckBonus: 0, payoutBonus: 0, tensionResist: 0, pirateBonus: 0, autoHook: 0, text: "A basic box for hooks and snacks." },
    { name: "Gold Scale Charm", cost: 650, luckBonus: 0.15, payoutBonus: 0.08, tensionResist: 0, pirateBonus: 0, autoHook: 0, text: "Passive: slightly better luck and coin payouts." },
    { name: "Reinforced Gloves", cost: 1400, luckBonus: 0.15, payoutBonus: 0.08, tensionResist: 0.18, pirateBonus: 0, autoHook: 0, text: "Passive: line tension rises slower while reeling." },
    { name: "Raider Compass", cost: 3200, luckBonus: 0.25, payoutBonus: 0.12, tensionResist: 0.18, pirateBonus: 0.16, autoHook: 0, text: "Passive: better pirate raid odds and extra rare luck." },
    { name: "Clockwork Bobber", cost: 6800, luckBonus: 0.35, payoutBonus: 0.18, tensionResist: 0.25, pirateBonus: 0.22, autoHook: 0.2, text: "Passive: sometimes hooks fish for you and boosts treasure value." },
    { name: "Mythic Sonar", cost: 11500, luckBonus: 0.5, payoutBonus: 0.26, tensionResist: 0.3, pirateBonus: 0.28, autoHook: 0.32, text: "Passive: big luck, strong auto-hook, and richer catches." }
  ]
};

const achievements = [
  { id: "first", name: "First Splash", text: "Catch your first fish.", test: s => s.stats.catches >= 1, reward: 60 },
  { id: "ten", name: "Busy Dock", text: "Catch 10 fish.", test: s => s.stats.catches >= 10, reward: 180 },
  { id: "rare", name: "Rare Taste", text: "Catch any Rare or better fish.", test: s => hasRarity(s, ["Rare", "Legendary", "Mythic", "Secret"]), reward: 250 },
  { id: "pirate", name: "Black Flag Bounty", text: "Survive 3 pirate raids.", test: s => s.stats.raids >= 3, reward: 650 },
  { id: "wreck", name: "Wreck Diver", text: "Unlock Shipwreck Spire.", test: s => s.unlockedIslands.includes("wreck"), reward: 500 },
  { id: "siren", name: "Reef Listener", text: "Unlock Siren Reef.", test: s => s.unlockedIslands.includes("siren"), reward: 900 },
  { id: "kraken", name: "Small Kraken Problem", text: "Catch the Kraken Child.", test: s => Boolean(s.collection["kraken-child"]), reward: 1800 },
  { id: "explorer", name: "Island Hopper", text: "Unlock 3 islands.", test: s => s.unlockedIslands.length >= 3, reward: 400 },
  { id: "collector", name: "Aquarium Brain", text: "Discover 16 fish species.", test: s => Object.keys(s.collection).filter(id => fish[id]).length >= 16, reward: 900 },
  { id: "secret", name: "Moon Current", text: "Find the secret island.", test: s => s.unlockedIslands.includes("void"), reward: 1200 },
  { id: "leviathan", name: "Old Deep", text: "Catch the Ancient Leviathan.", test: s => Boolean(s.collection["ancient-leviathan"]), reward: 5000 }
];

const defaultState = {
  coins: 120,
  testing: false,
  island: "starter",
  unlockedIslands: ["starter"],
  upgradeLevels: { rod: 0, boat: 0, bait: 0, gear: 0 },
  collection: {},
  achievements: {},
  stats: { catches: 0, casts: 0, earned: 0, bestValue: 0, bestName: "None", raids: 0 },
  log: ["Welcome to Tidebound Isles. Press C to cast."]
};

let state = load();
let activeGame = null;
let biteGame = null;
let keys = { left: false, right: false };
let cheatBuffer = "";
let lastTick = performance.now();

const $ = selector => document.querySelector(selector);

const els = {
  currentIsland: $("#currentIsland"),
  coins: $("#coins"),
  bestCatch: $("#bestCatch"),
  flavorText: $("#flavorText"),
  islandView: $("#islandView"),
  castButton: $("#castButton"),
  hookedFish: $("#hookedFish"),
  tensionText: $("#tensionText"),
  sweetZone: $("#sweetZone"),
  lure: $("#lure"),
  controlBar: $("#controlBar"),
  progressText: $("#progressText"),
  luckBar: $("#luckBar"),
  log: $("#log"),
  islandGrid: $("#islandGrid"),
  shopGrid: $("#shopGrid"),
  fishGrid: $("#fishGrid"),
  collectionSummary: $("#collectionSummary"),
  achievementGrid: $("#achievementGrid")
};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    return saved ? mergeState(defaultState, saved) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeState(base, saved) {
  return {
    ...structuredClone(base),
    ...saved,
    upgradeLevels: { ...base.upgradeLevels, ...saved.upgradeLevels },
    stats: { ...base.stats, ...saved.stats },
    collection: saved.collection || {},
    achievements: saved.achievements || {},
    unlockedIslands: saved.unlockedIslands || ["starter"],
    log: saved.log || base.log
  };
}

function save() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function currentIsland() {
  return islands.find(item => item.id === state.island) || islands[0];
}

function currentUpgrade(type) {
  return upgrades[type][state.upgradeLevels[type]];
}

function currentGear() {
  return currentUpgrade("gear");
}

function hasRarity(saveState, rarities) {
  return Object.keys(saveState.collection).some(id => fish[id] && rarities.includes(fish[id].rarity));
}

function addLog(message) {
  state.log.unshift(message);
  state.log = state.log.slice(0, 8);
}

function weightedFish() {
  const island = currentIsland();
  const luck = currentUpgrade("bait").luck + currentGear().luckBonus;
  const rarityWeight = { Common: 60, Uncommon: 27, Rare: 10, Legendary: 3, Mythic: 1, Secret: 0.35 };
  const pool = island.fish.map(id => {
    const item = fish[id];
    const rarityBoost = item.rarity === "Common" ? 1 : luck;
    return { id, weight: rarityWeight[item.rarity] * rarityBoost };
  });
  const total = pool.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of pool) {
    roll -= item.weight;
    if (roll <= 0) return item.id;
  }
  return pool[0].id;
}

function castLine() {
  if (activeGame || biteGame) return;

  state.stats.casts += 1;
  const fishId = weightedFish();
  const target = fish[fishId];
  const wait = 0.75 + Math.random() * 1.15;

  biteGame = {
    fishId,
    timer: 0,
    biteAt: wait,
    hookWindow: Math.max(0.65, 1.15 - target.difficulty * 0.08)
  };

  addLog("Cast out. Wait for HOOK NOW, then press Space.");
  render();
}

function tick(now) {
  const dt = Math.min(0.05, (now - lastTick) / 1000);
  lastTick = now;

  if (biteGame) updateBite(dt);
  if (activeGame) updateFishing(dt, now);

  requestAnimationFrame(tick);
}

function updateBite(dt) {
  biteGame.timer += dt;
  const target = fish[biteGame.fishId];
  const timeToBite = biteGame.biteAt - biteGame.timer;
  const hookTime = biteGame.timer - biteGame.biteAt;

  if (timeToBite > 0) {
    els.hookedFish.textContent = `Waiting... ${timeToBite.toFixed(1)}s`;
    els.tensionText.textContent = "Ready";
    els.progressText.textContent = "Wait";
    els.controlBar.style.width = `${Math.min(95, biteGame.timer / biteGame.biteAt * 100)}%`;
    return;
  }

  els.hookedFish.textContent = `HOOK NOW: ${target.name}`;
  els.tensionText.textContent = "Space";
  els.progressText.textContent = "Hook";
  els.controlBar.style.width = `${Math.max(0, 100 - hookTime / biteGame.hookWindow * 100)}%`;

  if (currentGear().autoHook && !biteGame.autoTried && hookTime > biteGame.hookWindow * 0.34) {
    biteGame.autoTried = true;
    if (Math.random() < currentGear().autoHook) {
      addLog(`${currentGear().name} snapped the hook at the perfect moment.`);
      hookFish();
      return;
    }
  }

  if (hookTime > biteGame.hookWindow) {
    addLog(`${target.name} stole the bait. Press Space when HOOK NOW appears.`);
    biteGame = null;
    render();
    save();
  }
}

function hookFish() {
  if (!biteGame) return;

  const early = biteGame.timer < biteGame.biteAt;
  const late = biteGame.timer > biteGame.biteAt + biteGame.hookWindow;
  const target = fish[biteGame.fishId];

  if (early || late) {
    addLog(early ? "Too early. Wait for HOOK NOW." : `${target.name} slipped away.`);
    biteGame = null;
    render();
    save();
    return;
  }

  startReel(biteGame.fishId);
  biteGame = null;
}

function startReel(fishId) {
  const target = fish[fishId];
  const rod = currentUpgrade("rod");
  const zoneSize = Math.max(14, 30 - target.difficulty * 2.8 + rod.control * 3.5);

  activeGame = {
    fishId,
    fishPos: Math.random() * 70 + 15,
    fishVelocity: (Math.random() > 0.5 ? 1 : -1) * (18 + target.difficulty * 7),
    zone: 50 - zoneSize / 2,
    zoneSize,
    progress: 12,
    tension: 18,
    stamina: 100,
    burstTimer: 0.5 + Math.random() * 0.8,
    burst: 0,
    driftSeed: Math.random() * 1000
  };

  addLog(`${target.name} hooked. Move the green reel zone over the fish with A/D.`);
  render();
}

function updateFishing(dt, now) {
  const game = activeGame;
  const target = fish[game.fishId];
  const rod = currentUpgrade("rod");
  const boat = currentUpgrade("boat");
  const gear = currentGear();
  const input = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
  const holdingBoth = keys.left && keys.right;

  game.zone += input * 44 * rod.control * dt;
  game.zone = Math.max(0, Math.min(100 - game.zoneSize, game.zone));

  game.burstTimer -= dt;
  if (game.burstTimer <= 0) {
    game.burst = (Math.random() > 0.5 ? 1 : -1) * (32 + target.difficulty * 18);
    game.burstTimer = 0.65 + Math.random() * Math.max(0.45, 1.8 - target.difficulty * 0.25);
  }
  game.burst *= 0.9;

  const swim = Math.sin(now / (380 / target.difficulty) + game.driftSeed) * target.difficulty * 18;
  game.fishVelocity += (swim + game.burst) * dt;
  game.fishVelocity *= 0.95;
  game.fishPos += game.fishVelocity * dt * boat.speed;

  if (game.fishPos < 0 || game.fishPos > 100) {
    game.fishVelocity *= -0.75;
    game.fishPos = Math.max(0, Math.min(100, game.fishPos));
  }

  const inZone = game.fishPos >= game.zone && game.fishPos <= game.zone + game.zoneSize;
  const center = game.zone + game.zoneSize / 2;
  const centerDistance = Math.abs(game.fishPos - center) / Math.max(1, game.zoneSize / 2);
  const quality = inZone ? Math.max(0.25, 1 - centerDistance * 0.45) : 0;

  game.progress += (inZone ? (16 + quality * 15) * rod.power : -13 * target.difficulty) * dt;
  const heavyFishBonus = target.size[1] >= 200 && state.upgradeLevels.rod >= 5 ? 1.35 : 1;
  game.stamina -= (inZone ? 8 * quality * heavyFishBonus : 1.2) * dt;
  game.tension += ((holdingBoth ? 16 : 0) + Math.abs(input) * 5 + Math.abs(game.fishVelocity) * 0.035 - (inZone ? 10 * quality : -7)) * (1 - gear.tensionResist) * dt;

  game.progress = Math.max(0, Math.min(100, game.progress));
  game.stamina = Math.max(0, game.stamina);
  game.tension = Math.max(0, Math.min(100, game.tension));

  if (game.progress >= 100 || game.stamina <= 0) finishCatch(true);
  if (game.progress <= 0 || game.tension >= 100) finishCatch(false);
  renderFishing();
}

function finishCatch(success) {
  const game = activeGame;
  const target = fish[game.fishId];
  activeGame = null;

  if (!success) {
    addLog(`${target.name} escaped. Keep the fish inside the green zone.`);
    checkAchievements();
    render();
    save();
    return;
  }

  const size = randomSize(target.size[0], target.size[1]);
  let payout = Math.round(target.value * (0.75 + size / target.size[1] * 0.5) * (1 + currentGear().payoutBonus));
  const event = pirateEvent(payout);
  payout = event.payout;

  state.coins += payout;
  state.stats.catches += 1;
  state.stats.earned += payout;
  state.collection[game.fishId] = Math.max(state.collection[game.fishId] || 0, size);

  if (payout > state.stats.bestValue) {
    state.stats.bestValue = payout;
    state.stats.bestName = `${target.name} (${size} lb)`;
  }

  addLog(`Caught ${target.mark} ${target.name}, ${size} lb, for ${payout} coins.${event.text}`);
  revealSecrets();
  checkAchievements();
  render();
  save();
}

function pirateEvent(basePayout) {
  const island = currentIsland();
  if (!island.pirate || Math.random() > 0.32) return { payout: basePayout, text: "" };

  state.stats.raids += 1;
  const raid = pirateEvents[Math.floor(Math.random() * pirateEvents.length)];
  const win = Math.random() < 0.58 + state.upgradeLevels.boat * 0.06 + currentGear().pirateBonus;
  if (win) {
    const bonus = 120 + Math.round(Math.random() * 260);
    addLog(`${raid.name}: ${raid.win}. +${bonus} coins.`);
    return { payout: basePayout + bonus, text: ` Pirate bonus: ${bonus} coins.` };
  }

  const loss = Math.min(basePayout, 70 + Math.round(Math.random() * 150));
  addLog(`${raid.name}: ${raid.lose}. -${loss} coins.`);
  return { payout: Math.max(0, basePayout - loss), text: ` Pirate loss: ${loss} coins.` };
}

function randomSize(min, max) {
  return Math.round((min + Math.random() * (max - min)) * 10) / 10;
}

function revealSecrets() {
  const ownsSecretBoat = currentUpgrade("boat").range >= 5;
  const rareCount = Object.keys(state.collection).filter(id => fish[id] && ["Legendary", "Mythic"].includes(fish[id].rarity)).length;
  if (!state.unlockedIslands.includes("void") && ownsSecretBoat && rareCount >= 2) {
    state.unlockedIslands.push("void");
    addLog("A moon current opened. Moonless Shoal is now on the map.");
  }
}

function checkAchievements() {
  achievements.forEach(achievement => {
    if (!state.achievements[achievement.id] && achievement.test(state)) {
      state.achievements[achievement.id] = true;
      state.coins += achievement.reward;
      addLog(`Achievement unlocked: ${achievement.name}. +${achievement.reward} coins.`);
    }
  });
}

function buyUpgrade(type) {
  const nextLevel = state.upgradeLevels[type] + 1;
  const next = upgrades[type][nextLevel];
  if (!next || (!state.testing && state.coins < next.cost)) return;
  if (!state.testing) state.coins -= next.cost;
  state.upgradeLevels[type] = nextLevel;
  addLog(`Upgraded ${type} to ${next.name}.`);
  revealSecrets();
  checkAchievements();
  render();
  save();
}

function travelTo(id) {
  const island = islands.find(item => item.id === id);
  if (!island || activeGame || biteGame) return;

  if (!state.unlockedIslands.includes(id)) {
    if (island.secret || (!state.testing && state.coins < island.cost) || currentUpgrade("boat").range < island.range) return;
    if (!state.testing) state.coins -= island.cost;
    state.unlockedIslands.push(id);
    addLog(`Unlocked ${island.name}.`);
  }

  state.island = id;
  addLog(`Sailed to ${island.name}.`);
  render();
  save();
}

function switchTab(tabName) {
  const tab = document.querySelector(`[data-tab="${tabName}"]`);
  if (!tab) return;
  document.querySelectorAll(".tab").forEach(item => item.classList.toggle("active", item === tab));
  document.querySelectorAll(".view").forEach(item => item.classList.toggle("active", item.id === `${tabName}View`));
}

function activateTestingMode() {
  if (state.testing) return;
  state.testing = true;
  state.coins = Math.max(state.coins, 999999);
  addLog("Testing mode enabled: infinite coins and free upgrades.");
  render();
  save();
}

function render() {
  const island = currentIsland();
  els.castButton.textContent = biteGame ? "Space: Hook" : activeGame ? "Reeling..." : "C: Cast Line";
  els.castButton.disabled = Boolean(activeGame);
  els.currentIsland.textContent = island.name;
  els.coins.textContent = state.testing ? "INF" : state.coins.toLocaleString();
  els.bestCatch.textContent = state.stats.bestName;
  els.flavorText.textContent = island.description;
  els.islandView.textContent = island.mark;
  els.islandView.style.setProperty("--island-color", island.color);
  els.luckBar.style.width = `${Math.min(100, (currentUpgrade("bait").luck + currentGear().luckBonus) * 34)}%`;
  els.log.innerHTML = state.log.map(item => `<p>${item}</p>`).join("");
  renderFishing();
  renderMap();
  renderShop();
  renderCollection();
  renderAchievements();
}

function renderFishing() {
  if (biteGame) {
    const waiting = biteGame.timer < biteGame.biteAt;
    els.sweetZone.style.left = waiting ? "44%" : "32%";
    els.sweetZone.style.width = waiting ? "12%" : "36%";
    els.lure.style.left = "50%";
    return;
  }

  if (!activeGame) {
    els.sweetZone.style.left = "35%";
    els.sweetZone.style.width = "30%";
    els.lure.style.left = "50%";
    els.controlBar.style.width = "0%";
    els.progressText.textContent = "0%";
    els.tensionText.textContent = "0%";
    els.hookedFish.textContent = "Press C to cast";
    return;
  }

  const target = fish[activeGame.fishId];
  els.hookedFish.textContent = `${target.mark} ${target.name}`;
  els.sweetZone.style.left = `${activeGame.zone}%`;
  els.sweetZone.style.width = `${activeGame.zoneSize}%`;
  els.lure.style.left = `${activeGame.fishPos}%`;
  els.controlBar.style.width = `${activeGame.progress}%`;
  els.progressText.textContent = `${Math.round(activeGame.progress)}%`;
  els.tensionText.textContent = `${Math.round(activeGame.tension)}%`;
}

function renderMap() {
  els.islandGrid.innerHTML = islands.map(island => {
    const unlocked = state.unlockedIslands.includes(island.id);
    const canUnlock = !unlocked && !island.secret && state.coins >= island.cost && currentUpgrade("boat").range >= island.range;
    const lockedText = island.secret ? "Hidden route" : `${island.cost} coins - boat range ${island.range}`;
    return `
      <article class="island-card ${state.island === island.id ? "selected" : ""} ${unlocked ? "" : "locked"}">
        <div class="island-emoji">${unlocked ? island.mark : "??"}</div>
        <div>
          <h3>${unlocked ? island.name : island.secret ? "Secret Island" : island.name}</h3>
          <p>${unlocked ? island.description : lockedText}</p>
          <button ${unlocked || canUnlock ? "" : "disabled"} data-travel="${island.id}">
            ${state.island === island.id ? "Docked" : unlocked ? "Sail" : "Unlock"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function renderShop() {
  els.shopGrid.innerHTML = Object.keys(upgrades).map(type => {
    const currentLevel = state.upgradeLevels[type];
    const nextLevel = currentLevel + 1;
    const track = upgrades[type].map((upgrade, index) => {
      const owned = index <= currentLevel;
      const current = index === currentLevel;
      const available = index === nextLevel && (state.testing || state.coins >= upgrade.cost);
      const locked = index > nextLevel;
      return `
        <div class="pass-node ${owned ? "owned" : ""} ${current ? "current" : ""} ${available ? "available" : ""} ${locked ? "locked" : ""}">
          <div class="node-top">
            <span class="node-tier">Tier ${index + 1}</span>
            <strong>${upgrade.name}</strong>
          </div>
          <p>${upgrade.text}</p>
          <div class="node-bottom">
            <span>${owned ? "Owned" : state.testing ? "Free in testing" : `${upgrade.cost} coins`}</span>
            ${index === nextLevel ? `<button ${available ? "" : "disabled"} data-upgrade="${type}">Buy</button>` : ""}
          </div>
        </div>
      `;
    }).join("");

    return `
      <article class="shop-track">
        <div class="shop-track-head">
          <div>
            <span class="label">${type}</span>
            <h3>${upgrades[type][currentLevel].name}</h3>
          </div>
          <strong>${currentLevel + 1}/${upgrades[type].length}</strong>
        </div>
        <div class="pass-track">${track}</div>
      </article>
    `;
  }).join("");
}

function renderCollection() {
  const discovered = Object.keys(state.collection).filter(id => fish[id]).length;
  const total = Object.keys(fish).length;
  els.collectionSummary.innerHTML = `<strong>${discovered}/${total}</strong> species discovered - ${state.stats.catches} catches - ${state.stats.raids} pirate raids`;
  els.fishGrid.innerHTML = Object.entries(fish).map(([id, item]) => {
    const size = state.collection[id];
    return `
      <article class="fish-card ${size ? "" : "unknown"}">
        <div class="fish-emoji">${size ? item.mark : "?"}</div>
        <h3>${size ? item.name : "Undiscovered"}</h3>
        <p>${size ? `${item.rarity} - best ${size} lb - ${item.value} coin base` : "Explore islands and improve bait."}</p>
      </article>
    `;
  }).join("");
}

function renderAchievements() {
  els.achievementGrid.innerHTML = achievements.map(achievement => {
    const done = state.achievements[achievement.id];
    return `
      <article class="achievement ${done ? "done" : ""}">
        <h3>${done ? "Done" : "Open"}: ${achievement.name}</h3>
        <p>${achievement.text}</p>
        <span>${achievement.reward} coin reward</span>
      </article>
    `;
  }).join("");
}

function resetSave() {
  if (!confirm("Reset Tidebound Isles save?")) return;
  localStorage.removeItem(SAVE_KEY);
  state = structuredClone(defaultState);
  activeGame = null;
  biteGame = null;
  render();
}

document.addEventListener("click", event => {
  const tab = event.target.closest("[data-tab]");
  const travel = event.target.closest("[data-travel]");
  const upgrade = event.target.closest("[data-upgrade]");

  if (tab) switchTab(tab.dataset.tab);
  if (travel) travelTo(travel.dataset.travel);
  if (upgrade) buyUpgrade(upgrade.dataset.upgrade);
});

$("#castButton").addEventListener("click", () => {
  if (biteGame) hookFish();
  else castLine();
});
$(".track").addEventListener("click", hookFish);
$("#saveButton").addEventListener("click", () => {
  save();
  addLog("Game saved.");
  render();
});
$("#resetButton").addEventListener("click", resetSave);
$("#leftButton").addEventListener("pointerdown", () => keys.left = true);
$("#rightButton").addEventListener("pointerdown", () => keys.right = true);
["#leftButton", "#rightButton"].forEach(selector => {
  $(selector).addEventListener("pointerup", () => {
    keys.left = false;
    keys.right = false;
  });
  $(selector).addEventListener("pointerleave", () => {
    keys.left = false;
    keys.right = false;
  });
});

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  if (key.length === 1) {
    cheatBuffer = `${cheatBuffer}${key}`.slice(-12);
    if (cheatBuffer.endsWith("mustardmango")) activateTestingMode();
  }
  if (event.code === "Space") {
    event.preventDefault();
    hookFish();
  }
  if (key === "c") castLine();
  if (key === "s") {
    save();
    addLog("Game saved.");
    render();
  }
  if (key === "m") switchTab("map");
  if (key === "b") switchTab("shop");
  if (key === "g") switchTab("achievements");
  if (key === "f") switchTab("fish");
  if (key === "l") switchTab("collection");
  if (event.key === "ArrowLeft" || key === "a") keys.left = true;
  if (event.key === "ArrowRight" || key === "d") keys.right = true;
});

document.addEventListener("keyup", event => {
  const key = event.key.toLowerCase();
  if (event.key === "ArrowLeft" || key === "a") keys.left = false;
  if (event.key === "ArrowRight" || key === "d") keys.right = false;
});

window.addEventListener("beforeunload", save);
setInterval(save, 15000);

render();
requestAnimationFrame(tick);
