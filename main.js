// Content Databases
const storyDB = [
    "In 2035, AR robots became teachers. Sarcos was the most advanced AI educator!",
    "Sarcos could project holographic lessons. Students learned about space through 3D simulations!",
    "The robot's knowledge database connected to all human knowledge through quantum networks!"
];

const quizDB = [
    {
        question: "What's the capital of France?",
        options: ["London", "Paris", "Berlin"],
        answer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        answer: 1
    }
];

const factsDB = [
    "The Eiffel Tower can grow taller in summer due to thermal expansion!",
    "Octopuses have three hearts!",
    "Bananas are berries, but strawberries aren't!"
];

const languageDB = {
    french: ["Hello = Bonjour", "Goodbye = Au revoir", "Thank you = Merci"],
    german: ["Hello = Hallo", "Goodbye = Auf Wiedersehen", "Thank you = Danke"]
};

let currentIndex = 0;

// Text-to-Speech Function
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
}

// Mode Handlers
function setMode(mode) {
    const display = document.getElementById('display');
    let content = "";

    switch (mode) {
        case 'story':
            content = storyDB[currentIndex % storyDB.length];
            break;
        case 'quiz':
            const q = quizDB[currentIndex % quizDB.length];
            content = `${q.question}\n${q.options.map((o, i) => `${i + 1}. ${o}`).join('\n')}`;
            break;
        case 'facts':
            content = factsDB[currentIndex % factsDB.length];
            break;
        case 'language':
            const lang = currentIndex % 2 === 0 ? 'french' : 'german';
            content = `${lang.toUpperCase()}:\n${languageDB[lang].join('\n')}`;
            break;
    }

    display.setAttribute('value', content);
    speak(content); // Speak the content
    currentIndex++;
}

// Initialize
document.getElementById('mode').play(); // Play mode sound on load
