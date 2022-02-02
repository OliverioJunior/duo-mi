
const body = document.querySelector("body")

const mouse = {
    ativo: false,
    movendo: false,
    pos: {x:0, 
          y:0},
    posAnterior: {x:0, 
        y:0},
    posClick: {x:0,
    y:0},
    savePosicao:{x:0,y:0}
}
function slideScreen(){
    if(mouse.ativo){
        mouse.pos.y = (mouse.savePosicao.y - mouse.posAnterior.y)*(-0.8)
        mouse.pos.x = (mouse.savePosicao.x - mouse.posAnterior.x)*(-0.8)
        window.scroll({top:mouse.pos.y, left:mouse.pos.x})
     }
 } 


const clickScreen = (e)=>{
    mouse.ativo = true
    mouse.posClick.x = e.clientX
    mouse.posClick.y = e.clientY
    body.style.cursor = "grabbing"
    console.log(e)
}
const moveScreen = (e) =>{
    e.preventDefault()
    if(mouse.ativo){
        mouse.posAnterior.x = mouse.posClick.x - e.clientX;
        mouse.posAnterior.y = mouse.posClick.y - e.clientY;
        setTimeout(slideScreen(),300) 
      }
    }
const upMouse = () => {
    mouse.ativo = false;
    mouse.savePosicao.x +=  mouse.posAnterior.x*(-1);
    mouse.savePosicao.y +=  mouse.posAnterior.y*(-1);
    body.style.cursor = "grab";
  }

const send = {clickScreen
    ,moveScreen,mouse, slideScreen, upMouse, body}  
export default slideScreen;