import { supabase } from "./supabase.js";

/* ---------- AUTH GUARD ---------- */
const { data: { session } } = await supabase.auth.getSession();

if (!session) {
  window.location.href = "./login.html";
}

/* ---------- LOGOUT ---------- */
document.getElementById("logoutBtn").onclick = async () => {
  await supabase.auth.signOut();
  window.location.href = "./login.html";
};

/* ---------- LESSON CLICK ---------- */
const lesson1 = document.getElementById("lesson1");

lesson1.onclick = () => {
  alert("Lesson opening next 👀 (lesson system coming next)");
};
