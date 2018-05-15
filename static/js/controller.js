function postCard(card) {
	document.getElementById('cardValue').innerHTML = card

	document.getElementById('cardImg').src = "static/images/200px-Playing_card_" + card.suit.toLowerCase() + "_" + card.val.toString().slice(0,1) + ".svg.png"
}

function predictHigh(card) {
	nextCard = deck.drawCard()
	let currVal
	let nextVal
	if (card.val == 'Ace') {
		currVal = card.valNum[2]
	}
	else {
		currVal = card.valNum
	}
	if (nextCard.val == 'Ace') {
		nextVal = nextCard.valNum[2]
	}
	else {
		nextVal = nextCard.valNum
	}

	if (nextVal > currVal) {
		document.getElementById('results').innerHTML = "CORRECT!"
		streak = parseInt(document.getElementById('streak').innerHTML)
		streak += 1
		document.getElementById('streak').innerHTML = streak
	}
	else if (nextVal == currVal) {
		document.getElementById('results').innerHTML = "SAME: STREAK NOT LOST"
	}
	else {
		document.getElementById('results').innerHTML = 'INCORRECT'
		document.getElementById('streak').innerHTML = '0'
	}

	postCard(nextCard)

	return nextCard
}

function predictLow(card) {
	nextCard = deck.drawCard()
	let currVal
	let nextVal
	if (card.val == 'Ace') {
		currVal = card.valNum[2]
	}
	else {
		currVal = card.valNum
	}
	if (nextCard.val == 'Ace') {
		nextVal = nextCard.valNum[2]
	}
	else {
		nextVal = nextCard.valNum
	}

	if (nextVal < currVal) {
		document.getElementById('results').innerHTML = "CORRECT!"
		streak = parseInt(document.getElementById('streak').innerHTML)
		streak += 1
		document.getElementById('streak').innerHTML = streak
	}
	else if (nextVal == currVal) {
		document.getElementById('results').innerHTML = "SAME: STREAK NOT LOST"
	}
	else {
		document.getElementById('results').innerHTML = 'INCORRECT'
		document.getElementById('streak').innerHTML = '0'
	}

	postCard(nextCard)

	return nextCard
}