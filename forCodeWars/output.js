const textarea = document.getElementsByClassName('txt')[0]

function output (info, sourse){
    let fullinf = new Output
    fullinf.functionName = sourse;
    fullinf.input = info;
    let content = textarea.textContent;
    if (sourse != null){
        textarea.textContent = content + 'content from: '  + fullinf.getOutput().from + `\n` + fullinf.getOutput().out + '\n';
    }else{
        textarea.textContent = content + `\n` + info;
    }

    textarea.scrollTop = textarea.scrollHeight;
}
