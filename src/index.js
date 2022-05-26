 function checkIfQouteIsLoaded() {
	if (!localStorage.quote) {
		//fetch quote //undefined
		const quote = getQouteFromApi();
		const expiryDate = getExpiryDate();
		localStorage.setItem('quote', quote);
		localStorage.setItem('expiryDate',expiryDate);
	 }
	 const now = new Date();
	 const expDate = localStorage.getItem('expiryDate')

	 if (now.getTime() > expDate.getItem()) {
		 const getQoute = localStorage.getItem('quote')
		 const page = document.createElement('div')
		 const showQuote = document.createElement('p')
		 showQuote.innerHTML = getQoute
		 append(page, showQuote)
	 } else {
		 localStorage.removeItem('expiryDate', expiryDate)
		 localStorage.removeItem('quote', quote)
	 }
}

function append(parent, el) {
	return parent.appendChild(el)
}

function getSecondsToMidnight(n) {
	return (
		((24 - n.getHours() - 1) * 60 * 60) + ((60 - n.getMinutes() - 1) * 60) + (60 - n.getSeconds())
	)
}

const assignQuoteToLocalStorage = () => {
	getQouteFromApi().then((quote) => {
		const currentDate = new Date();
		const expiry = currentDate.getTime() + (getSecondsToMidnight(currentDate) * 1000)

		localStorage.quote = JSON.stringify(quote);
		localStorage.expiry = expiry;

		setQuoteOfTheDay(quote)
	})
}