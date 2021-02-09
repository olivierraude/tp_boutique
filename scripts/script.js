document.addEventListener("DOMContentLoaded", function() {
	
	let components = document.querySelectorAll('[data-component]');

	for (let i = 0, l = components.length; i < l; i++) {
		
		let componentDataSet = components[i].dataset.component;
		let componentElement = components[i];


		for (let key of Object.keys(classMapping)) {
			
			//console.log(`${key}`);
			let classInMap = `${key}`;
			//console.log(classInMap);

			if (componentDataSet == classInMap) new classMapping[componentDataSet](componentElement);
		}
	}
});