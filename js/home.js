const lessonTile = document.getElementById("lesson1");
const overlay = document.getElementById("lessonOverlay");
const title = document.getElementById("lessonTitle");
const text = document.getElementById("lessonText");
const done = document.getElementById("lessonDone");

const lessonSteps = [
  {
    title: "Welcome to ScriptLingo",
    text: `-- Welcome!
-- ScriptLingo teaches Lua for Roblox Studio`
  },
  {
    title: "What is Lua?",
    text: `-- Lua is the programming language
-- used in Roblox games`
  },
  {
    title: "Different Actions Do Different Things",
    text: `--you can do different actions to do different things 
    --such as; create variables, print text, and more!`
  }
];

let step = 0;

lessonTile.addEventListener("click", () => {
  step = 0;
  openLesson();
});

function openLesson() {
  overlay.style.display = "flex";
  render();
}

function render() {
  title.textContent = lessonSteps[step].title;
  text.textContent = lessonSteps[step].text;
}

done.addEventListener("click", () => {
  step++;
  if (step >= lessonSteps.length) {
    overlay.style.display = "none";
  } else {
    render();
  }
});
