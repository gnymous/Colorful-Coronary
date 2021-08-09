const arteryArray = ['Left', 'RCA']
let colorPrimary = [1,1]
let colorInfo = [1,1]
let colorDanger = [1,1]

function colorPri() {
    changeColorPri(colorPrimary)
}
function colorInf() {
    changeColorInf(colorInfo)
}
function colorDan() {
    changeColorDan(colorDanger)
}
function changeColorPri(colorName) {    
    for (let i = 0; i < arteryArray.length; i++) {
        const element = document.getElementById(arteryArray[i]);
        for (let j = 0; j < element.childElementCount; j++) {
            if (colorName[i]) {
                element.children[j].setAttribute('style', 'fill:#0B5ED7')
            }else{
                element.children[j].setAttribute('style', 'fill:black') 
            }
            
        }
        
    }
}
function changeColorInf(colorName) {    
    for (let i = 0; i < arteryArray.length; i++) {
        const element = document.getElementById(arteryArray[i]);
        for (let j = 0; j < element.childElementCount; j++) {
            if (colorName[i]) {
                element.children[j].setAttribute('style', 'fill:#31D2F2')
            }else{
                element.children[j].setAttribute('style', 'fill:black') 
            }
            
        }
        
    }
}
function changeColorDan(colorName) {    
    for (let i = 0; i < arteryArray.length; i++) {
        const element = document.getElementById(arteryArray[i]);
        for (let j = 0; j < element.childElementCount; j++) {
            if (colorName[i]) {
                element.children[j].setAttribute('style', 'fill:#BB2D3B')
            }else{
                element.children[j].setAttribute('style', 'fill:black') 
            }
            
        }
        
    }
}