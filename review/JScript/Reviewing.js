document.addEventListener("DOMContentLoaded", () => {
    const productSelection = document.getElementById("product-selection");
    const productImage = document.getElementById("product-image");
    const productName = document.getElementById("product-name");
    const reviewTextArea = document.querySelector(".review-text");
    const ratingValue = document.getElementById("rating-value");
    const starRating = document.getElementById("star-rating");

    let currentRating = 0;

    // โหลดค่าที่บันทึกไว้จาก localStorage
    const savedReview = JSON.parse(localStorage.getItem("reviewData"));
    if (savedReview) {
        productName.textContent = savedReview.productName;
        productImage.src = savedReview.productImage;
        reviewTextArea.value = savedReview.reviewText;
        ratingValue.textContent = `Rating: ${savedReview.rating.length}/5`;
        currentRating = savedReview.rating.length;

        highlightStars(currentRating);
    }

    // เปลี่ยนสินค้าใน Dropdown
    productSelection.addEventListener("change", () => {
        const selectedOption = productSelection.options[productSelection.selectedIndex];
        const selectedImage = selectedOption.getAttribute("data-image");
        const selectedName = selectedOption.getAttribute("data-name");

        productImage.src = selectedImage;
        productName.textContent = selectedName;
    });

    // การให้คะแนนแบบดาว
    starRating.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("star")) {
            highlightStars(event.target.dataset.value);
        }
    });

    starRating.addEventListener("mouseout", () => {
        highlightStars(currentRating);
    });

    starRating.addEventListener("click", (event) => {
        if (event.target.classList.contains("star")) {
            currentRating = event.target.dataset.value;
            ratingValue.textContent = `Rating: ${currentRating}/5`;
            highlightStars(currentRating);
        }
    });

    // ฟังก์ชันสำหรับการไฮไลต์ดาว
    function highlightStars(rating) {
        Array.from(starRating.children).forEach((star, index) => {
            star.style.color = index < rating ? "gold" : "gray";
        });
    }

    // การอัปโหลดรูปภาพและแสดงตัวอย่าง
    document.getElementById("image-upload").addEventListener("change", (event) => {
        const files = event.target.files;
        const container = document.getElementById("image-preview-container");

        container.innerHTML = "";

        Array.from(files).forEach((file) => {
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const img = document.createElement("img");
                    img.src = e.target.result;
                    container.appendChild(img);
                };

                reader.readAsDataURL(file);
            }
        });
    });

    // เมื่อคลิกปุ่ม confirm
    document.querySelector(".confirm-btn").addEventListener("click", () => {
        const reviewText = reviewTextArea.value;

        const reviewData = {
            username: "Username", // คุณสามารถเปลี่ยนให้เป็นค่าที่ได้จากระบบผู้ใช้
            date: new Date().toISOString().split('T')[0],
            rating: "⭐".repeat(currentRating),
            productName: productName.textContent,
            productImage: productImage.src,
            reviewText,
        };

        // บันทึกข้อมูลใน localStorage
        localStorage.setItem("reviewData", JSON.stringify(reviewData));

        // เปลี่ยนหน้าไปยัง ViewReview.html
        window.location.href = "./ViewReview.html";
    });
});
