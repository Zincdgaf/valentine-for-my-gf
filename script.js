const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const envelopeContainer = document.getElementById("envelopeContainer");
const envelope = document.getElementById("envelope");

let yesScale = 1;

noBtn.addEventListener("click", () => {
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;
  if (yesScale > 2.2) noBtn.style.display = "none";
});

yesBtn.addEventListener("click", () => {
  envelopeContainer.style.display = "grid";
  setTimeout(() => {
    envelope.querySelector(".flap").style.transform = "rotateX(180deg)";
    envelope.querySelector(".letter").style.bottom = "10px";
  }, 300);
});

envelopeContainer.addEventListener("click", (e) => {
  if (e.target === envelopeContainer) {
    envelopeContainer.style.display = "none";
  }
});

