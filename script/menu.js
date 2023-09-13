document.querySelector(".open_menu img").addEventListener("click", () => {
	document.querySelector(".email_and_nav").classList.add("active");
});
document.querySelector(".close_menu img").addEventListener("click", () => {
	document.querySelector(".email_and_nav").classList.remove("active");
});
