const dinoIcons = {
    1: "trilobite.jpg",      // Paleozoikum
    2: "stegosaurus.jpg",    // Mesozoikum
    3: "brachiosaurus.png",  // Jurassic
    4: "trex.png",           // Cretaceous
    5: "mammut.png"          // Kenozoikum
};

const timeline = document.getElementById("timeline");
const dinoImg = document.getElementById("dino-slider-img");
const dinoContainer = document.getElementById("dino-slider-container");
const basePath = timeline.dataset.imgbase;

// Fungsi untuk mengatur posisi dino kecil di atas slider
function updateDinoPosition() {
    const min = parseInt(timeline.min);
    const max = parseInt(timeline.max);
    const val = parseInt(timeline.value);
    const percent = (val - min) / (max - min);

    // Lebar container dan gambar
    const containerWidth = dinoContainer.offsetWidth;
    const imgWidth = dinoImg.offsetWidth;

    // Hitung posisi left agar dino tepat di atas thumb slider
    const left = percent * (containerWidth - imgWidth);
    dinoImg.style.left = left + "px";

    // Ganti gambar dino sesuai zaman
    dinoImg.src = basePath + dinoIcons[val];
    dinoImg.alt = dinoIcons[val].replace('.png','');
}

// Update juga saat resize supaya posisi tetap pas
window.addEventListener("resize", updateDinoPosition);

// Gabungkan dengan updateContent dari index.js
function updateContent() {
    const zaman = {
        1: { nama: "Paleozoikum", gambar: "trilobite.jpg" },
        2: { nama: "Mesozoikum", gambar: "stegosaurus.png" },
        3: { nama: "Jurassic", gambar: "brachiosaurus.png" },
        4: { nama: "Cretaceous", gambar: "trex.png" },
        5: { nama: "Kenozoikum", gambar: "mammut.png" }
    };
    const zamanInfo = document.getElementById("zaman-info");
    const hewanGambar = document.getElementById("hewan-gambar");
    const data = zaman[timeline.value];
    zamanInfo.innerText = `Zaman: ${data.nama}`;
    hewanGambar.innerHTML = `<img src="${basePath}${data.gambar}" alt="${data.nama}">`;
    updateDinoPosition();
}

timeline.addEventListener("input", updateContent);
window.addEventListener("DOMContentLoaded", updateContent);