function Palindrome() {
    var givenWord = document.getElementById("inputfield").value;
    var results = document.getElementById("result");


    var reverseWord = "";
    for (i = givenWord.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + givenWord[i];
    }
    if (givenWord == '') {
        results.innerHTML = "⚠️ please Enter a word"
    } else if (givenWord == reverseWord) {
        results.innerHTML = reverseWord + "✔ Oh yes, Given word is a Palindrome";
        results.style.color = "green";
    } else {
        results.innerHTML = reverseWord + "✖ Oh no, Given word is not a Palindrome";
        results.style.color = "red";
    }
}