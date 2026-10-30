// player variables
let player_image = sprites.create(assets.image`Player`, SpriteKind.Player)
let speed = 80
let jump_speed = -100
let gravity = 150

// gravity
player_image.ay = gravity

// player movement
controller.moveSprite(player_image,speed,0) // player x controls
forever(function() 
{
    if (player_image.isHittingTile(CollisionDirection.Bottom)) // player jump only when on ground
    {
        if (controller.A.isPressed()) // jump input
        {
            player_image.vy = jump_speed
        }
    }  
})

// player camera
scene.cameraFollowSprite(player_image)