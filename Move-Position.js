AFRAME.registerComponent("camera-zoom-out", {
    schema: {
        moveZ: {type: "number", default: 10},
    },
    tick: function (){
        this.data.moveZ = this.data.moveZ + 0.01;
        let position = this.el.getAttribute("position");
        position.z =  this.data.moveZ;
        this.el.setAttribute("position", {x: position.x, y:position.y, z:position.z})
    }
});
AFRAME.registerComponent("fall-down", {
    schema: {
        moveY: {type: "number", default: 0},
    },
    tick: function (){
        window.addEventListener("click",(e)=>{
            this.data.moveY=this.data.moveY+0.0001
        })
        let position=this.el.getAttribute("position");
        position.y=position.y-this.data.moveY
        this.el.setAttribute("position",{x:position.x,y:position.y,z:position.z})
    }
})