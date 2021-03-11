<main  data-js-list <?= $data["data-js"] ?>>
	<div class="page-container">
		<div data-component="ProductList">
			<label  for="filtre-select">
				Filtre:
			</label>
			<select class="filter" data-js-select>

				<option value="nom ASC" selected>De A à Z</option>
				<option value="nom DESC">De Z à A</option>
				<option value="prix ASC">Par ordre de prix - au +</option>
				<option value="prix DESC">Par ordre de prix + au -</option>

			</select>

			<!-- <div data-js-results></div> -->
		</div>
	