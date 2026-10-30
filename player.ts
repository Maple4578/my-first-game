// player variables
let player_image = sprites.create(assets.image`Player`, SpriteKind.Player)
let speed = 80
let jump_speed = 150
let gravity = -100

// gravity
player_image.ay = gravity

// player movement
controller.moveSprite(player_image,speed,0) // player x controls
if (player_image.tileKindAt(TileDirection.Bottom, assets.image`Player`)) // player jump only when on ground
{
    if (controller.A.isPressed()) // jump input
    {
        player_image.vy = jump_speed
    }
}
