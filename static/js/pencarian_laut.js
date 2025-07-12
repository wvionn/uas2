const extraInfo = {
"Mosasaurus": "<b>Zaman:</b> Kapur Akhir (~82-66 juta tahun lalu).<br><b>Sejarah:</b> Mosasaurus adalah predator laut raksasa yang ditemukan di Eropa dan Amerika Utara. Fosilnya pertama kali ditemukan di Belanda dan menjadi ikon reptil laut purba.<br><b>Fun fact:</b> Mosasaurus bisa tumbuh lebih dari 15 meter dan memangsa hampir semua hewan laut di zamannya.",
"Plesiosaurus": "<b>Zaman:</b> Jurassic Awal (~201-175 juta tahun lalu).<br><b>Sejarah:</b> Plesiosaurus ditemukan di Inggris dan menjadi salah satu reptil laut paling terkenal karena lehernya yang sangat panjang.<br><b>Fun fact:</b> Memiliki lebih dari 40 tulang leher, jauh lebih banyak dari hewan modern.",
"Liopleurodon": "<b>Zaman:</b> Jurassic Tengah (~160 juta tahun lalu).<br><b>Sejarah:</b> Liopleurodon adalah predator besar dari Eropa dengan rahang sangat kuat.<br><b>Fun fact:</b> Diperkirakan memiliki indra penciuman tajam untuk berburu mangsa di laut.",
"Elasmosaurus": "<b>Zaman:</b> Kapur Akhir (~80 juta tahun lalu).<br><b>Sejarah:</b> Elasmosaurus ditemukan di Amerika Utara dan terkenal karena lehernya yang sangat panjang, terdiri dari lebih dari 70 ruas tulang.<br><b>Fun fact:</b> Lehernya bisa mencapai setengah dari panjang tubuhnya.",
"Ichthyosaurus": "<b>Zaman:</b> Jurassic Awal (~200 juta tahun lalu).<br><b>Sejarah:</b> Ichthyosaurus adalah reptil laut mirip lumba-lumba yang ditemukan di Eropa.<br><b>Fun fact:</b> Melahirkan anak secara hidup, bukan bertelur.",
"Kronosaurus": "<b>Zaman:</b> Kapur Awal (~125-99 juta tahun lalu).<br><b>Sejarah:</b> Kronosaurus adalah predator laut besar dari Australia.<br><b>Fun fact:</b> Memiliki gigi sepanjang 30 cm.",
"Opterosaurs": "<b>Zaman:</b> Mesozoikum (~228-66 juta tahun lalu).<br><b>Sejarah:</b> Opterosaurs adalah reptil terbang yang juga berburu di laut.<br><b>Fun fact:</b> Beberapa spesies memiliki bentang sayap lebih dari 10 meter.",
"Thalassomedon": "<b>Zaman:</b> Kapur Akhir (~95 juta tahun lalu).<br><b>Sejarah:</b> Thalassomedon adalah plesiosaur besar dari Amerika Utara.<br><b>Fun fact:</b> Lehernya terdiri dari 63 ruas tulang.",
"Shonisaurus": "<b>Zaman:</b> Trias Akhir (~215 juta tahun lalu).<br><b>Sejarah:</b> Shonisaurus adalah ichthyosaur raksasa dari Amerika Utara.<br><b>Fun fact:</b> Bisa tumbuh hingga 15 meter dan hidup di laut dalam.",
"Archelon": "<b>Zaman:</b> Kapur Akhir (~80-74 juta tahun lalu).<br><b>Sejarah:</b> Archelon adalah kura-kura laut terbesar yang pernah ada.<br><b>Fun fact:</b> Bisa mencapai panjang 4 meter dan berat lebih dari 2 ton.",
"Atopodentatus": "<b>Zaman:</b> Trias Tengah (~247 juta tahun lalu).<br><b>Sejarah:</b> Atopodentatus adalah reptil laut aneh dari Tiongkok dengan rahang berbentuk T.<br><b>Fun fact:</b> Diduga memakan tumbuhan laut seperti alga.",
"Cartorhynchus": "<b>Zaman:</b> Trias Awal (~248 juta tahun lalu).<br><b>Sejarah:</b> Cartorhynchus adalah ichthyosaur awal dengan tubuh kecil, ditemukan di Tiongkok.<br><b>Fun fact:</b> Menunjukkan transisi dari hewan darat ke laut.",
"Mixosaurus": "<b>Zaman:</b> Trias Tengah (~240 juta tahun lalu).<br><b>Sejarah:</b> Mixosaurus adalah ichthyosaur kecil yang hidup di laut dangkal.<br><b>Fun fact:</b> Memangsa ikan kecil dan amonit.",
"Thalattosaurus": "<b>Zaman:</b> Trias Akhir (~220 juta tahun lalu).<br><b>Sejarah:</b> Thalattosaurus adalah reptil laut dengan tubuh panjang dan ekor pipih.<br><b>Fun fact:</b> Berburu hewan kecil di pesisir.",
"Askeptosaurus": "<b>Zaman:</b> Trias Tengah (~240 juta tahun lalu).<br><b>Sejarah:</b> Askeptosaurus adalah reptil laut ramping dari Eropa dan Asia.<br><b>Fun fact:</b> Memiliki leher panjang dan tubuh fleksibel.",
"Lariosaurus": "<b>Zaman:</b> Trias Tengah (~240 juta tahun lalu).<br><b>Sejarah:</b> Lariosaurus adalah reptil semi-akuatik dari Eropa.<br><b>Fun fact:</b> Kaki depannya mirip sirip untuk berenang.",
"Augustasaurus": "<b>Zaman:</b> Trias Akhir (~210 juta tahun lalu).<br><b>Sejarah:</b> Augustasaurus adalah plesiosaur awal dari Amerika Utara.<br><b>Fun fact:</b> Merupakan perenang kuat dengan tubuh panjang.",
"Temnodontosaurus": "<b>Zaman:</b> Jurassic Awal (~196 juta tahun lalu).<br><b>Sejarah:</b> Temnodontosaurus adalah ichthyosaur besar dari Eropa.<br><b>Fun fact:</b> Memiliki mata terbesar di antara vertebrata, diameter hingga 26 cm.",
"Ophthalmosaurus": "<b>Zaman:</b> Jurassic Akhir (~165 juta tahun lalu).<br><b>Sejarah:</b> Ophthalmosaurus adalah ichthyosaur dengan penglihatan tajam.<br><b>Fun fact:</b> Mata sangat besar, cocok untuk berburu di laut dalam.",
"Cryptoclidus": "<b>Zaman:</b> Jurassic Akhir (~160 juta tahun lalu).<br><b>Sejarah:</b> Cryptoclidus adalah plesiosaur dengan leher sedang, ditemukan di Inggris.<br><b>Fun fact:</b> Kemungkinan memangsa hewan lunak seperti cumi-cumi.",
"Metriorhynchus": "<b>Zaman:</b> Jurassic Akhir (~160 juta tahun lalu).<br><b>Sejarah:</b> Metriorhynchus adalah crocodyliform laut pertama yang sepenuhnya akuatik.<br><b>Fun fact:</b> Punya sirip dan ekor seperti ikan.",
"Pliosaurus": "<b>Zaman:</b> Jurassic Akhir (~155 juta tahun lalu).<br><b>Sejarah:</b> Pliosaurus adalah pliosaur raksasa dari Eropa.<br><b>Fun fact:</b> Tengkoraknya bisa mencapai 2 meter panjangnya.",
"Eurycleidus": "<b>Zaman:</b> Jurassic Awal (~190 juta tahun lalu).<br><b>Sejarah:</b> Eurycleidus adalah plesiosaur dari Eropa dengan leher fleksibel.<br><b>Fun fact:</b> Berburu ikan kecil di perairan dangkal.",
"Grendelius": "<b>Zaman:</b> Jurassic Akhir (~150 juta tahun lalu).<br><b>Sejarah:</b> Grendelius adalah ichthyosaur besar dari Inggris.<br><b>Fun fact:</b> Memangsa cephalopoda seperti cumi-cumi.",
"Stenopterygius": "<b>Zaman:</b> Jurassic Awal (~185 juta tahun lalu).<br><b>Sejarah:</b> Stenopterygius adalah ichthyosaur kecil dari Eropa.<br><b>Fun fact:</b> Fosilnya menunjukkan bukti kelahiran anak secara hidup.",
"Shastasaurus": "<b>Zaman:</b> Trias Akhir (~210 juta tahun lalu).<br><b>Sejarah:</b> Shastasaurus adalah ichthyosaur terbesar yang pernah ditemukan.<br><b>Fun fact:</b> Bisa mencapai panjang 21 meter dan tidak bergigi.",
"Hydrotherosaurus": "<b>Zaman:</b> Kapur Akhir (~70 juta tahun lalu).<br><b>Sejarah:</b> Hydrotherosaurus adalah plesiosaur ramping dari Amerika Utara.<br><b>Fun fact:</b> Lehernya sangat panjang dan berburu ikan kecil.",
"Clidastes": "<b>Zaman:</b> Kapur Akhir (~85 juta tahun lalu).<br><b>Sejarah:</b> Clidastes adalah mosasaur kecil dan lincah dari Amerika Utara.<br><b>Fun fact:</b> Tubuhnya sangat aerodinamis untuk berenang cepat.",
"Platecarpus": "<b>Zaman:</b> Kapur Akhir (~83 juta tahun lalu).<br><b>Sejarah:</b> Platecarpus adalah mosasaur sedang dari Amerika Utara.<br><b>Fun fact:</b> Memangsa ikan dan amonit.",
"Prognathodon": "<b>Zaman:</b> Kapur Akhir (~70 juta tahun lalu).<br><b>Sejarah:</b> Prognathodon adalah mosasaur besar dengan gigi kuat, ditemukan di Eropa dan Afrika.<br><b>Fun fact:</b> Predator puncak di laut Kapur.",
"Halisaurus": "<b>Zaman:</b> Kapur Akhir (~70 juta tahun lalu).<br><b>Sejarah:</b> Halisaurus adalah mosasaur kecil dengan tubuh fleksibel.<br><b>Fun fact:</b> Berburu mangsa kecil di laut dangkal."
}; 

