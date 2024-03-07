// const body = document.querySelector("body"),
//     sidebar = body.querySelector(".sidebar"),
//     toggle = body.querySelector(".toggle"),
//     seartchBtn = body.querySelector(".search-box"),
//     modeSwitch = body.querySelector(".toggle-switch"),
//     modeText = body.querySelector(".mode-text");

//     toggle.addEventListener("click", () => {
//         sidebar.classList.toggle("close");
//     });

//     modeSwitch.addEventListener("click", () => {
//         body.classList.toggle("dark");

//         if (body.classList.contains("dark"))
//             modeText.innerText = "Light Mode";
//         else
//             modeText.innerText = "Dark Mode";
//     });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
            // Lấy tham chiếu đến video
            var video = document.getElementById("video");

            // Thiết lập thời gian của video về 0 và chạy lại
            video.currentTime = 0;
            video.play();
        },
    },
});

// Lấy tham chiếu đến ảnh và video
var image = document.getElementById("image");
var video = document.getElementById("video");

// Đảm bảo rằng video được phát khi hiển thị
video.play();