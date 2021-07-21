var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "ODY3MTc2MDMxNzc3MzI1MDY2.YPdSnQ.lNMFjzSTyf44saFmDuAlWOKSbAw",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "| 🏁Drift Kings RP🏁",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "+",
 warn: "0"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}


