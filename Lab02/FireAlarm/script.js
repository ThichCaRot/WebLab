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
            levelCContent.style.display = "none"; // Ẩn nội dung trạng thái 1
            levelBContent.style.display = "block"; // Hiển thị nội dung trạng thái 2
        }
    });

    fireButton.addEventListener("mouseout", function () {
        if (currentState === "levelB") {
            currentState = "levelC";
            fireButton.classList.remove("levelB");
            fireButton.classList.add("levelC");
            levelBContent.style.display = "none"; // Ẩn nội dung trạng thái 2
            levelCContent.style.display = "block"; // Hiển thị nội dung trạng thái 1
        }
    });

    fireButton.addEventListener("click", function () {
        if (currentState === "levelC" || currentState === "levelB") {
            currentState = "levelA";
            fireButton.classList.remove("levelC", "levelB");
            fireButton.classList.add("levelA");
            levelCContent.style.display = "none"; // Ẩn nội dung trạng thái 1
            levelBContent.style.display = "none"; // Ẩn nội dung trạng thái 2
            levelAContent.style.display = "block"; // Hiển thị nội dung trạng thái 3
        } else if (currentState === "levelA") {
            currentState = "levelC";
            fireButton.classList.remove("levelA");
            fireButton.classList.add("levelC");
            levelAContent.style.display = "none"; // Ẩn nội dung trạng thái 3
            levelCContent.style.display = "block"; // Hiển thị nội dung trạng thái 1
        }
    });
});
