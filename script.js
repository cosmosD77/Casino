const symbols = ["🍒", "🍋", "🍋", "🔔", "💰", "💎", "🍀", "⭐", "🔥", "🎉"];
let username = "";
let password = "";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  if (user === "user" && pass === "pass") {
    username = user;
    password = pass;
    message.textContent = "Login successful!";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
  } else {
    message.textContent = "Invalid credentials.";
  }
}

function spinSlots() {
  const reels = document.querySelectorAll(".reel");
  const result = document.getElementById("resultMessage");

  const symbolsCopy = [...symbols];
  symbolsCopy.sort(() => 0.5 - Math.random());

  reels[0].textContent = symbolsCopy[0];
  reels[1].textContent = symbolsCopy[1];
  reels[2].textContent = symbolsCopy[2];

  const resultText = [
    "You spun: " + symbolsCopy[0] + ", " + symbolsCopy[1] + ", " + symbolsCopy[2],
    "Jackpot! You won!",
    "You got a " + symbolsCopy[0] + "!",
    "You got a " + symbolsCopy[1] + "!",
    "You got a " + symbolsCopy[2] + "!",
  ];
  result.textContent = resultText[Math.floor(Math.random() * resultText.length)];
}