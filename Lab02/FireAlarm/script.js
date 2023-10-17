document.addEventListener("DOMContentLoaded", function () {
    const fireButton = document.getElementById("fireButton");
    const levelCContent = document.querySelector(".levelC-content");
    const levelBContent = document.querySelector(".levelB-content");
    const levelAContent = document.querySelector(".levelA-content");

    let currentState = "levelC";

    fireButton.addEventListener("mouseover", function () {
        if (currentState === "levelC") {
            currentState = "levelB";
            fireButton.classList.remove("levelC");
            fireButton.classList.add("levelB");
            levelCContent.style.display = "none"; 
            levelBContent.style.display = "block"; 
        }
    });

    fireButton.addEventListener("mouseout", function () {
        if (currentState === "levelB") {
            currentState = "levelC";
            fireButton.classList.remove("levelB");
            fireButton.classList.add("levelC");
            levelBContent.style.display = "none"; 
            levelCContent.style.display = "block";
        }
    });

    fireButton.addEventListener("click", function () {
        if (currentState === "levelC" || currentState === "levelB") {
            currentState = "levelA";
            fireButton.classList.remove("levelC", "levelB");
            fireButton.classList.add("levelA");
            levelCContent.style.display = "none"; 
            levelBContent.style.display = "none";
            levelAContent.style.display = "block"; 
        } else if (currentState === "levelA") {
            currentState = "levelC";
            fireButton.classList.remove("levelA");
            fireButton.classList.add("levelC");
            levelAContent.style.display = "none";
            levelCContent.style.display = "block";
        }
    });
});
