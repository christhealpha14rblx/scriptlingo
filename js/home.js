const lessonTile = document.getElementById("lesson1");
const lessonScreen = document.getElementById("lessonScreen");
const app = document.getElementById("app");

const title = document.getElementById("lessonTitle");
const text = document.getElementById("lessonText");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");

let hearts = 5;
let step = 0;

const lesson = [
  {
    title: "What is Lua?",
    text: `-- Lua is the programming language used in Roblox Studio
-- Every Script you write uses Lua

-- Lua tells Roblox what to do and when to do it`
  },
  {
    title: "Scripts Control the Game",
    text: `-- Scripts can:
-- Move parts
-- Detect players
-- Give points
-- Control gameplay logic

-- Without scripts, games would do nothing`
  },
  {
    title: "Different Actions Do Different Things",
    text: `-- Lua has many actions (called functions)

print("Hello!")  -- shows text in the output
wait(1)          -- waits 1 second

-- Each action has a purpose`
  },
  {
    title: "Variables Store Information",
    text: `-- Variables save values so you can reuse them

local score = 0
local playerName = "Player1"

-- These values can change over time`
  },
  {
    title: "You Did It!",
    text: `-- You just learned the basics of Roblox Lua 🎉
-- Scripts use Lua
-- Actions do things
-- Variables store data

-- You're officially coding 😎`
  }
];


lessonTile.addEventListener("click", () => {
  step = 0;
  openLesson();
});

function openLesson() {
  lessonScreen.style.display = "flex";
  app.style.display = "none";
  update();
}

function update() {
  title.textContent = lesson[step].title;
  text.textContent = lesson[step].text;

  const progress = ((step + 1) / lesson.length) * 100;
  progressFill.style.width = progress + "%";

  if (step === lesson.length - 1) {
    nextBtn.textContent = "Done";
  } else {
    nextBtn.textContent = "Next";
  }
}

nextBtn.addEventListener("click", () => {
  step++;
  if (step >= lesson.length) {
    closeLesson();
  } else {
    update();
  }
});

function closeLesson() {
  lessonScreen.style.display = "none";
  app.style.display = "flex";
}
