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
    let wordcount = {}
    for (let i = 0; i < words.length; i++) {
        currentword = words[i];
        if (wordcount[currentword] === undefined) {
            wordcount[currentword] = 1;
        } 
        else {
            wordcount[currentword]++;
        }
        }
        console.log(words);
    for (groups in wordcount) {
        let spans = document.createElement("span");
        let groupContent = document.createTextNode(words + wordcount[words]);
        spans.appendChild(groupContent);
        document.getElementById("wordsDiv").appendChild(spans);
    }

    for (letter in letterCounts) {
            let span = document.createElement("span");
            let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
            span.appendChild(textContent);
            document.getElementById("lettersDiv").appendChild(span);}







    
    }
