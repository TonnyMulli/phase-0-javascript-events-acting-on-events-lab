let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let leftPosition = parseInt(dodger.style.left) || 0;
  if (leftPosition > 0) {
    dodger.style.left = `${leftPosition - 10}px`;
  }
}

function moveDodgerRight() {
  let leftPosition = parseInt(dodger.style.left) || 0;
  if (leftPosition < 360) {
    dodger.style.left = `${leftPosition + 10}px`;
  }
}
// Your code here
