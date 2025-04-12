
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayActive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayActive");
};

function copyLink() {
  const link = "https://www.linkedin.com/in/-mansha-singh-b89967224/";
  navigator.clipboard.writeText(link)
    .then(() => {
      alert("✅ Profile link copied to clipboard!");
    })
    .catch((err) => {
      alert("❌ Failed to copy the link.");
      console.error("Copy failed:", err);
    });
}
