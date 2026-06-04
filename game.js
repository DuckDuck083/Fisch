const SAVE_KEY = "tidebound-isles-save-v1";

const islands = [
  {
    id: "starter",
    name: "Starter Cove",
    cost: 0,
    emoji: "🏝️",
    description: "Calm shallows with friendly fish and easy reels.",
    color: "#44b8a5",
    fish: ["minnow", "snapper", "crab", "glowfin"]
  },
  {
    id: "kelp",
    name: "Kelpwood Atoll",
    cost: 450,
    emoji: "🌿",
    description: "A green maze where quick fish dart between kelp stalks.",
    color: "#2f9468",
    fish: ["kelp-eel", "mossback", "tangleray", "emerald-tuna"]
  },
  {
    id: "volcano",
    name: "Emberhook Isle",
    cost: 1300,
    emoji: "🌋",
    description: "Hot currents, heavy bites, and rare molten catches.",
    color: "#d45d3a",
    fish: ["ash-carp", "cinderfin", "lava-ray", "obsidian-shark"]
  },
  {
    id: "frost",
    name: "Frostwake Fjord",
    cost: 2800,
    emoji: "🧊",
    description: "Slippery water where patient anglers find glittering giants.",
    color: "#78bfe9",
    fish: ["snowflake-smelt", "ice-pike", "aurora-cod", "crystal-whale"]
  },
  {
    id: "void",
    name: "Moonless Shoal",
    cost: 0,
    secret: true,
    emoji: "🌑",
    description: "A hidden night-water island that appears only to proven explorers.",
    color: "#6b5bd6",
    fish: ["starling-fish", "phase-squid", "eclipse-marlin", "ancient-leviathan"]
  }
];

const fish = {
  "minnow": { name: "Sunny Minnow", rarity: "Common", value: 18, difficulty: 0.75, size: [1, 4], emoji: "🐟" },
  "snapper": { name: "Red Snapper", rarity: "Common", value: 32, difficulty: 0.95, size: [3, 12], emoji: "🐠" },
  "crab": { name: "Pocket Crab", rarity: "Uncommon", value: 55, difficulty: 1.1, size: [1, 6], emoji: "🦀" },
  "glowfin": { name: "Glowfin Koi", rarity: "Rare", value: 130, difficulty: 1.45, size: [5, 18], emoji: "✨" },
  "kelp-eel": { name: "Kelp Eel", rarity: "Common", value: 75, difficulty: 1.25, size: [8, 24], emoji: "🐍" },
  "mossback": { name: "Mossback Bass", rarity: "Uncommon", value: 120, difficulty: 1.45, size: [12, 36], emoji: "🐟" },
  "tangleray": { name: "Tangleray", rarity: "Rare", value: 230, difficulty: 1.8, size: [24, 70], emoji: "🪽" },
  "emerald-tuna": { name: "Emerald Tuna", rarity: "Legendary", value: 520, difficulty: 2.2, size: [45, 140], emoji: "💚" },
  "ash-carp": { name: "Ash Carp", rarity: "Common", value: 150, difficulty: 1.55, size: [14, 42], emoji: "🐟" },
  "cinderfin": { name: "Cinderfin", rarity: "Uncommon", value: 250, difficulty: 1.85, size: [22, 65], emoji: "🔥" },
  "lava-ray": { name: "Lava Ray", rarity: "Rare", value: 470, difficulty: 2.25, size: [60, 180], emoji: "🌶️" },
  "obsidian-shark": { name: "Obsidian Shark", rarity: "Mythic", value: 1100, difficulty: 2.8, size: [130, 420], emoji: "🦈" },
  "snowflake-smelt": { name: "Snowflake Smelt", rarity: "Common", value: 240, difficulty: 1.75, size: [4, 14], emoji: "❄️" },
  "ice-pike": { name: "Ice Pike", rarity: "Uncommon", value: 380, difficulty: 2.05, size: [30, 95], emoji: "🐟" },
  "aurora-cod": { name: "Aurora Cod", rarity: "Rare", value: 760, difficulty: 2.55, size: [55, 150], emoji: "🌈" },
  "crystal-whale": { name: "Crystal Whale", rarity: "Legendary", value: 1800, difficulty: 3.1, size: [500, 1400], emoji: "🐋" },
  "starling-fish": { name: "Starling Fish", rarity: "Rare", value: 900, difficulty: 2.45, size: [10, 40], emoji: "🌟" },
  "phase-squid": { name: "Phase Squid", rarity: "Legendary", value: 1500, difficulty: 2.9, size: [45, 130], emoji: "🦑" },
  "eclipse-marlin": { name: "Eclipse Marlin", rarity: "Mythic", value: 3200, difficulty: 3.35, size: [180, 520], emoji: "☀️" },
  "ancient-leviathan": { name: "Ancient Leviathan", rarity: "Secret", value: 9000, difficulty: 4.0, size: [1200, 3200], emoji: "👑" }
};

