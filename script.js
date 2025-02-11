// Define playlist URLs
var playlistUrls = {
    'Microeconomics': 'https://videolectures101.github.io/microeconomics/',
    'Macroeconomics': 'https://videolectures101.github.io/macroeconomics/',
    'InternationalEconomics': 'https://videolectures101.github.io/internationaleconomics/'
};

// Get DOM elements
var topicSelector = document.getElementById('topicSelector');
var goButton = document.getElementById('goButton');

// Enable/disable button based on selection
topicSelector.addEventListener('change', function () {
    goButton.disabled = !this.value;
});

// Navigate to selected playlist
goButton.addEventListener('click', function () {
    var selectedTopic = topicSelector.value;
    if (selectedTopic && playlistUrls[selectedTopic]) {
        window.open(playlistUrls[selectedTopic], '_blank');
    }
});
