import { ProductList } from "./ProductList.js"

document.addEventListener("DOMContentLoaded", function() {
	
	let elProductList = document.querySelector('[data-js-list]')
    console.log(elProductList)
    
    if (elProductList) ProductList = new ProductList(elProductList)
});