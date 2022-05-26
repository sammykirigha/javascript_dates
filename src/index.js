
	if (!!localStorage.quote) {
		//fetch quote //undefined
		const now = new Date();
		const expDate = parseInt(localStorage.getItem('expiryDate'))
		
		if (now.getTime() > expDate.getItem()) {
		    localStorage.removeItem('quote');
			localStorage.removeItem('quote');
			
		 assignQuoteToLocalStorage()
	 } else {
		 let quote = JSON.parse(localStorage.getItem('quote'))
		 setQuoteOfTheDay(quote)
		}
		
	} else {
		assignQuoteToLocalStorage()
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