function complement (DNA) {
	DNA = DNA.split("")
	for (let i = 0; i < DNA.length; i++) {
		switch(DNA[i]) {
			case "A":
				DNA[i] = "T"
				break
			case "T":
				DNA[i] = "A"
				break
			case "G":
				DNA[i] = "C"
				break
			case "C":
				DNA[i] = "G"
				break
			default:
				return "Please input proper DNA"
		}
	}
	return DNA.join("")
}

function transcribe (DNA) {
	// return RNA
	RNA = DNA.split("")
	for (let i = 0; i < RNA.length; i++) {
		switch(RNA[i]) {
			case "A":
				RNA[i] = "U"
				break
			case "T":
				RNA[i] = "A"
				break
			case "G":
				RNA[i] = "C"
				break
			case "C":
				RNA[i] = "G"
				break
			default:
				return "Please input proper DNA"
		}
	}
	return RNA.join("")
}

function translate (RNA) {
	RNA = RNA.split("")
	
	peptide = []
	var start = 0
	for (let i = 0; i < RNA.length; i++) {
		if (RNA[i] === "A" && RNA[i+1] === "U" && RNA[i+2] === "G") {
			start = i
		}
	}
	RNA = RNA.slice(start)
	len = Math.floor(RNA.length/3)
	for (let i = 0; i < len; i++) {
		switch(RNA[i * 3]) {
			case "A":
				switch(RNA[i * 3 + 1]) {
					case "A":
						switch(RNA[i * 3 + 2]) {
							case "A":
							case "G":
								peptide.push("Lys")
								break
							case "U":
							case "C":
								peptide.push("Asn")								
								break
							default:
								return "Please input proper RNA"
						}
						break
					case "U":
						switch(RNA[i * 3 + 2]) {
							case "A":
							case "U":
							case "C":
								peptide.push("Ile")
								break
							case "G":
								peptide.push("Met")
								break
							default:
								return "Please input proper RNA"
						}
						break
					case "G":
						switch(RNA[i * 3 + 2]) {
							case "A":
							case "G":
								peptide.push("Arg")
								break
							case "U":
							case "C":
								peptide.push("Asn")
								break
							default:
								return "Please input proper RNA"
						}
						break
					case "C":
						peptide.push("Thr")
						break
					default:
						return "Please input proper RNA"
				}
				break
			case "U":
				switch(RNA[i * 3 + 1]) {
					case "A":
						switch(RNA[i * 3 + 2]) {
							case "A":
							case "G":
								peptide.push("(Stop)")
								return peptide.join("-")
								break
							case "U":
							case "C":
								peptide.push("Tyr")								
								break
							default:
								return "Please input proper RNA"
						}
						break
					case "U":
						switch(RNA[i * 3 + 2]) {
							case "U":
							case "C":
								peptide.push("Phe")
								break
							case "A":
							case "G":
								peptide.push("Leu")
								break
							default:
								return "Please input proper RNA"
						}
						break
					case "G":
						switch(RNA[i * 3 + 2]) {
							case "A":
								peptide.push("(Stop)")
								return peptide.join("-")
								break
							case "G":
								peptide.push("Trp")
								break
							case "U":
							case "C":
								peptide.push("Cys")
								break
							default:
								return "Please input proper RNA"
						}
						break
					case "C":
						peptide.push("Ser")
						break
					default:
						return "Please input proper RNA"
				}
				break
			case "G":
				switch(RNA[i * 3 + 1]) {
					case "A":
						switch(RNA[i * 3 + 2]) {
							case "A":
							case "G":
								peptide.push("Glu")
								break
							case "U":
							case "C":
								peptide.push("Asp")
								break
							default:
								return "Please input proper RNA"
						}
						break
					case "U":
						peptide.push("Val")
						break
					case "G":
						peptide.push("Gly")
						break
					case "C":
						peptide.push("Ala")
						break
					default:
						return "Please input proper RNA"
				}
				break
			case "C":
				switch(RNA[i * 3 + 1]) {
					case "A":
						switch(RNA[i * 3 + 2]) {
							case "A":
							case "G":
								peptide.push("Gln")
								break
							case "U":
							case "C":
								peptide.push("Asn")
								break
							default:
								return "Please input proper RNA"
						}
						break
					case "U":
						peptide.push("Leu")
						break
					case "G":
						peptide.push("Arg")
						break
					case "C":
						peptide.push("Pro")
						break
					default:
						return "Please input proper RNA"
				}
				break
			default:
				return ["Please input proper RNA", i, RNA]
		}
	}
	return peptide.join("-")
}

btn_dna = document.querySelector("#dna")
btn_rna = document.querySelector("#rna")
btn_pep = document.querySelector("#pep")

btn_dna.addEventListener("click", () => {
	const input = document.querySelector("#input").value
	output = complement(input)
	out = document.querySelector("#output")
	out.innerHTML = output
})

btn_rna.addEventListener("click", () => {
	const input = document.querySelector("#input").value
	output = transcribe(input)
	out = document.querySelector("#output")
	out.innerHTML = output
})

btn_pep.addEventListener("click", () => {
	const input = document.querySelector("#input").value
	output = translate(input)
	out = document.querySelector("#output")
	out.innerHTML = output
})