const cardNames = [
    "Mosasaurus", "Plesiosaurus", "Liopleurodon", "Elasmosaurus", "Ichthyosaurus", "Kronosaurus",
    "Opterosaurs", "Thalassomedon", "Shonisaurus", "Archelon", "Atopodentatus", "Cartorhynchus",
    "Mixosaurus", "Thalattosaurus", "Askeptosaurus", "Lariosaurus", "Augustasaurus", "Temnodontosaurus",
    "Ophthalmosaurus", "Cryptoclidus", "Metriorhynchus", "Pliosaurus", "Eurycleidus", "Grendelius",
    "Stenopterygius", "Shastasaurus", "Hydrotherosaurus", "Clidastes", "Platecarpus", "Prognathodon",
    "Halisaurus"
];

function showDetail(nama, gambar) {
    document.getElementById('cards-container').style.display = 'none';
    const panel = document.getElementById('detail-panel');
    panel.style.display = 'block';
    document.getElementById('detail-img').src = '/static/' + gambar;
    document.getElementById('detail-img').alt = nama;
    document.getElementById('detail-title').innerText = nama;
    document.getElementById('detail-extra').innerHTML = extraInfo[nama] || "";
    document.getElementById('bc-nama').innerText = nama;
    document.getElementById('bc-detail').style.display = 'inline';
}

