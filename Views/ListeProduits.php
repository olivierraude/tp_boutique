<section class="list-container" >

	<ul class="list-container_wrapper">

		<?php

			foreach($data as $produit)
			{
			?>
				<li value=<?= $produit["produitInventaire"]?> data-js-id>
					<div class="card" disabled>
						<div class="card_img">
							<img src=<?= $produit["produitImage"]?> alt="image de pichet" data-js-image >
						</div>
						<div class="card_content">
							<h3 data-js-name><?=$produit["produitNom"]?></h3>
							<h2 class="card_price" data-js-price><?=$produit["produitPrix"] . "$"?></h2>
							<button class="card_buy" data-js-product disabled>Ajouter au panier</button>
						</div>
					</div>
				</li>	
			<?php
			}
		?>

	</ul>

</section>
