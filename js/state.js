// state.js

const DEFAULT_USER_STATE = {
  xp: 0,
  hearts: 5,
  maxHearts: 5,
  streak: 0,
};

// ---------- LOAD ----------
function loadUserState() {
  const saved = localStorage.getItem("userState");
  if (!saved) return { ...DEFAULT_USER_STATE };

  try {
    return { ...DEFAULT_USER_STATE, ...JSON.parse(saved) };
  } catch {
    return { ...DEFAULT_USER_STATE };
  }
}

// ---------- SAVE ----------
function saveUserState() {
  localStorage.setItem("userState", JSON.stringify(userState));
}

// ---------- STATE ----------
export let userState = loadUserState();

// ---------- ACTIONS ----------
export function addXP(amount) {
  userState.xp += amount;
  saveUserState();
}

export function loseHeart() {
  userState.hearts = Math.max(0, userState.hearts - 1);
  saveUserState();
}

export function refillHearts() {
  userState.hearts = userState.maxHearts;
  saveUserState();
}

export function resetProgress() {
  userState = { ...DEFAULT_USER_STATE };
  saveUserState();
}
