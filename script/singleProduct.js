let bodyPdp = document.querySelector(".pdp");
const getWindowLocation = window.location.search;
const getWindowLocationSlug = getWindowLocation.replace("?slug=", "");

const getProduct = allProducts.find(
	(product) => product.slug === getWindowLocationSlug
);
if (getProduct) {
	bodyPdp.innerHTML = `
		<header>
			<div class="container">
				<img src="./img/logo.png" alt="" />
				<div class="email_and_nav">
					<div class="email_tel">
						<div class="email">
							<img src="./img/email-icon.svg" alt="" />
							<p>rdindustrial@rdindustrial.com.br</p>
						</div>
						<div class="tel">
							<img src="./img/tel-icon.svg" alt="" />
							<p>(64) 3431-5578</p>
						</div>
					</div>
					<nav>
						<ul>
							<li>
								<a href="index.html">HOME</a>
							</li>

							<li>
								<a href="">SERVIÇOS</a>
								<ul class="subnav">
									<li>
										<a href="">Corte a Laser CNC e Dobra</a>
									</li>
									<li>
										<a href=""
											>Locação de Plataforma de Trabalho em Altura (PTA)</a
										>
									</li>
								</ul>
							</li>

							<li>
								<a href="products.html">PRODUTOS</a>
							</li>

							<li>
								<a href="">CONTATO</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	<section class="section_4">
		<div class="container">
			<div class="text_wrapper">
				<p class="section_4_first_title">PRODUTO</p>
				<h1>${getProduct.name}</h1>
				<p class="section_4_text">
					${getProduct.pdpText}
				</p>
				${
					getProduct.table
						? `<img class="table" src=${getProduct.table} alt="" />`
						: ""
				}
				${
					getProduct.pdpHighlight
						? `<p class="section_4_text_hightlight">
				${getProduct.pdpHighlight}
			</p>`
						: ""
				}
				<a href="/" class="btn">ENTRAR EM CONTATO</a>
			</div>

			<div class="img_wrapper">
				<img src=${getProduct.img} alt="" />
				${
					getProduct.miniatureImg1
						? `<div class="imgs_preview">
				<img src=${getProduct.miniatureImg1} alt="" />
				<img src=${getProduct.miniatureImg2} alt="" />
				<img src=${getProduct.miniatureImg3} alt="" />
				<img src=${getProduct.miniatureImg4} alt="" />
			</div>`
						: ""
				}
				
			</div>
		</div>
	</section>
	
	<section class="section_2">
			<div class="container containerBenefits">
				<div class="benefits b1">
					<img src="./img/benefit-icon-1.svg" alt="" />
					<div class="benefit_info">
						
						<p class="benefit_text">
						Aumento da produtividade e da segurança no local de trabalho;
						</p>
					</div>
				</div>

				<div class="benefits b2">
					<img src="./img/benefit-icon-2.svg" alt="" />
					<div class="benefit_info">
						
						<p class="benefit_text">
						Acesso a pontos elevados, sobrepondo obstáculos, máquinas e outros equipamentos instalados em espaços restritos;
						</p>
					</div>
				</div>

				<div class="benefits b3">
					<img src="./img/benefit-icon-3.svg" alt="" />
					<div class="benefit_info">
						
						<p class="benefit_text">
						Redução de gastos com problemas não estratégicos.
						</p>
					</div>
				</div>
			</div>
		</section>
		<footer>
			<div class="container">
				<div class="nav_wrapper">
					<nav>
						<ul>
							<li>
								<a href="">HOME</a>
							</li>

							<li>
								<a href="">SERVIÇOS</a>
							</li>

							<li>
								<a href="">PRODUTOS</a>
							</li>

							<li>
								<a href="">CONTATO</a>
							</li>
						</ul>
					</nav>
				</div>

				<div class="footer_info">
					<div class="email_tel">
						<div class="email">
							<img src="./img/email-icon.svg" alt="" />
							<p>rdindustrial@rdindustrial.com.br</p>
						</div>
						<div class="tel">
							<img src="./img/tel-icon.svg" alt="" />
							<p>(64) 3431-5578</p>
						</div>
						<div class="email">
							<img src="./img/email-icon.svg" alt="" />
							<p>
								Rua 7, nº 200, Setor Santa Rita,<br />
								Itumbiara - GO - CEP 75515-390
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="direitos">
					© 2023 RD Industrial - Fabricação de equipamentos industriais -
					Itumbiara - GO
				</div>
			</div>
		</footer>
		
		<div class="dev_wrapper">
			<div class="container">
				<div class="prod">
					<p>Direitos e produção <span>Ofertei Digital</span></p>
				</div>
				<div class="dev">
					<a href=""
						><p>Desenvolvimento <span>ROEC Desenvolvimento Web</span></p></a
					>
					<a href=""><img src="./img/logoRoec.svg" alt="" /></a>
				</div>
			</div>
		</div>`;
}
const imgPreview = document.querySelectorAll(".imgs_preview img");

const imgWrapper = document.querySelector(".img_wrapper img");

imgPreview.forEach((item) => {
	item.addEventListener("click", () => {
		const src = item.src;
		imgWrapper.src = src;
	});
});
