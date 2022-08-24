const WIDTH = 750  
const setView = () => {
 //设置html标签的fontSize
document.documentElement.style.fontSize = (100*screen.width/WIDTH) + 'px'
}
window.onorientationchange = setView
setView()