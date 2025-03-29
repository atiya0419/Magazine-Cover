document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.querySelector(".subscribe-btn");
    const magazineCover = document.querySelector(".magazine-cover");
    const title = document.querySelector(".magazine-title");

    // Subscribe Button Hover Effect
    subscribeBtn.addEventListener("mouseover", function () {
        subscribeBtn.textContent = "🚀 Get Your Copy!";
    });

    subscribeBtn.addEventListener("mouseout", function () {
        subscribeBtn.textContent = "Subscribe Now";
    });

    // Magazine Cover Hover Effect
    magazineCover.addEventListener("mouseover", function () {
        magazineCover.style.boxShadow = "0px 0px 30px rgba(255, 255, 255, 0.5)";
    });

    magazineCover.addEventListener("mouseout", function () {
        magazineCover.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.2)";
    });

    // Dynamic Title Effect
    let titleTexts = ["STELLAR TIMES", "DISCOVER THE UNKNOWN", "JOURNEY BEYOND"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % titleTexts.length;
        title.textContent = titleTexts[index];
    }, 3000);

    // Click Event - Show Message
    subscribeBtn.addEventListener("click", function () {
        alert("🎉 Thank you for your interest! Your copy of Stellar Times is on its way! 🚀");
    });
});
