import { addXP } from "./state.js";

const lessonSteps = [
  {
    title: "Welcome to ScriptLingo 👋",
    text: `-- Welcome!
-- ScriptLingo teaches Lua for Roblox Studio.`
  },
  {
    title: "What is Lua?",
    text: `-- Lua is the programming language
-- used to create Roblox games.`
  },
  {
    title: "What is a Script?",
    text: `-- A Script tells Roblox what to do
-- Scripts can control parts, players, and events`
  },
  {
    title: "Your First Line of Lua",
    text: `print("Hello, Roblox!")`
  },
  {
    title: "Lesson Complete 🎉",
    text: `-- You completed Lesson 1
-- +10 XP earned`
  }
];

let step = 0;

const lesson = document.getElementById("lesson");
const title = document.getElementById("lesson-title");
const text = document.getElementById("lesson-text");
const next = document.getElementById("lesson-next");

function render() {
  title.textContent = lessonSteps[step].title;
  text.textContent = lessonSteps[step].text;
}

next.addEventListener("click", () => {
  step++;

  if (step >= lessonSteps.length) {
    addXP(10);
    lesson.style.display = "none";
    return;
  }

  render();
});

render();
