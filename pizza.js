//JavaScript Document


//access the JSON file using an XHR object

let requestURL = 'https://msotera.github.io/JSON-Georgian/pizza.json';

//create new XHR Object, KHR obect allows us to fetch data without a page refresh

let request = new XMLHttpRequest();

//opening a new request
request.open('GET', requestURL);

//request type
request.responseType = 'json';

//send the request using the send method
request.send();


//wait for the request to be returned, store the response in a variable, invoke pizzaTypes function with pizzaTypes as argument
request.onload = function()
{
	let plentyPizza = request.response;
	console.log(plentyPizza);
	pizzaTypes(plentyPizza);
};


function pizzaTypes(jsonObj)
{
	let pizzaTypes = jsonObj.pizzaTypes;
	let section = document.querySelector('section');
	for(let i = 0; i < pizzaTypes.length; i++)
	{
		//build HTML elements
		let article = document.createElement('article');

		let h2 = document.createElement('h2');

		let img = document.createElement('img');

		let p1 = document.createElement('p');

		let p2 = document.createElement('p');

		let ul = document.createElement('ul');



		img.setAttribute('src', 'https://msotera.github.io/JSON-Georgian/assets/' + pizzaTypes[i].image);

		img.setAttribute('alt', pizzaTypes[i].image);

		h2.textContent = pizzaTypes[i].name;

		p1.textContent = 'Size ' + pizzaTypes[i].size;

		p2.textContent = 'Price ' + pizzaTypes[i].price;

		

		let toppings = pizzaTypes[i].toppings;

		for(let j =0; j < toppings.length; j++)
		{
			let listItem = document.createElement('li');
			listItem.textContent = toppings[j];
			ul.appendChild(listItem);
		}

		

		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(ul);
		section.appendChild(article);


	}	
}