const upgrades = {
  rod: [
    { name: "Twig Rod", cost: 0, power: 1, control: 1, text: "A starter rod with honest wobble." },
    { name: "Carbon Rod", cost: 300, power: 1.18, control: 1.12, text: "More control and faster progress." },
    { name: "Storm Rod", cost: 950, power: 1.42, control: 1.28, text: "Cuts through wild fish movement." },
    { name: "Astral Rod", cost: 2600, power: 1.75, control: 1.55, text: "Turns impossible catches into fair fights." }
  ],
  boat: [
    { name: "Rowboat", cost: 0, range: 1, speed: 1, text: "Enough to reach nearby coves." },
    { name: "Skiff", cost: 500, range: 2, speed: 1.12, text: "Unlocks farther waters." },
    { name: "Wavecutter", cost: 1500, range: 3, speed: 1.25, text: "Built for volcanic and icy routes." },
    { name: "Moonrunner", cost: 4200, range: 4, speed: 1.45, text: "Can follow secret currents." }
  ],
  bait: [
    { name: "Bread Bait", cost: 0, luck: 1, text: "Simple bait for simple bites." },
    { name: "Shrimp Mix", cost: 240, luck: 1.2, text: "Better odds for uncommon catches." },
    { name: "Glow Worms", cost: 850, luck: 1.45, text: "Rare fish notice the shimmer." },
    { name: "Meteor Chum", cost: 2300, luck: 1.85, text: "Draws legends from deep water." }
  ]
};

const achievements = [
  { id: "first", name: "First Splash", text: "Catch your first fish.", test: s => s.stats.catches >= 1, reward: 60 },
  { id: "ten", name: "Busy Dock", text: "Catch 10 fish.", test: s => s.stats.catches >= 10, reward: 180 },
  { id: "rare", name: "Rare Taste", text: "Catch any Rare or better fish.", test: s => hasRarity(s, ["Rare", "Legendary", "Mythic", "Secret"]), reward: 250 },
  { id: "explorer", name: "Island Hopper", text: "Unlock 3 islands.", test: s => s.unlockedIslands.length >= 3, reward: 400 },
  { id: "collector", name: "Aquarium Brain", text: "Discover 12 fish species.", test: s => Object.keys(s.collection).length >= 12, reward: 700 },
  { id: "secret", name: "Moon Current", text: "Find the secret island.", test: s => s.unlockedIslands.includes("void"), reward: 1200 },
  { id: "leviathan", name: "Old Deep", text: "Catch the Ancient Leviathan.", test: s => Boolean(s.collection["ancient-leviathan"]), reward: 5000 }
];

const defaultState = {
  coins: 120,
  island: "starter",
  unlockedIslands: ["starter"],
  upgradeLevels: { rod: 0, boat: 0, bait: 0 },
  collection: {},
  achievements: {},
  stats: { catches: 0, casts: 0, earned: 0, bestValue: 0, bestName: "None" },
  log: ["Welcome to Tidebound Isles. Cast when ready."]
};

let state = load();
let activeGame = null;
let biteGame = null;
let keys = { left: false, right: false };
let lastTick = performance.now();

const $ = selector => document.querySelector(selector);

const els = {
  currentIsland: $("#currentIsland"),
  coins: $("#coins"),
  bestCatch: $("#bestCatch"),
  flavorText: $("#flavorText"),
  islandView: $("#islandView"),
  boat: $("#boat"),
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
  return islands.find(item => item.id === state.island);
}

function currentUpgrade(type) {
  return upgrades[type][state.upgradeLevels[type]];
}

function hasRarity(saveState, rarities) {
  return Object.keys(saveState.collection).some(id => rarities.includes(fish[id].rarity));
}

function addLog(message) {
  state.log.unshift(message);
  state.log = state.log.slice(0, 8);
}

