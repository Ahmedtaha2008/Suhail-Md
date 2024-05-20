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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_55_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDExLFxuICAgICAgICA0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImYwU0Rvek9OUm5hbmtZTHkxWTBENWhQSmJLcGRVemYzYWFRbENHdDVMZG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMDEzMDMyMDM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QjYzRDcwQkFEOEE2MzRFOTBCMDFCODdDQzIxNDQ0RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTYyMTMzNTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0ZOb1BLaC1UZjJFbGpQRXpMakdiZ1wiLFxuICBcInBob25lSWRcIjogXCJlZDcyMDdiYi1mYWJjLTQ4YjctOThiMy00ZjJiN2ZkZWY4MzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAyMyxcbiAgICAgIDEwOSxcbiAgICAgIDAsXG4gICAgICAxNDMsXG4gICAgICAxMzQsXG4gICAgICAxMixcbiAgICAgIDE4OSxcbiAgICAgIDEyNCxcbiAgICAgIDE2MSxcbiAgICAgIDE3NSxcbiAgICAgIDIxNCxcbiAgICAgIDgsXG4gICAgICA2MixcbiAgICAgIDEzMSxcbiAgICAgIDk5LFxuICAgICAgMjMyLFxuICAgICAgNjQsXG4gICAgICAxNzIsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMixcbiAgICAgIDY2LFxuICAgICAgMjA2LFxuICAgICAgOTksXG4gICAgICAxMjUsXG4gICAgICAyMDIsXG4gICAgICA0MyxcbiAgICAgIDEyMixcbiAgICAgIDEwMCxcbiAgICAgIDE0NSxcbiAgICAgIDEwNCxcbiAgICAgIDM1LFxuICAgICAgNzEsXG4gICAgICAxOTQsXG4gICAgICAzNSxcbiAgICAgIDE4MCxcbiAgICAgIDIxMyxcbiAgICAgIDE5NyxcbiAgICAgIDMwLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1IMzRGTVRHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDEwMTMwMzIwMzc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBaG1lZCBUYWhhXCIsXG4gICAgXCJsaWRcIjogXCIzODc1NzgxODQ1MDAzMToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKanIzc3NERU9Dc3JiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZMV09vOGpnRFpwMllCMGl4T2xVQktVb1ZtYTNFNlMzTnNreTlJdXdBMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSyt1Z1hWQTVScnIvRDRYS1hmTDFGdmR6MFpPa01oeVdaWnVCRXN4Sld2NWJKVFJtYlhaUTIwMmxDN0F3cC9TNnphYXpmWXVKYjJIS1pCWmRtYVFjQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMTBEZXRFVlBsV2g3d3VScGpaMFRBbXB0Q0Z0blFpYjh5MWNHTTFFTDhEcDRTeEE2cU9MSk5BaW14QXQvZFhid2hQRldnNU81Ukp4YTVGUjM4T0FkQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjAxMDEzMDMyMDM3OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYyMTMzNDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJdzNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3My5qc29uIjogIntcImtleURhdGFcIjpcIjREZExSS283Vkl3UkdIOHk3R1VzMGRxaVRMZ21FZERxMGFTUWNUamxCckE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTY0MTQ2NTg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTYyMTMzNDk4MzBcIn0iCn0="  // PUT your SESSION_ID 

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
