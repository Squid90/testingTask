// TODO: write code here
let currentScore = 0;
let failScore = 0;
let activeHole;
let playing = true;
const hole = document.querySelectorAll('.hole');
const holeSeparate = [...hole];
const deactivateHole = () => document.querySelector('.hole_has-goblin').classList.remove('hole_has-goblin');
const activateHole = (index) => document.querySelector(`.hole${index}`).classList.add('hole_has-goblin');

function changeHole() {
  deactivateHole();
  activeHole = Math.floor(1 + Math.random() * 16);
  activateHole(activeHole);
}
function reset() {
  alert('Игра окончена!');
  currentScore = 0;
  failScore = 0;
  playing = true;
  document.querySelector('.success').textContent = 0;
  document.querySelector('.fail').textContent = 0;
}
(() => {
  if (playing) {
    setInterval(() => {
      if (!playing) {
        reset();
        return;
      }
      changeHole();
    }, 1000);
  }
})();

holeSeparate.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('hole_has-goblin')) {
      changeHole();
      currentScore += 1;
      document.querySelector('.success').textContent = currentScore;
    } else {
      changeHole();
      failScore += 1;
      document.querySelector('.fail').textContent = failScore;
      if (failScore === 5) {
        playing = false;
      }
    }
  });
});
