let container = document.querySelector(".container");
let btn = document.getElementById("spin");

btn.onclick = function () {
  let randomSegment = Math.floor(Math.random() * 5);

  if (randomSegment >= 2) {
    randomSegment++; // Shift by one to skip the 500k segment
  }

  const segmentAngle = 60;
  let minAngle = randomSegment * segmentAngle;
  let maxAngle = minAngle + segmentAngle;

  let randomAngle =
    Math.floor(Math.random() * (maxAngle - minAngle)) + minAngle;

  let spins = Math.ceil(Math.random() * 5 + 3) * 360;
  let totalRotation = spins + randomAngle;

  container.style.transform = "rotate(-" + totalRotation + "deg)";
};