function weightedFish() {
  const island = currentIsland();
  const luck = currentUpgrade("bait").luck;
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
  const id = weightedFish();
  const target = fish[id];

  biteGame = {
    fishId: id,
    timer: 0,
    biteAt: 0.8 + Math.random() * 1.4,
    strikeWindow: Math.max(0.42, 0.88 - target.difficulty * 0.09),
    struck: false
  };

  els.hookedFish.textContent = "Watching the bobber";
  addLog("Line cast. Strike when the bobber drops.");
  render();
}

function tick(now) {
  const dt = Math.min(0.05, (now - lastTick) / 1000);
  lastTick = now;

  if (activeGame) {
    updateFishing(dt, now);
  }
  if (biteGame) {
    updateBite(dt);
  }

  requestAnimationFrame(tick);
}

function updateBite(dt) {
  biteGame.timer += dt;
  const target = fish[biteGame.fishId];
  const untilBite = biteGame.biteAt - biteGame.timer;
  const missed = biteGame.timer > biteGame.biteAt + biteGame.strikeWindow;

  if (untilBite > 0) {
    els.hookedFish.textContent = `Bobber still... ${untilBite.toFixed(1)}s`;
    els.progressText.textContent = "Wait";
    els.controlBar.style.width = `${Math.max(0, 100 - untilBite * 45)}%`;
  } else {
    els.hookedFish.textContent = `Bite! Strike now for ${target.name}`;
    els.progressText.textContent = "Strike";
    els.controlBar.style.width = `${Math.max(0, 100 - (biteGame.timer - biteGame.biteAt) / biteGame.strikeWindow * 100)}%`;
  }

  if (missed) {
    addLog(`${target.name} stole the bait. Strike faster next time.`);
    biteGame = null;
    els.castButton.disabled = false;
    render();
    save();
  }
}

function strike() {
  if (!biteGame) return;
  const early = biteGame.timer < biteGame.biteAt;
  const late = biteGame.timer > biteGame.biteAt + biteGame.strikeWindow;
  const target = fish[biteGame.fishId];

  if (early || late) {
    addLog(early ? "Too early. The splash scared it off." : `${target.name} slipped away.`);
    biteGame = null;
    els.castButton.disabled = false;
    render();
    save();
    return;
  }

  startReel(biteGame.fishId);
  biteGame = null;
}

function startReel(id) {
  const target = fish[id];
  const rod = currentUpgrade("rod");
  const zoneSize = Math.max(9, 27 - target.difficulty * 4.6 + rod.control * 3.5);
  const zone = Math.random() * (100 - zoneSize);

  activeGame = {
    fishId: id,
    zone,
    zoneSize,
    lure: Math.random() * 74 + 13,
    velocity: (Math.random() > 0.5 ? 1 : -1) * (15 + target.difficulty * 11),
    progress: 8,
    tension: 24,
    stamina: 100,
    fishDrift: Math.random() * 1000,
    burstCooldown: 0.25 + Math.random() * 0.9,
    burst: 0
  };

  els.hookedFish.textContent = `${target.emoji} ${target.name}`;
  addLog(`${target.name} hooked. Match its movement and keep pressure steady.`);
  render();
}

