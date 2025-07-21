import teamData from "./group_photo.js";

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");

teamData.forEach(({ id, imgurl }) => {
  const img = document.createElement("img");
  img.src = imgurl;
  img.alt = `팀 사진 ${id}`;
  img.className = "team-image";

  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = imgurl;
    modalCaption.textContent = img.alt;
  });

  gallery.appendChild(img);
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
