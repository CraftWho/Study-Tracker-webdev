function showMessage() {
  alert("🧭 Quest Started! Let's go Traveler.");
}
const devStatus = {
  class: "Disciple",
  level: 2,
  dp: 400
};

function showStatus() {
  alert(`🧑‍🎓 Class: ${devStatus.class}\n🎮 Level: ${devStatus.level}\n🧮 Developer Points: ${devStatus.dp} DP`);
}
const currentDP = 400;
const nextLevelDP = 500;
const progressPercent = (currentDP / nextLevelDP) * 100;

document.addEventListener("DOMContentLoaded", () => {
  const fill = document.querySelector(".progress-bar .fill");
  if (fill) {
    fill.style.width = `${progressPercent}%`;
  }
});
