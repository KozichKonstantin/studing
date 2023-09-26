const textarea = document.getElementsByClassName('textarea')[0]
function output (info, sourse){
    let content = textarea.textContent;
    if (sourse != null){
        textarea.textContent = 'content from: ' + sourse + content + `\n` + info + '\n';
    }else{
        textarea.textContent = content + `\n` + info + '\n';
    }

    textarea.scrollTop = textarea.scrollHeight;
}