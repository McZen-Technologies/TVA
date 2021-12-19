/**
 * Intercommunity VAT starts with the letters FR, 
 * followed by a key and ends with the company's SIREN number.
 * 
 * @api public
 */
class TVA {
	constructor(value) {
		this.value = value
	}

	isValid() {
		const regex = new RegExp('(FR)([0-9]{11}$)')

		if (!regex.test(this.value)) return false
    
		const cle = +this.value.slice(2, 4)
		const ctrlKey = (12 + 3 * (+this.value.slice(-9) % 97)) % 97
    
		return cle == ctrlKey
	}
}
