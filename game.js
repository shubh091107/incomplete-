class Game{
    constructor(){}
    getState(){
        var gamestates = database.ref('GameState')
        gamestates.on("value",function(data){
            GameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            GameState: state
        })
    }
  async  start(){
        if (GameState === 0){
            forms = new Form()
            player = new Player()
            var playerRef  = await database.ref('PlayerCount').once("value")
            if (playerRef.exists()){
                PlayerCount  = playerRef.val()
                player.getCount()
            }
            
            forms.display()
            an = createSprite(600,250,0,0)
            an.scale= 0.6
            an.addImage(an1)
            drawSprites()
        }
    }
    play(){
        forms.hide()


    }

}