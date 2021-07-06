Ok so we have retake the Aoi.js module but we will add a lot of new things more

There is some help for setup your discord bot :3

Create a main.js (or a bot.js or index.js) and put this code in:

//CODE IN YOUR MAIN FILE
const bdmjs = require("BDM.js")
const dbot = new bdmjs.Bot({
token: "TOKEN", //Discord Bot Token
prefix: "!" //Customizable
})
dbot.onMessage() //Allows to run Commands
dbot.command({
name: "ping", //Trigger name (command name)
code: `$ping Pong!` //Code
})

dbot.readyCommand({
    channel: "", //You can use this or not.
    code: `$log[Ready on $userTag[$clientID]]` //Enter the code / message.
})
//CODE IN YOUR MAIN FILE