function closeDetail() {
    document.getElementById('detail-panel').style.display = 'none';
    document.getElementById('cards-container').style.display = 'flex';
    document.getElementById('bc-detail').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-bar');
    const autocompleteList = document.getElementById('autocomplete-list');
    const cardItems = document.querySelectorAll('.card-item');

    searchInput.addEventListener('input', function () {
        const val = this.value.trim().toLowerCase();
        autocompleteList.innerHTML = '';
        if (!val) {
            autocompleteList.style.display = 'none';
            cardItems.forEach(card => card.style.display = '');
            return;
        }
        const matches = cardNames.filter(nama => nama.toLowerCase().includes(val));
        cardItems.forEach(card => {
            if (card.getAttribute('data-nama').includes(val)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
        if (matches.length === 0) {
            autocompleteList.style.display = 'none';
            return;
        }
        matches.forEach(nama => {
            const li = document.createElement('li');
            li.textContent = nama;
            li.style.padding = '8px 16px';
            li.style.cursor = 'pointer';
            li.onmouseover = () => li.style.background = '#e6f7e6';
            li.onmouseout = () => li.style.background = '';
            li.onclick = () => {
                searchInput.value = nama;
                autocompleteList.style.display = 'none';
                cardItems.forEach(card => {
                    if (card.getAttribute('data-nama') === nama.toLowerCase()) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            };
            autocompleteList.appendChild(li);
        });
        autocompleteList.style.display = 'block';
    });

    window.doSearch = function () {
        const val = searchInput.value.trim().toLowerCase();
        cardItems.forEach(card => {
            if (card.getAttribute('data-nama').includes(val)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
        autocompleteList.style.display = 'none';
    };

    document.getElementById('bc-kumpulan').onclick = function () {
        closeDetail();
    };
    document.getElementById('bc-hewan').onclick = function () {
        window.location.href = '/pilih-hewan';
    };
    document.getElementById('bc-home').onclick = function () {
        window.location.href = '/';
    };

    document.addEventListener('click', function (e) {
        if (!autocompleteList.contains(e.target) && e.target !== searchInput) {
            autocompleteList.style.display = 'none';
        }
    });
});