import teamData from "./group_photo.js";

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

let currentIndex = 0;

function showModal(index) {
  currentIndex = index;
  modal.style.display = "flex";
  modalImg.src = teamData[index].imgurl;
  modalCaption.textContent = `팀 사진 ${teamData[index].id}`;
}

teamData.forEach(({ id, imgurl }, index) => {
  const img = document.createElement("img");
  img.src = imgurl;
  img.alt = `팀 사진 ${id}`;
  img.className = "team-image";

  img.addEventListener("click", () => {
    showModal(index);
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

modalPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + teamData.length) % teamData.length;
  showModal(currentIndex);
});

modalNext.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % teamData.length;
  showModal(currentIndex);
});
