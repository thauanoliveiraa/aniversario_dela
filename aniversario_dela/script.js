document.getElementById('showTranslations').addEventListener('click', function() {
    const translations = [
        "Eu te amo",
        "I love you",
        "Te quiero",
        "Je t'aime",
        "Ich liebe dich",
        "Ti amo",
        "我爱你 (Wǒ ài nǐ)",
        "愛してる (Aishiteru)",
        "사랑해 (Saranghae)",
        "Я люблю тебя (Ya lyublyu tebya)",
        "أحبك ('ahbak)",
        "मैं तुमसे प्यार करता हूँ (Main tumse pyar karta hoon)",
        "Seni seviyorum",
        "Σ' αγαπώ (S' agapo)",
        "אני אוהב אותך (Ani ohev otach)",
        "Jag älskar dig",
        "Ik hou van jou",
        "Kocham cię",
        "Jeg elsker dig",
        "Rakastan sinua",
        "Jeg elsker deg",
        "ฉันรักคุณ (Chan rak khun)",
        "Anh yêu em",
        "Aku cinta kamu",
        "Nakupenda",
        "Te iubesc",
        "Szeretlek"
    ];
    const loveMessageElement = document.getElementById('loveMessage');
    const currentText = loveMessageElement.innerText;
    let nextIndex = (translations.indexOf(currentText) + 1) % translations.length;
    loveMessageElement.innerText = translations[nextIndex];
});

function createHeart() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
