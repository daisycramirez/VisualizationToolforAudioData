document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const drone = params.get("drone");
    const audioIndex = params.get("audio");
    const mainContent = document.getElementById("visual-content");

    if (drone && audioIndex) {
        mainContent.innerHTML = generateVisualsContent(drone, audioIndex);
    } else {
        mainContent.innerHTML = "<p>Visualization not found.</p>";
    }
});

function generateVisualsContent(drone, audioIndex) {
    const droneName = drone.replace("_", " ");
    const spectrogramImage = `Spectrogram_Plots/${drone}/${drone}_${audioIndex}_spectrogram.png`;
    const mfccImage = `MFCC_Plots/${drone}/${drone}_${audioIndex}_mfcc.png`;
    const droneImage = getDroneImagePath(drone);

    console.log("Spectrogram Image Path:", spectrogramImage);
    console.log("MFCC Image Path:", mfccImage);
    console.log("Drone Image Path:", droneImage);


    return `
        <h2>Visualization of ${droneName} and Audio ${audioIndex}</h2>
        <img src="${droneImage}" alt="${droneName}" style="width: 300px; display: block; margin: 0 auto;">
        <div class="visualization-container">
            <div class="visualization">
                <h3>Spectrogram</h3>
                <img src="${spectrogramImage}" alt="Spectrogram of ${droneName} Audio ${audioIndex}">
            </div>
            <div class="visualization mfcc-container">
                <h3>MFCC</h3>
                <img src="${mfccImage}" alt="MFCC of ${droneName} Audio ${audioIndex}">
            </div>
        </div>
    `;
}


function getDroneImagePath(drone) {
    const extensions = ['jpg', 'jpeg', 'png', 'webp'];
    for (const ext of extensions) {
        const path = `drone_white/${drone}.${ext}`;
        if (imageExists(path)) {
            return path;
        }
    }
    return ''; // Return a default image path or empty string if not found
}

function imageExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}
