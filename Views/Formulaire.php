<h1>Passez votre commande</h1>


<form data-component="Form">

	<div>
		<label for="nom">Nom<sup>*</sup> :</label>
		<input type="text" id="nom" name="nom" data-js-nom required>
	</div>

	<div>
		<label for="prenom">Prénom<sup>*</sup> :</label>
		<input type="text" id="prenom" name="prenom" data-js-prenom required>
	</div>

	<div>
		<label for="adresse">Adresse<sup>*</sup> :</label>
		<input type="text" id="adresse" name="adresse" data-js-adresse required>
	</div>

	<div>
		<label for="codepostal">Code Postal<sup>*</sup> :</label>
		<input type="text" id="codepostal" name="codepostal" data-js-codepostal required>
	</div>

	<div>
		<label for="courriel">Courriel<sup>*</sup> :</label>
		<input type="email" id="courriel" name="courriel" data-js-courriel required>
	</div>
    
    <div>
		<label for="optin">Voulez-vous recevoir l'infolettre<sup>*</sup> :</label>
		<input type="radio" id="optin" name="optin" data-js-optin required>
	</div>
    
    <div>
		<label for="credit">Carte de crédit<sup>*</sup> :</label>
		<input type="email" id="credit" name="credit" data-js-credit required>
	</div>
    
    <div>
		<label for="expiration">Date d'expiration<sup>*</sup> :</label>
		<input type="email" id="expiration" name="expiration" data-js-expiration required>
	</div>
    
    <div>
		<label for="code">Code de sécurité<sup>*</sup> :</label>
		<input type="email" id="code" name="code" data-js-code required>
	</div>

	<div>
		<button class="btn" data-js-submit>Postuler</button>
	</div>

</form>