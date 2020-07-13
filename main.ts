namespace SpriteKind {
    export const veggies = SpriteKind.create()
}
function placeVeggies () {
    veggies1 = sprites.create(img`
. . f f f f f f f f f f f f f f 
. d c c c c c c c c c c c c c c 
f c c c d d d d d d d d d d d d 
f c c d d c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c f f f f c 
f c c d c c c c c c c d d d d c 
f c c d c c c c c c c d d d d c 
f c c d c c c c c c c c d d d c 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies1, tiles.getTileLocation(19, 7))
    veggies2 = sprites.create(img`
f f f f f f f f f f f f f f . . 
c c c c c c c c c c c c c c d . 
d d d d d d d d d d d d c c c f 
c c c c c c c c c c c d d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
1 1 b b b b 1 1 1 c c c d c c f 
1 b b d d b b 1 1 c c c d c c f 
1 b d d f f b 1 1 c c c d c c f 
1 1 1 c c 1 1 1 1 c c c d c c f 
1 1 1 c c 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies2, tiles.getTileLocation(20, 7))
    veggies3 = sprites.create(img`
f c c d c c c c c c c c d d d c 
f c c d c c c c c c c c d d d c 
f c c d c c c c c c c c c d d c 
f c c d c c c c c 2 2 2 c d d c 
f c c d c c c c 2 2 2 2 2 c d c 
f c c d c c c 2 2 4 4 2 2 2 d c 
f c c d c c c 2 4 2 2 2 2 2 c c 
f c c d c c c 2 4 2 2 2 2 2 c c 
f c c d c c c 2 2 2 2 2 2 2 c c 
f c c d c c c c 2 2 7 2 2 c c c 
f c c d c c c c c 2 7 2 c c c c 
f c c d c c c c c c 7 c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies3, tiles.getTileLocation(19, 8))
    veggies4 = sprites.create(img`
1 1 2 2 2 1 1 1 1 c c c d c c f 
1 2 4 2 4 2 1 1 1 c c c d c c f 
2 4 4 2 4 4 2 1 1 c c c d c c f 
2 2 2 2 2 2 2 1 1 c c c d c c f 
2 4 4 4 4 4 2 1 1 c c c d c c f 
1 2 4 5 5 2 1 1 1 c c c d c c f 
1 1 2 2 2 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
1 1 1 1 1 1 1 1 1 c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies4, tiles.getTileLocation(20, 8))
    veggies5 = sprites.create(img`
f c c d c c c 7 7 7 7 1 1 1 1 1 
f c c d c c c c c c c c c c c c 
f c c d c c c c c c c c c c c c 
f c c d d c c c c c c c c c c c 
f c c c d d d d d d d d d d d d 
f b c c c c c c c c c c c c c c 
f b b c c c c c c c c c c c c c 
f b b b c c c c c c c c c c c c 
f b b b b b b b b b b b b b b b 
f c b b b b b b b b b b b b b b 
f c b b c c b b b b c c b b b b 
. f f b f f b c c b f f b c c c 
. . f f f f f f f f f f f f f f 
. . f b b b b b f . . . . . . . 
. . f c c c c c f . . . . . . . 
. . . f f f f f . . . . . . . . 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies5, tiles.getTileLocation(19, 9))
    veggies6 = sprites.create(img`
1 1 1 1 c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c c c d c c f 
c c c c c c c c c c d d d c c f 
d d d d d d d d d d d c c c c f 
c c c c c c c c c c c c c c c f 
c c c c c c c c c c c c c c b f 
c c c c c c c c c c c c c b b f 
b b b b b b b b b b b b b b b f 
b b b b b b b b b b b b b b c f 
b b b b c c b b b b c c b b c f 
c c c b f f b c c b f f b f f . 
f f f f f f f f f f f f f f . . 
. . . . . . . . f b b b b f . . 
. . . . . . . . f c c c c f . . 
. . . . . . . . . f f f f . . . 
`, SpriteKind.veggies)
    tiles.placeOnTile(veggies6, tiles.getTileLocation(20, 9))
}
let veggies6: Sprite = null
let veggies5: Sprite = null
let veggies4: Sprite = null
let veggies3: Sprite = null
let veggies2: Sprite = null
let veggies1: Sprite = null
namespace veggies {
    //% block
    export function zone5_veggies() {
        placeVeggies()
    }
}
