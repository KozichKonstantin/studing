function addSrc(){
    const place = document.getElementsByTagName('head')[0]
    let script = document.createElement('script')
    script.src = './scripts/listeners.js'
    script.type = 'module'
    place.append(script)
}
addSrc()