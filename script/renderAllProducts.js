allProducts.map(({ name, icon, img, description, cta, slug }) => {
	let allProductCard = document.createElement("div");
	const allProductArea = document.querySelector(".all_products_area");
	allProductCard.innerHTML = `<div class="product_card">
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
	allProductArea.append(allProductCard);
});
