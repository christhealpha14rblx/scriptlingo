import { addXP } from "./state.js";

const steps = [
  {
    title: "Welcome to ScriptLingo 👋",
    code: `-- Welcome!
-- ScriptLingo teaches Lua for Roblox Studio.`
  },
  {
    title: "What is Lua?",
    code: `-- Lua is the programming language
-- used to create Roblox games.`
  },
  {
    title: "What is a Script?",
    code: `-- Scripts tell Roblox what to do
-- They control parts, players, and events`
  },
  {
    title: "Your First Line of Lua",
    code: `print("Hello, Roblox!")`
  },
  {
    title: "Lesson Complete 🎉",
    code: `-- You earned +10 XP`
  }
];

let step = 0;

const titleEl = document.getElementById("lesson-title");
const textEl = document.getElementById("lesson-text");
const nextBtn = document.getElementById("lesson-next");

function render() {
  titleEl.textContent = steps[step].title;
  textEl.textContent = steps[step].code;
}

nextBtn.addEventListener("click", () => {
  step++;

  if (step >= steps.length) {
    addXP(10);
    nextBtn.disabled = true;
    nextBtn.textContent = "Done";
    return;
  }

  render();
});

render();
