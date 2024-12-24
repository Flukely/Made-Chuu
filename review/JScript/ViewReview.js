function loadReview() {
    const reviewData = JSON.parse(localStorage.getItem("reviewData"));
    if (reviewData) {
        // อัปเดตส่วน header ของรีวิว
        document.querySelector(".review-header img").src = "./Pic/usericon.png";
        document.querySelector(".review-header div > div:nth-child(1) b").textContent = reviewData.username;
        document.querySelector(".review-header div > div:nth-child(2)").textContent = reviewData.date;
        document.querySelector(".review-header div > div:nth-child(3)").innerHTML = reviewData.rating;

        // อัปเดตส่วน content ของรีวิว
        document.querySelector(".review-content img").src = reviewData.productImage;
        document.querySelector(".review-content img").alt = reviewData.productName;
        document.querySelector(".review-content div").innerHTML = `<b>${reviewData.productName}</b>: ${reviewData.reviewText}`;
    } else {
        console.log("No review data found in localStorage.");
    }
}

// ฟังก์ชันสำหรับสร้าง HTML ของดาว
function generateStars(rating) {
    const starCount = rating.length; // จำนวนดาวจากการรีวิว
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < starCount ? "★" : "☆";
    }
    return stars;
}

// ฟังก์ชันบันทึกรีวิวและเปลี่ยนหน้า
function goToReviewing(productName, productImage, productSelection, reviewDetails) {
    // Save review details to localStorage
    localStorage.setItem('reviewProductName', productName);
    localStorage.setItem('reviewProductImage', productImage);
    localStorage.setItem('reviewProductSelection', productSelection);
    localStorage.setItem('reviewDetails', reviewDetails);

    // เปลี่ยนหน้าไปที่ Reviewing.html
    window.location.href = "./Reviewing.html";
}

// การตั้งค่า event listener สำหรับการคลิกที่ review section
document.querySelector('.review-section').addEventListener('click', function() {
    goToReviewing('Disrabbit', './Pic/dis.jpg', 'ตัวเลือกสินค้า xx', 'รายละเอียดที่เขียนไว้');
});

// โหลดรีวิวเมื่อหน้าโหลดเสร็จ
window.onload = loadReview;