function updateFishing(dt, now) {
  const game = activeGame;
  const target = fish[game.fishId];
  const rod = currentUpgrade("rod");
  const boat = currentUpgrade("boat");
  const input = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
  const bracing = keys.right && keys.left;
  const fishWave = Math.sin(now / (330 / target.difficulty) + game.fishDrift) * target.difficulty * 28;
  const pull = input * 72 * rod.control;

  game.burstCooldown -= dt;
  if (game.burstCooldown <= 0) {
    game.burst = (Math.random() > 0.5 ? 1 : -1) * (70 + target.difficulty * 26);
    game.burstCooldown = 0.65 + Math.random() * Math.max(0.35, 1.8 - target.difficulty * 0.25);
  }
  game.burst *= 0.92;

  game.velocity += (fishWave + game.burst + pull) * dt;
  game.velocity *= 0.955;
  game.lure += game.velocity * dt * boat.speed;

  if (game.lure < 0 || game.lure > 100) {
    game.velocity *= -0.62;
    game.lure = Math.max(0, Math.min(100, game.lure));
    game.tension += 16;
  }

  const inZone = game.lure >= game.zone && game.lure <= game.zone + game.zoneSize;
  const perfectCenter = game.zone + game.zoneSize / 2;
  const centerDistance = Math.abs(game.lure - perfectCenter) / Math.max(1, game.zoneSize / 2);
  const quality = inZone ? Math.max(0.22, 1 - centerDistance * 0.42) : 0;

  game.progress += (inZone ? (15 + quality * 14) * rod.power : -18 * target.difficulty) * dt;
  game.tension += (Math.abs(game.velocity) * 0.09 + Math.abs(input) * 10 + (bracing ? 18 : 0) - (inZone ? 11 * quality : -3)) * dt;
  game.stamina -= (inZone ? 7.5 * quality : 1.3) * dt;
  game.tension = Math.max(0, Math.min(100, game.tension));
  game.stamina = Math.max(0, game.stamina);
  game.progress = Math.max(0, Math.min(100, game.progress));

  if (Math.random() < 0.019 * target.difficulty) {
    game.zone += (Math.random() - 0.5) * (18 + target.difficulty * 8);
    game.zone = Math.max(0, Math.min(100 - game.zoneSize, game.zone));
  }

  if (game.progress >= 100 || game.stamina <= 0) finishCatch(true);
  if (game.progress <= 0 || game.tension >= 100) finishCatch(false);
  renderFishing();
}

function finishCatch(success) {
  const game = activeGame;
  const target = fish[game.fishId];
  activeGame = null;
  els.castButton.disabled = false;

  if (!success) {
    addLog(`${target.name} escaped. Upgrade your rod or ease the tension.`);
    checkAchievements();
    render();
    save();
    return;
  }

  const size = randomSize(target.size[0], target.size[1]);
  const payout = Math.round(target.value * (0.75 + size / target.size[1] * 0.5));
  state.coins += payout;
  state.stats.catches += 1;
  state.stats.earned += payout;
  state.collection[game.fishId] = Math.max(state.collection[game.fishId] || 0, size);

  if (payout > state.stats.bestValue) {
    state.stats.bestValue = payout;
    state.stats.bestName = `${target.name} (${size} lb)`;
  }

  addLog(`Caught ${target.emoji} ${target.name}, ${size} lb, for ${payout} coins.`);
  revealSecrets();
  checkAchievements();
  render();
  save();
}

function randomSize(min, max) {
  return Math.round((min + Math.random() * (max - min)) * 10) / 10;
}

function revealSecrets() {
  const ownsMoonrunner = state.upgradeLevels.boat >= 3;
  const rareCount = Object.keys(state.collection).filter(id => ["Legendary", "Mythic"].includes(fish[id].rarity)).length;
  if (!state.unlockedIslands.includes("void") && ownsMoonrunner && rareCount >= 2) {
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
  if (!next || state.coins < next.cost) return;
  state.coins -= next.cost;
  state.upgradeLevels[type] = nextLevel;
  addLog(`Upgraded ${type} to ${next.name}.`);
  revealSecrets();
  checkAchievements();
  render();
  save();
}

function travelTo(id) {
  const island = islands.find(item => item.id === id);
  if (!island || activeGame) return;

  if (!state.unlockedIslands.includes(id)) {
    if (state.coins < island.cost) return;
    const requiredRange = islands.filter(item => !item.secret).findIndex(item => item.id === id) + 1;
    if (currentUpgrade("boat").range < requiredRange) return;
    state.coins -= island.cost;
    state.unlockedIslands.push(id);
    addLog(`Unlocked ${island.name}.`);
  }

  state.island = id;
  addLog(`Sailed to ${island.name}.`);
  render();
  save();
}

function render() {
  const island = currentIsland();
  els.castButton.textContent = biteGame ? "Strike!" : activeGame ? "Reeling..." : "Cast Line";
  els.castButton.disabled = Boolean(activeGame);
  els.currentIsland.textContent = island.name;
  els.coins.textContent = state.coins.toLocaleString();
  els.bestCatch.textContent = state.stats.bestName;
  els.flavorText.textContent = island.description;
  els.islandView.textContent = island.emoji;
  els.islandView.style.setProperty("--island-color", island.color);
  els.luckBar.style.width = `${Math.min(100, currentUpgrade("bait").luck * 42)}%`;
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
    els.sweetZone.style.left = waiting ? "45%" : "34%";
    els.sweetZone.style.width = waiting ? "10%" : "32%";
    els.lure.style.left = waiting ? "50%" : "50%";
    els.tensionText.textContent = waiting ? "Calm" : "Bite";
    return;
  }

  if (!activeGame) {
    els.sweetZone.style.left = "38%";
    els.sweetZone.style.width = "24%";
    els.lure.style.left = "50%";
    els.controlBar.style.width = "0%";
    els.progressText.textContent = "0%";
    els.tensionText.textContent = "0%";
    els.hookedFish.textContent = "Waiting for a bite";
    return;
  }
  els.sweetZone.style.left = `${activeGame.zone}%`;
  els.sweetZone.style.width = `${activeGame.zoneSize}%`;
  els.lure.style.left = `${activeGame.lure}%`;
  els.controlBar.style.width = `${activeGame.progress}%`;
  els.progressText.textContent = `${Math.round(activeGame.progress)}%`;
  els.tensionText.textContent = `${Math.round(activeGame.tension)}%`;
}

