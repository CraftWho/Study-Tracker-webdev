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

fetch('dp-data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('level').textContent = data.level;
    document.getElementById('title').textContent = data.title;
    document.getElementById('dp').textContent = data.dp;
    document.getElementById('nextLevelDP').textContent = data.nextLevelDP;

    const skillsList = document.getElementById('skills');
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  })
  .catch(error => console.error('Error loading DP data:', error));
  fetch('dp-data.json')
  .then(response => response.json())
  .then(data => {
    // Inject basic stats
    document.getElementById('name').textContent = data.name;
    document.getElementById('level').textContent = data.level;
    document.getElementById('title').textContent = data.title;
    document.getElementById('dp').textContent = data.dp;
    document.getElementById('nextLevelDP').textContent = data.nextLevelDP;

    // Inject unlocked skills
    const skillsList = document.getElementById('skills');
    skillsList.innerHTML = ''; // Clear existing list
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('⚠️ Error loading DP data:', error);
    document.getElementById('rpg-stats').innerHTML = '<p>Unable to load stats. Please check dp-data.json.</p>';
  });