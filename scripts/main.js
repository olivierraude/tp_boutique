import ProductList from "./ProductList.js"

document.addEventListener("DOMContentLoaded", function() {
	
	let elProductList = document.querySelector('[data-js-list]'),
    product_list
    
    if (elProductList) product_list = new ProductList(elProductList)
});