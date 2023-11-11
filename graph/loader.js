function addSrc(){
    const place = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'module';
    script.src = './scripts/listeners.js';
    place.append(script);
}
addSrc();