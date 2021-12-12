class TVA {
	constructor(value) {
		this.value = value
	}

	isValid() {
		const regex = new RegExp('(FR)([0-9A-Z]{2}[0-9]{9}$)')

		if (!regex.test(this.value)) return false
    
		const siren = +this.value.slice(4, 13)
		const cle = +this.value.slice(2, 4)
		const ctrlKey = (12 + 3 * (siren % 97)) % 97
    
		return cle == ctrlKey
	}
}
