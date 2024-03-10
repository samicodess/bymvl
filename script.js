function changePage() {
  window.location.href = "ypie.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const buttonTextArray = ["No?", "Sure?", "Sure sure?", 'PI', ';-; because you insist not...', 'Dont do this to me ;n;', 'Im going to pipipe', 'my little heart ;n;', 'PIIIIIII', 'PIPIPIPIPIPIPIPIPIPIPI', 'PIPIPIPIPIPIPIPIPIPIPIPIPIPIPI', 'Reconsider it, lets go again', 'No'];
  const dynamicButton = this.getElementById('dynamicButton');
  const yesButton = document.getElementById('yesButton');
  let currentIndex = 0;
  let fontSize = 16;

  function updateButtonText() {
    dynamicButton.textContent = buttonTextArray[currentIndex];
    currentIndex = (currentIndex + 1) % buttonTextArray.length;
  }

  function increaseFontSize() {
    fontSize += 20;
    yesButton.style.fontSize = `${fontSize}px`;
  }

  dynamicButton.addEventListener('click', updateButtonText);
  document.getElementById('dynamicButton').addEventListener('click', increaseFontSize);
});
