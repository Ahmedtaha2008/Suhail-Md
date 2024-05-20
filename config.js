const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Ahmedtaha2742008@gmail.com"
global.location="Basyoun,EGYPT."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Egypt";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "‏https://wa.me/201013032037";
global.website=process.env.GURL || "https://wa.me/201013032037" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝕬𝖍𝖒𝖊𝖉 𝕿𝖆𝖍𝖆" 


global.devs = "201013032037" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201013032037";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,201013032037";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "201013032037";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_52_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MixcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICAxODIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkyLFxuICAgICAgICA2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlorZXJIRXpXRVlmZEM3c0xXb3lQakd5VnI3UHdhZFZBQ3l2dGNHTnFUbVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNFdkpaVkx4UWhpNm5XOFhFckR5RXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODZhNWNkYzEtYjUyZS00Y2ZiLWI5NzgtMjVmMmE2MTg4MTMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMixcbiAgICAgIDE1NyxcbiAgICAgIDE0MixcbiAgICAgIDI1NSxcbiAgICAgIDIzNixcbiAgICAgIDIzNyxcbiAgICAgIDExNyxcbiAgICAgIDE0NCxcbiAgICAgIDI0NCxcbiAgICAgIDIxOCxcbiAgICAgIDE3MixcbiAgICAgIDM1LFxuICAgICAgMTY4LFxuICAgICAgMTAwLFxuICAgICAgNTIsXG4gICAgICAxNDMsXG4gICAgICA3MCxcbiAgICAgIDIxNyxcbiAgICAgIDQzLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMjA4LFxuICAgICAgMixcbiAgICAgIDE2NCxcbiAgICAgIDI0NSxcbiAgICAgIDIwOCxcbiAgICAgIDc4LFxuICAgICAgMTI1LFxuICAgICAgNDEsXG4gICAgICAxNDEsXG4gICAgICAxNjksXG4gICAgICA2NixcbiAgICAgIDEwOSxcbiAgICAgIDcwLFxuICAgICAgNjQsXG4gICAgICAxMTIsXG4gICAgICAyMDYsXG4gICAgICA0NCxcbiAgICAgIDY5LFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc1QjJRMTNXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDEwMTMwMzIwMzc6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBaG1lZCBUYWhhXCIsXG4gICAgXCJsaWRcIjogXCIzODc1NzgxODQ1MDAzMToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYnIzc3NERU9xT3JiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZMV09vOGpnRFpwMllCMGl4T2xVQktVb1ZtYTNFNlMzTnNreTlJdXdBMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2ZMaWVETTJtNnVsREg0Z1lzdEVtRE5ZcTgvVjJyT1g2YlZWZCtHUG9DZmpSenE3a1E5bG5RSHMraFJtaElHdnQrOTlVekwxQVFZYWpmQWlQVkRLQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2Jkb1Z1VHRFeU5kVXhuN3lzMTBOL05Ed2R1Nnphbk1CYk9mbGE2cDYvc3hrQm9ZeXVnNjNmQ0MrekhUckF3aitxNytvdG1LNVN2ZnlFQmRkVFJkRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjAxMDEzMDMyMDM3OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYyMDk1MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNQjRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1CNC5qc29uIjogIntcImtleURhdGFcIjpcIlE3dUwvcUxYTFBaOURNVS9aZ0hvVGZ0cmp6bU5tVStpNmpmZGIrL0Y4ZUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTY0MTQ2NTc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "𝕬𝖍𝖒𝖊𝖉 𝕿𝖆𝖍𝖆" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝕬𝖍𝖒𝖊𝖉 𝕿𝖆𝖍𝖆",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "𝓐𝓱𝓶𝓮𝓭 𝓑𝓸𝓽",
  ownername:process.env.OWNER_NAME|| "𝕬𝖍𝖒𝖊𝖉 𝕿𝖆𝖍𝖆",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
