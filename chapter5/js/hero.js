function generateHero() {
    event.preventDefault();
    var adjective;
    var name;
    var power;
    adjective = ["Amazing", "Mighty", "Incredible", "Fantastic", "Despicable"];
    name = ["Cricket-Man", "Buzzard-Girl", "Codemonger", "Satchsquatch", "Possumboy"];
    power = ["decode any password", "read one thousand words per minute", "find any missing sock", "control the mind of every insect", "win at any food challenge"];
    var ranAdj = adjective[Math.round(Math.random() * 4)];
    var ranNam = name[Math.round(Math.random() * 4)];
    var ranPow = power[Math.round(Math.random() * 4)];
    var hero = document.getElementById('hero');
    hero.innerHTML = "The " + ranAdj + " " + ranNam + " can " + ranPow + ".";
}
