const facts = {
  Megalodon: "Megalodon adalah hiu terbesar yang pernah hidup, panjangnya bisa mencapai 18 meter!",
  Anomalocaris: "Anomalocaris hidup di laut Kambrium dan punya mata majemuk super tajam.",
  Dunkleosteus: "Dunkleosteus punya rahang super kuat yang bisa menghancurkan cangkang!",
  Opabinia: "Opabinia punya 5 mata dan belalai unik untuk menangkap mangsa!",
  Pliosaurus: "Pliosaurus adalah predator laut dengan rahang besar dan tubuh ramping.",
  Hallucigenia: "Hallucigenia adalah makhluk aneh berbentuk cacing dengan duri di punggungnya.",
  Helicoprion: "Helicoprion punya gigi melingkar seperti gergaji di dalam rahangnya.",
  Tiktaalik: "Tiktaalik adalah hewan transisi antara ikan dan amfibi, punya sirip mirip kaki."
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const dropZone = ev.target;
  const parentBox = dropZone.closest(".animal-box");
  const correctName = parentBox.getAttribute("data-name");

  if (data === correctName) {
    dropZone.textContent = data;
    dropZone.classList.add("correct");
    draggedElement.remove();
    document.getElementById("fact-box").textContent = facts[data];
  } else {
    dropZone.classList.add("wrong");
    setTimeout(() => {
      dropZone.classList.remove("wrong");
    }, 1000);
  }
}
