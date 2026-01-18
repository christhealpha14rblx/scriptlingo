import { addXP } from "./state.js";

const steps = [
  {
    title: "Welcome to ScriptLingo 👋",
    code: `-- ScriptLingo teaches Lua for Roblox Studio`
  },
  {
    title: "What is Lua?",
    code: `-- Lua is the language used to build Roblox games`
  },
  {
    title: "Scripts",
    code: `-- Scripts control behavior in Roblox Studio`
  },
  {
    title: "Different Actions Do Different Things",
    code: `you can do different actions to do different things such as; create variables, print text, and more!`
  },
  {
    title: "Lesson Complete 🎉",
    code: `-- You earned +10 XP`
  }
];

let step = 0;

const lesson = document.getElementById("lesson");
const openLesson = document.getElementById("openLesson");
const titleEl = document.getElementById("lesson-title");
const textEl = document.getElementById("lesson-text");
const nextBtn = document.getElementById("lesson-next");

function render() {
  titleEl.textContent = steps[step].title;
  textEl.textContent = steps[step].code;
}

openLesson.addEventListener("click", () => {
  step = 0;
  nextBtn.textContent = "Continue";
  nextBtn.disabled = false;
  lesson.classList.remove("hidden");
  render();
});

nextBtn.addEventListener("click", () => {
  step++;

  if (step >= steps.length) {
    addXP(10);
    lesson.classList.add("hidden");
    return;
  }

  render();
});
