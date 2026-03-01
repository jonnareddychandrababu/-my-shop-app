"use strict";
// ============================================================
//  Lord Ganesha - Images & Mantras App
// ============================================================
// ── Data ────────────────────────────────────────────────────
const images = [
    {
        // Verified: Wikimedia Commons — Pahari Basohli miniature painting, c.1730
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg/960px-Ganesha_Basohli_miniature_circa_1730_Dubost_p73.jpg",
        title: "Basohli Miniature Painting (c. 1730)",
        description: "A vivid Pahari miniature painting of Ganesha from the Basohli school, circa 1730. Public domain.",
    },
    {
        // Verified: Wikimedia Commons — Rajput/Mughal miniature painting
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ganesha_miniature_painting.jpg/960px-Ganesha_miniature_painting.jpg",
        title: "Rajput Miniature Painting",
        description: "A richly detailed Rajput-style miniature painting of Lord Ganesha adorned with jewels and flowers.",
    },
    {
        // Verified: Wikimedia Commons — Ganesha Sarasvati Poona painting, 1800–05
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ganesha_Sarasvati_Poona_painting_1800-05.jpg/960px-Ganesha_Sarasvati_Poona_painting_1800-05.jpg",
        title: "Poona School Painting (1800–05)",
        description: "A classical Deccan painting depicting Ganesha with Goddess Sarasvati, Poona School, early 19th century.",
    },
    {
        // Verified: Wikimedia Commons — Kalighat painting, Cleveland Museum of Art
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/India%2C_Calcutta%2C_Kalighat_painting%2C_19th_century_-_Ganesha_-_2003.166_-_Cleveland_Museum_of_Art.tif/lossy-page1-600px-India%2C_Calcutta%2C_Kalighat_painting%2C_19th_century_-_Ganesha_-_2003.166_-_Cleveland_Museum_of_Art.tif.jpg",
        title: "Kalighat Painting — Cleveland Museum",
        description: "A 19th-century Kalighat folk painting of Ganesha from Calcutta, now held at the Cleveland Museum of Art.",
    },
    {
        // Verified: Wikimedia Commons — Ganesha idol in Kantharmadam Ganesh temple
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/A_ganesha_statue_in_kantharmadam_ganesh_temple.JPG/960px-A_ganesha_statue_in_kantharmadam_ganesh_temple.JPG",
        title: "Kantharmadam Ganesh Temple Idol",
        description: "The celebrated Ganesha idol enshrined in the Kantharmadam Ganesh Temple, Kerala.",
    },
    {
        // Verified: Wikimedia Commons — Lord Ganesha statue, Tanjore Temple
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Lord_Ganesha_statue_in_Tanjore_Temple.jpg/960px-Lord_Ganesha_statue_in_Tanjore_Temple.jpg",
        title: "Tanjore Temple Statue",
        description: "A magnificent Ganesha statue inside the ancient Brihadeeswarar (Tanjore) Temple, Tamil Nadu.",
    },
    {
        // Verified: Wikimedia Commons — Ganesha in Gangaramaya Temple, Colombo
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ganesha_in_the_Temple_of_Gangaramaya..-_Colombo_%282%29.jpg/960px-Ganesha_in_the_Temple_of_Gangaramaya..-_Colombo_%282%29.jpg",
        title: "Gangaramaya Temple, Colombo",
        description: "An ornate gilded Ganesha murti inside the famous Gangaramaya Buddhist temple, Colombo, Sri Lanka.",
    },
    {
        // Verified: Wikimedia Commons — Ganesha marble sculpture, Thailand
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ganesha_marble_sculpture_in_Thailand_by_Trisorn_Triboon_01.jpg/960px-Ganesha_marble_sculpture_in_Thailand_by_Trisorn_Triboon_01.jpg",
        title: "Marble Sculpture — Thailand",
        description: "A finely carved white marble sculpture of Lord Ganesha, photographed in Thailand by Trisorn Triboon.",
    },
];
const mantras = [
    {
        type: "Seed Mantra",
        sanskrit: "ॐ गं गणपतये नमः",
        transliteration: "Om Gam Ganapataye Namaha",
        meaning: "I bow to Lord Ganesha, the remover of obstacles. This is the most powerful seed (bija) mantra of Ganesha, chanted to invoke his blessings before any new beginning.",
    },
    {
        type: "Shloka",
        sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ |\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
        transliteration: "Vakratunda Mahakaya Suryakoti Samaprabha |\nNirvighnam Kuru Me Deva Sarva-Karyeshu Sarvada",
        meaning: "O Lord with a curved trunk and mighty form, whose brilliance equals that of a million suns — please remove all obstacles from my path in all my endeavors, always.",
    },
    {
        type: "Gayatri Mantra",
        sanskrit: "ॐ एकदन्ताय विद्महे वक्रतुण्डाय धीमहि |\nतन्नो दन्ती प्रचोदयात् ॥",
        transliteration: "Om Ekadantaya Vidmahe Vakratundaya Dhimahi |\nTanno Danti Prachodayat",
        meaning: "We meditate on the one-tusked Lord with a curved trunk. May that elephant-faced one enlighten and inspire our intellect.",
    },
    {
        type: "Ashtanama",
        sanskrit: "गणपति बप्पा मोरया | मंगलमूर्ती मोरया ॥",
        transliteration: "Ganapati Bappa Morya | Mangalamurti Morya",
        meaning: "O Ganapati, my Father, Morya! O auspicious form, Morya! A beloved devotional chant sung during Ganesh Chaturthi festivals, expressing deep love and surrender to Ganesha.",
    },
    {
        type: "Dhyana Mantra",
        sanskrit: "ॐ श्री गणेशाय नमः",
        transliteration: "Om Shri Ganeshaya Namaha",
        meaning: "Salutations to Lord Ganesha. A simple yet profound mantra of reverence, chanted at the start of prayers, studies, or any auspicious activity to seek Ganesha's divine grace.",
    },
];
// ── State ────────────────────────────────────────────────────
let currentImage = 0;
let currentMantra = 0;
let autoSlideInterval = null;
// ── Render helpers ───────────────────────────────────────────
function renderGallery() {
    const track = document.getElementById("gallery-track");
    const dots = document.getElementById("gallery-dots");
    track.innerHTML = images
        .map((img, i) => `
    <div class="slide ${i === 0 ? "active" : ""}">
      <img
        src="${img.url}"
        alt="${img.title}"
        loading="lazy"
        onerror="this.parentElement.classList.add('img-error')"
      />
      <div class="slide-caption">
        <h3>${img.title}</h3>
        <p>${img.description}</p>
      </div>
    </div>`)
        .join("");
    dots.innerHTML = images
        .map((_, i) => `<button class="dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Go to image ${i + 1}"></button>`)
        .join("");
    dots.querySelectorAll(".dot").forEach((dot) => {
        dot.addEventListener("click", () => {
            goToSlide(Number(dot.dataset["index"]));
        });
    });
}
function goToSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    slides[currentImage]?.classList.remove("active");
    dots[currentImage]?.classList.remove("active");
    currentImage = (index + images.length) % images.length;
    slides[currentImage]?.classList.add("active");
    dots[currentImage]?.classList.add("active");
    updateImageCounter();
}
function updateImageCounter() {
    const counter = document.getElementById("image-counter");
    if (counter)
        counter.textContent = `${currentImage + 1} / ${images.length}`;
}
function renderMantra(index) {
    const mantra = mantras[index];
    if (!mantra)
        return;
    const card = document.getElementById("mantra-card");
    card.classList.add("fade-out");
    setTimeout(() => {
        const typeEl = document.getElementById("mantra-type");
        const sanskritEl = document.getElementById("mantra-sanskrit");
        const translitEl = document.getElementById("mantra-transliteration");
        const meaningEl = document.getElementById("mantra-meaning");
        const counterEl = document.getElementById("mantra-counter");
        typeEl.textContent = mantra.type;
        sanskritEl.textContent = mantra.sanskrit;
        translitEl.textContent = mantra.transliteration;
        meaningEl.textContent = mantra.meaning;
        counterEl.textContent = `${index + 1} / ${mantras.length}`;
        card.classList.remove("fade-out");
        card.classList.add("fade-in");
        setTimeout(() => card.classList.remove("fade-in"), 400);
    }, 300);
}
function nextMantra() {
    currentMantra = (currentMantra + 1) % mantras.length;
    renderMantra(currentMantra);
}
function prevMantra() {
    currentMantra = (currentMantra - 1 + mantras.length) % mantras.length;
    renderMantra(currentMantra);
}
// ── Auto-slide ───────────────────────────────────────────────
function startAutoSlide() {
    autoSlideInterval = setInterval(() => goToSlide(currentImage + 1), 4000);
}
function stopAutoSlide() {
    if (autoSlideInterval !== null) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}
// ── Boot ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    renderGallery();
    updateImageCounter();
    renderMantra(0);
    startAutoSlide();
    document.getElementById("btn-prev")?.addEventListener("click", () => {
        stopAutoSlide();
        goToSlide(currentImage - 1);
        startAutoSlide();
    });
    document.getElementById("btn-next")?.addEventListener("click", () => {
        stopAutoSlide();
        goToSlide(currentImage + 1);
        startAutoSlide();
    });
    document.getElementById("btn-mantra-prev")?.addEventListener("click", prevMantra);
    document.getElementById("btn-mantra-next")?.addEventListener("click", nextMantra);
    // Pause auto-slide when hovering over gallery
    const gallery = document.getElementById("gallery");
    gallery?.addEventListener("mouseenter", stopAutoSlide);
    gallery?.addEventListener("mouseleave", startAutoSlide);
});
//# sourceMappingURL=app.js.map