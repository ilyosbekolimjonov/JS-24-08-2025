function mostSpokenLanguages(countries, n) {
    if (countries.size == 0) {
        return "Xatolik: set bo'sh!"
    }

    const arr = [...countries]

    const sorted = arr.sort((a, b) => {
        const valA = Object.values(a)[0]
        const valB = Object.values(b)[0]
        return valB - valA 
    })

    return sorted.slice(0, n)
}


let countries = new Set([
    { Russian: 9 },
    { English: 91 },
    { French: 45 },
    { Spanish: 24 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Arabic: 25 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
])

console.log(mostSpokenLanguages(countries, 3))