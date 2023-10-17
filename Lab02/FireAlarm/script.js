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
    const rescueForm = document.getElementById("rescueForm");
    const notEvacuatedTable = document.getElementById("notEvacuatedTable");
    const evacuatedTable = document.getElementById("evacuatedTable");

    rescueForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const name = nameInput.value;

        // Tạo một hàng mới trong bảng "Chưa sơ tán"
        const newRow = notEvacuatedTable.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.innerHTML = name;
        cell2.innerHTML = '<input type="checkbox" class="evacuateCheckbox">';

        nameInput.value = ""; // Xóa giá trị của trường nhập liệu sau khi gửi

        // Xử lý sự kiện chuyển dữ liệu từ "Chưa sơ tán" sang "Đã sơ tán"
        const evacuateCheckboxes = document.querySelectorAll(".evacuateCheckbox");
        evacuateCheckboxes.forEach(function (checkbox) {
            checkbox.addEventListener("change", function () {
                if (checkbox.checked) {
                    // Di chuyển hàng từ "Chưa sơ tán" sang "Đã sơ tán"
                    const row = checkbox.parentElement.parentElement;
                    evacuatedTable.appendChild(row);
                }
            });
        });
    });
});
