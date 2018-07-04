document.getElementById("countButton").onclick = function () {
    var typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    let letterCounts = {};
    
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } 
        else {
            letterCounts[currentLetter]++;
        }
        }
    
    let words = typedText.split(/\s/);
    let wordCount = {}
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        if (wordCount[currentWord] === undefined) {
            wordCount[currentWord] = 1;
        } 
        else {
            wordCount[currentWord]++;
        }
        console.log(wordCount)
        }
    for (word in wordCount) {
        console.log(word)
        let spans = document.createElement("span");
        let wordContent = document.createTextNode(word + ":" + wordCount[word] + " ");
        spans.appendChild(wordContent);
        document.getElementById("wordsDiv").appendChild(spans);
    }    
    // for (groups in wordCount) {
    //     let spans = document.createElement("span");
    //     let groupContent = document.createTextNode(words + wordCount[groups]);
    //     spans.appendChild(groupContent);
    //     document.getElementById("wordsDiv").appendChild(spans);
    // }

    for (letter in letterCounts) {
            let span = document.createElement("span");
            let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
            span.appendChild(textContent);
            document.getElementById("lettersDiv").appendChild(span);}







    
    }
