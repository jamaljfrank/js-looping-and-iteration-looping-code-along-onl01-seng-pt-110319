const cards = [];

function writeCards(names, occasion) {
	for (let i = 0; i < names.length; i++) {
		cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
	}
	return cards;
}

function countDown(i) {
	while (i >= 0) {
		console.log(i--);
	}
}
