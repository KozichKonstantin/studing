function spinWords(string) {
  function reverseWord(word) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  }
  let finalsentense = "";
  let substring = "";
  let massive = string.split(" ");
  for (let i = 0; i < massive.length; i++) {
    if (i == massive.length - 1) {
      substring = "";
    } else {
      substring = " ";
    }
    if (massive[i].length >= 5) {
      finalsentense += reverseWord(massive[i]) + " ";
    } else {
      finalsentense += massive[i] + " ";
    }
  }
  return finalsentense;
}
function toLower(words) {
    let out = ''+ words;
    return out.toLowerCase();
}

const ctrlC = new Input();
output(ctrlC.value, "ctrlC");
