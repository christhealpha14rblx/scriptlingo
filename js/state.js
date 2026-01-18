export let xp = Number(localStorage.getItem("xp")) || 30;
export let streak = Number(localStorage.getItem("streak")) || 1;
export let hearts = Number(localStorage.getItem("hearts")) || 5;

const xpEl = document.getElementById("xp");
const streakEl = document.getElementById("streak");
const heartsEl = document.getElementById("hearts");

export function saveState() {
  localStorage.setItem("xp", xp);
  localStorage.setItem("streak", streak);
  localStorage.setItem("hearts", hearts);
}

export function addXP(amount) {
  xp += amount;
  saveState();
  renderState();
}

export function renderState() {
  xpEl.textContent = xp;
  streakEl.textContent = streak;
  heartsEl.textContent = hearts;
}

renderState();
