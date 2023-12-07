// TODO: write code here

(() => {
  const playing = true;
  let activeHole = 1;

  if (playing) {
    const deactivateHole = () => document.querySelector('.hole_has-goblin').classList.remove('hole_has-goblin');
    const activateHole = (index) => document.querySelector(`.hole${index}`).classList.add('hole_has-goblin');
    setInterval(() => {
      if (!playing) {
        return;
      }
      deactivateHole();
      activeHole = Math.floor(1 + Math.random() * 16);
      activateHole(activeHole);
    }, 1000);
  }
})();

for (let index = 1; index < 17; index += 1) {
  const hole = document.querySelector(`.hole${index}`);
  // let currentScore;
  // let failScore;
  hole.onclick = function () {
    if (hole.classList.contains('hole_has-goblin')) {
      // currentScore += 1;
    } else {
      // failScore += 1;
    }
  };
}
