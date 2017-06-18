
let outputDiv = document.getElementById('output-target');
let articleEl = document.getElementsByClassName('article-section');
let pageTitle = document.getElementById('page-title');
let input = document.getElementById('keypress-input');

function handleSectionClick() {
	console.log(event);
	let elementText = event.target.innerHTML;
	outputDiv.innerHTML = `You clicked on the ${elementText} section`;
}

for (var i = 0; i < articleEl.length; i++) {
	articleEl[i].addEventListener('click', handleSectionClick);
}

pageTitle.addEventListener('mouseover', function() {
	outputDiv.innerHTML = "You moved your mouse over the header";
});

pageTitle.addEventListener('mouseleave', function() {
	outputDiv.innerHTML = "You left me!!";
});

input.addEventListener('keyup', function() {
	outputDiv.innerHTML = input.value;
});

let piggie = document.getElementById('guinea-pig');

document.getElementById('add-color').addEventListener('click', function() {
	piggie.classList.toggle('blue');
	console.log(piggie, piggie.classList);
})

document.getElementById('make-large').addEventListener('click', function() {
	piggie.classList.toggle('large');
	console.log(piggie, piggie.classList);
})

document.getElementById('add-border').addEventListener('click', function() {
	piggie.classList.toggle('border');
	console.log(piggie, piggie.classList);
})

document.getElementById('add-rounding').addEventListener('click', function() {
	piggie.classList.toggle('round');
	console.log(piggie, piggie.classList);
})

