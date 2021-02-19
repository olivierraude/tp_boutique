<section class="liste" >

	<ul class="wrapper">

		<?php

			foreach($data as $produit)
			{
			?>
			<button class="grid-item" data-js-product disabled>
				<li value=<?= $produit["produitInventaire"]?> data-js-id>
					<img class="imgProduit" src=<?= $produit["produitImage"]?> data-js-image>
					<div class="refProduit">
						<p class="name" data-js-name> <?=$produit["produitNom"]?> </p>
						<p class="price" data-js-price> <?=$produit["produitPrix"] . "$"?> </p>
					</div>
				</li>
			</button>		
			<?php
			}
		?>

	</ul>

</section>
