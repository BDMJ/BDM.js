const bdmjs = require("BDM.js")

const dbot = new bdmjs.Bot({
token: "TOEKN", //Discord Bot Token
prefix: "$getServerVar[prefix]" //Customizable
})
dbot.onMessage() //Allows to run Commands
dbot.variables({
    prefix: "!",
      })

dbot.command({
name: "ping", //Trigger name (command name)
code: `$pingms Pong!` //Code
})

dbot.status({
    text: "BDM.js",
    type: "PLAYING",
    time: 12
})

dbot.readyCommand({
    channel: "", //You can use this or not.
    code: `$log[Ready on $userTag[$clientID]]` //Enter the code / message.
})