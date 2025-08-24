function shortenWords(str) {
    return str
        .split(" ")
        .map(word => {
        if (word.length <= 3) {
            return word 
        } 
        else {
            return word[0] + (word.length - 2) + word[word.length - 1]
        }
        })
        .join(" ")
}

const input = "Every developer likes to mix kubernetes and javascript"
const result = shortenWords(input)
alert(result) 