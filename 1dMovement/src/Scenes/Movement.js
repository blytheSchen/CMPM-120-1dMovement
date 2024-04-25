class Movement extends Phaser.Scene {
    constructor() {
        super("movementScene");
        this.my = {sprite: {}};

        this.bodyX = 400;
        this.bodyY = 550;

        this.keyA = null;
        this.keyD = null;
        this.keySpace = null;
    }

    preload() {
        this.load.setPath("./assets/");

        this.load.image("playerBody", "character_roundYellow.png");
        this.load.image("playerBullet", "character_handYellow.png");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Movement.js<br>A - move left // D - move right</h2>'
    }

    create() { 
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.playerBody = this.add.sprite(this.bodyX, this.bodyY, "playerBody");
        my.sprite.playerBullet = this.add.sprite(this.bodyX, this.bodyY, "playerBullet");
        my.sprite.playerBullet.visible = false;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        let my = this.my; 

        if (this.keyA.isDown) 
        {
            console.log("A pressed");
            if (my.sprite.playerBody.x > 0)
            {
                my.sprite.playerBody.x -= 10;
            }
        }

        if (this.keyD.isDown) {
            console.log("D pressed");
            if (my.sprite.playerBody.x > 0)
            {
                my.sprite.playerBody.x += 10;
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this.keySpace)) {
            my.sprite.playerBullet.x = my.sprite.playerBody.x;
            my.sprite.playerBullet.visible = true;
        }

        if (my.sprite.playerBullet.visible == true) {
            if (my.sprite.playerBullet.y > 0)
            {
                my.sprite.playerBullet.y -= 20;
            }
            else {
                my.sprite.playerBullet.visible = false;
                my.sprite.playerBullet.y = this.bodyY;
            }
        }
    }
}