const textarea = document.getElementsByClassName('textarea')[0]
function output (info){
    let content = textarea.textContent;
    textarea.textContent = content + `\n` + info + '\n';
    textarea.scrollTop = textarea.scrollHeight;
}