function renderMap() {
  els.islandGrid.innerHTML = islands.map((island, index) => {
    const unlocked = state.unlockedIslands.includes(island.id);
    const requiredRange = island.secret ? 4 : index + 1;
    const canUnlock = !unlocked && !island.secret && state.coins >= island.cost && currentUpgrade("boat").range >= requiredRange;
    const lockedText = island.secret ? "Hidden route" : `${island.cost} coins • boat range ${requiredRange}`;
    return `
      <article class="island-card ${state.island === island.id ? "selected" : ""} ${unlocked ? "" : "locked"}">
        <div class="island-emoji">${unlocked ? island.emoji : "❔"}</div>
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
    const level = state.upgradeLevels[type];
    const current = upgrades[type][level];
    const next = upgrades[type][level + 1];
    return `
      <article class="shop-card">
        <span class="label">${type}</span>
        <h3>${current.name}</h3>
        <p>${current.text}</p>
        <button ${next && state.coins >= next.cost ? "" : "disabled"} data-upgrade="${type}">
          ${next ? `Upgrade to ${next.name} • ${next.cost}` : "Max Level"}
        </button>
      </article>
    `;
  }).join("");
}

function renderCollection() {
  const discovered = Object.keys(state.collection).length;
  const total = Object.keys(fish).length;
  els.collectionSummary.innerHTML = `<strong>${discovered}/${total}</strong> species discovered • ${state.stats.catches} catches`;
  els.fishGrid.innerHTML = Object.entries(fish).map(([id, item]) => {
    const size = state.collection[id];
    return `
      <article class="fish-card ${size ? "" : "unknown"}">
        <div class="fish-emoji">${size ? item.emoji : "?"}</div>
        <h3>${size ? item.name : "Undiscovered"}</h3>
        <p>${size ? `${item.rarity} • best ${size} lb • ${item.value} coin base` : "Explore islands and improve bait."}</p>
      </article>
    `;
  }).join("");
}

function renderAchievements() {
  els.achievementGrid.innerHTML = achievements.map(achievement => {
    const done = state.achievements[achievement.id];
    return `
      <article class="achievement ${done ? "done" : ""}">
        <h3>${done ? "✓" : "○"} ${achievement.name}</h3>
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
  render();
}

document.addEventListener("click", event => {
  const tab = event.target.closest("[data-tab]");
  const travel = event.target.closest("[data-travel]");
  const upgrade = event.target.closest("[data-upgrade]");

  if (tab) {
    document.querySelectorAll(".tab").forEach(item => item.classList.toggle("active", item === tab));
    document.querySelectorAll(".view").forEach(item => item.classList.toggle("active", item.id === `${tab.dataset.tab}View`));
  }
  if (travel) travelTo(travel.dataset.travel);
  if (upgrade) buyUpgrade(upgrade.dataset.upgrade);
});

$("#castButton").addEventListener("click", () => {
  if (biteGame) {
    strike();
    return;
  }
  castLine();
});
$(".track").addEventListener("click", strike);
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
  if (event.code === "Space") {
    event.preventDefault();
    strike();
  }
  if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") keys.left = true;
  if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") keys.right = true;
});

document.addEventListener("keyup", event => {
  if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") keys.left = false;
  if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") keys.right = false;
});

window.addEventListener("beforeunload", save);
setInterval(save, 15000);

render();
requestAnimationFrame(tick);
