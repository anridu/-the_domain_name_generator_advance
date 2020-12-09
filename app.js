
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let fin = ['.com', '.es']






function createPhrase(words) {
    let result = '';
    for (let i = 0; i < words.length; i++) {
        result += words[i];
    }
    return result;

}



for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            for (var l = 0; l < fin.length; l++) {
                
                console.log(pronoun[i] + adj[j] + noun[k] + fin[l]);
            }
        }
    }
}