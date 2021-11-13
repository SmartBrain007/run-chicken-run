sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let projectile2: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
scroller.scrollBackgroundWithSpeed(-50, 0)
let mySprite = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
animation.runImageAnimation(
mySprite,
assets.animation`Mama Moving`,
100,
true
)
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    projectile2.y = randint(15, 115)
    projectile2.setKind(SpriteKind.Enemy)
    pause(500)
    animation.runImageAnimation(
    projectile2,
    assets.animation`Animated Tourist`,
    100,
    true
    )
})
