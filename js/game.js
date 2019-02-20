// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You spawn in a forest made of blocks",
            choices: [
                {
                    text: "Mine trees with fist",
                    nextLevel: "wood",
                },

                {
                    text: "look around",
                    nextLevel: "cave",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You find a cave.",
            choices: [
                {
                    text: "Run into cave",
                    nextLevel: "start",
                },
                {
                    text: "go and punch some wood",
                    nextLevel: "wood"
                }
            ]
        },

        wood: {
            message: "Wood block pops out after you break the trunk. The tree stays afloat.",
            choices: [
                {
                    text: "Go and punch some stone nearby",
                    nextLevel: "punching_stone",
                },
                {
                    text:"punch the whole tree down",
                    nextLevel:"tools"
                }
            ]
        },
        punching_stone: {
            message: "game over",
            choices: [
                {
                    text: "alt f4",
                    nextLevel: "you_lose"
                },
                {
                    text: "respawn",
                    nextLevel: "start"
                }
                ]
        },
        tools: {
            message: "you make a crafting table",
            choices: [
                {
                    text: "make axe",
                    nextLevel: "wood"
                },
                {
                    text: "make pickaxe",
                    nextLevel: "mining"
                },
                {
                    text: "make sword",
                    nextLevel: "kill pig"
                }
                ]
        },
        mining: {
            message: "you find cave / mine stone and coal",
            choices: [
                {
                    text: "make furnace",
                    nextLevel: "wood"
                },
                {
                    text: "make torches",
                    nextLevel: "mining"
                },
                {
                    text: "continue mining",
                    nextLevel: "creeper"
                }
                ]
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        you_lose: {
            message: "you lose!",
            choices: {
                text: "start_over",
                nextLevel: "start"
            }
        }
    }
};
