const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YEYYYYYYYY!! 😄";
  gif.src = "https://tenor.com/view/jump-bear-cute-hearts-love-gif-16290134.gif";
  
  // Hide the buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Delay for 10 seconds
  setTimeout(() => {
    // Reset to initial state
    question.innerHTML = "Will you be my valentine?";
    gif.src = "https://tenor.com/view/saltobears-gif-19937947.gif";
    yesBtn.style.display = "inline-block";
    noBtn.style.display = "inline-block";
  }, 10000);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
