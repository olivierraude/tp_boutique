<ul class="page-container_wrapper" >
	<?php

		foreach($data as $produit)
		//var_dump($produit);
		{
		?>
			<li class="card"
				value="<?= $produit["inventaire"]?>" 
				data-js-product
				data-item-id = <?= $produit['id'] ?>
				data-item-nom = <?= str_replace(" ","_",$produit["nom"]) ?>
				disabled>
				<article>
					<div class="card_img">
						<img src="<?= $produit["lienimage"]?>" alt="image de pichet" data-js-image >
					</div>
					<div class="card_content">
						<h3 data-item-name><?=$produit["nom"]?></h3>
						<h2 class="card_price" data-js-price><?=$produit["prix"] . "$"?></h2>
						<button class="card_buy" data-js-buy>Ajouter au panier</button>
						<p data-js-inventaire>Disponible : <?=$produit["inventaire"]?></p>
					</div>
				</article>
			</li>	
		<?php
		}
	?>
</ul>