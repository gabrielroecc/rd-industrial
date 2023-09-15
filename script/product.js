const image = document.querySelectorAll(".galery_img_wrapper img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal_img");
const closeImg = document.querySelector(".close");

image.forEach((element) => {
	element.addEventListener("click", (e) => {
		const image = e.target.src;
		modal.style.opacity = 1;
		modal.style.pointerEvents = 1;
		modalImg.src = image;
	});
});
closeImg.addEventListener("click", (e) => {
	console.log("Clicou");
	modal.style.opacity = 0;
	modal.style.pointerEvents = none;
});
