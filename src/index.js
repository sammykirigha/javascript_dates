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