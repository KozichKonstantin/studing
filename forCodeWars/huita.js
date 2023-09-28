function spinWords(string){
    function reverseWord(word){
      let reversedWord = "";
      for(let i = word.length - 1; i>=0; i++){
        reversedWord += word[i];
      }
      return reversedWord;
    } 
     let finalSentense = "";
     let massive = string.split(" ");
     for(let i = 0; i < massive.length; i++){
       if(massive[i].length >=5){
         finalSentense += (reverseWord(massive[i]) + " ");
       }else{
         finalSentense += massive[i] + " ";
       }
     }
     return finalSentense;
   }