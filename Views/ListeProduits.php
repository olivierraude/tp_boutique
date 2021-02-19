<section class="list-container" >

	<ul class="list-container_wrapper">

		<?php

			foreach($data as $produit)
			{
			?>
			<!-- <button class="grid-item" data-js-product disabled>
				<li value=<?= $produit["produitInventaire"]?> data-js-id> -->
					<div class="card" data-js-product disabled>
						<div class="card_img">
							<img src=<?= $produit["produitImage"]?> alt="image de pichet" data-js-image >
						</div>
						<div class="card_content">
							<h3 data-js-name><?=$produit["produitNom"]?></h3>
							<h2 class="card_price" data-js-price><?=$produit["produitPrix"] . "$"?></h2>
							<a href="#" class="card_buy">Ajouter au panier</a>
						</div>
					</div>
				<!-- </li>	
			</button> -->
			<?php
			}
		?>

	</ul>

</section>
