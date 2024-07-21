const wordInput = document.querySelector(".word-input");
const meanInput = document.querySelector(".mean-input");
const wordForm = document.querySelector(".word-form");
const listContents = document.querySelector(".list-contents");
const hiddenTime = document.querySelector(".hidden-time");

function meanHiddn(event) {
  const hTime = hiddenTime.innerText;
  if (hTime === "0") {
    event.target.classList.toggle("voca-mean-hidden");
  } else if (hTime === "1s") {
    event.target.classList.remove("voca-mean-hidden");
    setTimeout(() => {
      event.target.classList.add("voca-mean-hidden");
    }, 1000);
  } else {
    event.target.classList.remove("voca-mean-hidden");
    setTimeout(() => {
      event.target.classList.add("voca-mean-hidden");
    }, 5000);
  }
}

function deletVoca(event) {
  event.target.parentElement.remove();
}

function makeDivs(word, mean) {
  const listContent = document.createElement("div");
  const vocaWord = document.createElement("div");
  const vocaMean = document.createElement("div");
  const vocaDelete = document.createElement("div");
  vocaWord.innerText = word;
  vocaMean.innerText = mean;
  vocaDelete.innerText = "X";
  listContent.classList.add("list-content");
  vocaWord.classList.add("voca-word");
  vocaMean.classList.add("voca-mean");
  vocaDelete.classList.add("voca-delete");
  vocaMean.addEventListener("click", meanHiddn);
  vocaDelete.addEventListener("click", deletVoca);
  listContent.appendChild(vocaWord);
  listContent.appendChild(vocaMean);
  listContent.appendChild(vocaDelete);
  listContents.appendChild(listContent);
}

function createVoca(event) {
  event.preventDefault();
  const word = wordInput.value;
  const mean = meanInput.value;
  wordInput.value = "";
  meanInput.value = "";
  makeDivs(word, mean);
}

function changeHiddenTime() {
  if (hiddenTime.innerText === "0") {
    hiddenTime.innerText = "1s";
  } else if (hiddenTime.innerText === "1s") {
    hiddenTime.innerText = "5s";
  } else {
    hiddenTime.innerText = "0";
  }
}
wordForm.addEventListener("submit", createVoca);
hiddenTime.addEventListener("click", changeHiddenTime);
