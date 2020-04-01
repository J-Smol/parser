window.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	let textNodes = [];
	function recursy (el) {
		el.childNodes.forEach(node => {
			console.log(node);
			//получаем всё со страницы
			/* 
			if (el.childNodes.length > 1) {
				recursy(node);
			} else {
				textNodes.push(node.textContent);
			}
			*/
			//получаем по имени тега
			/*
			if (node.nodeName === "#text") {
				return;
			} else {
				recursy(node);
			}
			*/
			//находим все заголовки всех порядков со страницы
			if (node.nodeName.match(/^H\d/)) {
				const obj = {
					header: node.nodeName,
					content: nod.textContent
				}
				textNodes.push(obj);
			} else {
				recursy(node);
			}
		});
	}
	recursy(body); 

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(textNodes)
	})
	.then(response => response.json())
	.then(json => console.log(json)); 
});















