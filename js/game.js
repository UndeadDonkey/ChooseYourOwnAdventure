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
                    text: "make sword and slay pig",
                    nextLevel: "kill_pig"
                }
                ]
        },
        mining: {
            message: "you find cave / mine stone and coal",
            choices: [
                {
                    text: "make better pickaxe",
                    nextLevel: "iron"
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
        },
        kill_pig: {
            message: "lightning strikes the pig as you hit it. The pigman kills you",
            choices: [
                {
                text: "game over",
                nextLevel: "you_lose"
                }
            ]
        },
        creeper: {
            message: "lightning strikes the creeper and charges it. The charged creeper explodes in your face",
            choices: [
                {
                text: "game over",
                nextLevel: "you_lose"
                }
            ]
        },
        iron : {
            message: "you make an iron pickaxe",
            choices: [
                {
                text: "continue mining",
                nextLevel: "win"
                },
                {
                text: "go back to surface",
                nextLevel: "lightning"
                }
            ]
        },
        lightning : {
            message: "you get struck by lightning and die",
            choices: [
                {
                text: "game over",
                nextLevel: "you_lose"
                }
            ]
        },
        win : {
            message: "your computer gets struck by lightning and you lose all your progress. At least you get the satisfaction of mining diamond",
            choices: [
                {
                text: "start_over",
                nextLevel: "start"
                }
            ]
        },
        you_lose: {
            message: "you lose!",
            choices: [
                {
                text: "start_over",
                nextLevel: "start"
                }
                ]
            }
        }
    };

