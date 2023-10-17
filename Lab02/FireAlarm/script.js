document.addEventListener("DOMContentLoaded", function () {
    const fireButton = document.getElementById("fireButton");
    let isFire = false;

    fireButton.addEventListener("mouseover", function () {
        if (!isFire) {
            fireButton.classList.remove("levelC");
            fireButton.classList.add("levelB");
        }
    });

    fireButton.addEventListener("mouseout", function () {
        if (!isFire) {
            fireButton.classList.remove("levelB");
            fireButton.classList.add("levelC");
        }
    });

    fireButton.addEventListener("click", function () {
        if (isFire) {
            isFire = false;
            fireButton.classList.remove("levelA");
            fireButton.classList.add("levelC");
        } else {
            isFire = true;
            fireButton.classList.remove("levelC");
            fireButton.classList.add("levelA");
        }
    });
});
