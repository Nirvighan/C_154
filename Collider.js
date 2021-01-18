AFRAME.registerComponent("flying-birds",{
    init:function(){
        for(var i = 1;i<21;i++){
            //ID
            var id = `hurdle${i}`;
            //POSITION VARIABLES
            var posX = (Math.random()*3000+(-1000));
            var posY = (Math.random()*2+(-1));
            var posZ = (Math.random()*3000+(-1000));
            var position = {x:posX,y:posY,z:posZ}
            //CALL THE FUNCTION
            this.flyingBirds(id,position);
        }
    },
    flyingBirds:(id,position)=>{
        var terrainE1 = document.querySelector("#terrain");

        //create the bird model entity
        var birdE1 = document.createElement("a-entity");
        
        birdE1.setAttribute("scale",{x:500,y:500,z:500});
        birdE1.setAttribute(
            "gltf-model",
            "./assets/models/flying_bird/scene.gltf",

        );
        birdE1.setAttribute("id",id);
        birdE1.setAttribute("position",position);
        //animated models
        birdE1.setAttribute("animation-mixer",{});

        //append the bird entity as the child of the terrain entity
        terrainE1.appendChild(birdE1);
    }
})