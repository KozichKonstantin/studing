const textarea = document.getElementsByClassName('txt')[0]
function output (info, sourse){
    let content = textarea.textContent;
    if (sourse != null){
        textarea.textContent = 'content from: ' + sourse + content + `\n` + info + '\n';
    }else{
        textarea.textContent = content + `\n` + info;
    }

    textarea.scrollTop = textarea.scrollHeight;
}
