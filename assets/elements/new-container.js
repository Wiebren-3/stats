let containerIndex = 0; // Huidige index van de container

// Inhoud van de containers
const exercises = [
    { title: "Push-ups", description: "Push-ups zijn een effectieve lichaamsgewichtoefening waarbij je jezelf vanuit een plankpositie omhoog drukt en weer laat zakken. Deze oefening richt zich op de borstspieren, triceps en schouders, terwijl ook de kernspieren worden geactiveerd. Met 10 herhalingen stimuleer je kracht en uithoudingsvermogen.", oud: "21,34s", pr: "16,23s" },
    { title: "Benchpress", description: "De bench press is een krachtoefening waarbij een persoon liggend op een speciale bank een halter boven de borst laat zakken en vervolgens weer omhoog duwt. Het is een essentiële oefening in krachttraining en bodybuilding, gericht op het ontwikkelen van de borstspieren, triceps en schouders.", oud: "30kg", pr: "42.5kg" },
    { title: "10km Hardlopen", description: "De 10 kilometer hardloopwedstrijd is een populaire afstand waarbij hardlopers hun uithoudingsvermogen en snelheid testen. De afstand vereist een goede combinatie van duurvermogen en snelheid, waardoor het een geliefde discipline is binnen de hardloopgemeenschap.", oud: "1 uur en 20 minuten", pr: "55:58" },
    // Voeg hier eventueel meer oefeningen toe
];

// Functie om containerinhoud te wijzigen
function updateContainer() {
    const container = document.getElementById('exerciseContainer');
    const exercise = exercises[containerIndex];

    container.innerHTML = `
        <h1>${exercise.title}</h1>
        <p>${exercise.description}</p>

        <div class="sub-containers">
            <div class="container-oud">
                <h1>Oud</h1>
                <p>${exercise.oud}</p>
            </div>
            <div class="container-pr">
                <h1>PR</h1>
                <p>${exercise.pr}</p>
            </div>
        </div>
    `;
}

// Functie om naar de volgende container te gaan
function nextContainer() {
    containerIndex = (containerIndex + 1) % exercises.length;
    updateContainer();
}

// Functie om naar de vorige container te gaan
function prevContainer() {
    containerIndex = (containerIndex - 1 + exercises.length) % exercises.length;
    updateContainer();
}

// Initialiseer de container met de eerste oefening
updateContainer();