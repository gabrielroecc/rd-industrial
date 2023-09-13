new Glider(document.querySelector(".slider"), {
	slidesToShow: 1,
	dots: "#dots",
	draggable: true,
	arrows: {
		prev: ".glider-prev",
		next: ".glider-next",
	},
});

const lenis = new Lenis();

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.addEventListener("scroll", (e) => {
	const scrollY = window.scrollY;
	if (scrollY === 0 || scrollY <= 350) {
	}
});

const colorBg = "white";
const border = "red";
let tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".containerBenefits",
		start: "top center",
		end: "bottom center",
		scrub: true,
		markers: false,
	},
});
tl.to(".bgScroll", {
	x: 930,
	width: 310,
	opacity: "0",
});
let tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_4",
		start: "top center",
		end: "90% center",
		scrub: true,
		markers: false,
	},
});
tl2.to(".bar3", {
	x: 100,
	width: 310,
});
let tl3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_5_title_wrapper",
		start: "top center",
		end: "400% center",
		scrub: true,
		markers: false,
	},
});
tl3.to(".bar5", {
	x: -500,
	y: 25,
	height: 8,
	width: 250,
});

let tl4 = gsap.timeline({
	scrollTrigger: {
		trigger: ".section_6",
		start: "top center",
		end: "50% center",
		scrub: true,
		markers: false,
	},
});
tl4
	.to(".bar6", {
		width: 310,
	})
	.to(".services", {
		opacity: 1,
		y: 0,
	});

let tl5 = gsap.timeline({
	scrollTrigger: {
		trigger: ".products_area",
		start: "top center",
		end: "100px center",
		scrub: true,
		markers: false,
	},
});
tl5.to(".products_area", {
	opacity: 1,
	y: 0,
});
homeProducts.map(({ name, icon, img, description, cta, slug }) => {
	let productCard = document.createElement("div");
	const productArea = document.querySelector(".products_area");
	productCard.innerHTML = `<div class="product_card">
	<div class="card_title">
		<img src="${icon}" />
		<p>${name}</p>
	</div>
	<div class="card_img">
		<img src="${img}" />
	</div>
	<div class="card_description">
		<p>
		${description}
		</p>
		<div class="card_btn">
			<a href="${slug}.html">${cta ? cta : "Carregando"}</a>
		</div>
	</div>
</div>`;
	productArea.append(productCard);
});
