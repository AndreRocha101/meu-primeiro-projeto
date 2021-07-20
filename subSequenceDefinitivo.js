/*
mapString = Função recebe uma string e transforma em objeto : chave = letra, value = arrayIndices

isSubsequente = Função recebe uma string e um objeto e retorna true ou false se ele for Subsequence

LongestWord = Função recebe uma array de string e retorna a string mais longa.

findNextIndex = Função deverá receber a array e o index e retornar o index + 1 ou false

longestMatch = a função recebe uma string uma array de possíveis subsequence e retorna a subsequente mais longa da array.
*/


function mapString(string){
    let map = {}
    for (let i = 0; i < string.length; i++){
        let letter = string[i]
        if (map[letter]){
            map[letter].push(i)
        } else {
            map[letter] = [i]
        }
    }
    return map
}
function findNextIndex(mappedIndices, lastMatchedIndex){
    // mappedIndices = [1, 3]  lastMatchedIndex = 2
    for (let index of mappedIndices){
        if (index >= lastMatchedIndex){
            return index + 1
        }
    }
    return false
}
function isSubsequence(word, map){
    // word = 'ava'
    // map = { j : [0], a : [1, 3], v : [2], ...}

    // index = 3
    // palavra = 'ava'
    let index = 0
    let palavra = ''
    for (let letter of word){
        if (map[letter]){
            index = findNextIndex(map[letter], index)
            palavra += letter
            if (index == false){
                return false
            }
        }
        if (palavra == Object.keys(map).join('')){
            return true
        }
    }
    return false
}
function longestWord(listOfSubsequences){
    let longestString = ''
    for (let word of listOfSubsequences){
        if (word.length > longestString.length){
            longestString = word
        }
    }
    return longestString
}
function longestMatch(string, dictionary){
    // string =     'Javascript'
    // dictionary = ['vascut','avast','Javas','apt']
    let map = mapString(string)
    let listOfSubsequences = []
    for (let word of dictionary){
        if (isSubsequence(word, map)){
            listOfSubsequences.push(word)
        }
    }
    return longestWord(listOfSubsequences)

}
var stringSequence = 'Javascript'
var dictionary = ['vascut','avast','Javas','apt']
//longestMatch(stringSequence, dictionary)
console.log(isSubsequence('ava', mapString(stringSequence)))