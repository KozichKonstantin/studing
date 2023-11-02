let textarea = document.getElementsByClassName('txt')[0]

function output (info, sourse){
    let fullinf = new Output
    fullinf.functionName = sourse;
    fullinf.input = info;
    let content = textarea.value;
    if(fullinf.input == '/@cl'){
        content = ''
        fullinf.input = ''
    }
    fullinf.checkComm()
    if (sourse != null){
        console.log(2)
        textarea.value = content + 'content from: '  + fullinf.getOutput().from + `\n` + fullinf.getOutput().out + `\n`;
    }else{
        textarea.value = content + `\n` + info;
    }

    textarea.scrollTop = textarea.scrollHeight;
}
