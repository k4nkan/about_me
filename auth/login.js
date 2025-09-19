import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTmEKSbL3pZIegi8YcVa7xeAcSFuWUt9M",
  authDomain: "fir-test-680b4.firebaseapp.com",
  projectId: "fir-test-680b4",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = "hogehoge@hoge.ho.ge";
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "/my-website/index.html";
  } catch (error) {
    alert("ログイン失敗: " + error.message);
  }
});
