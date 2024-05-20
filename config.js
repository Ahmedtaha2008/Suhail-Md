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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_23_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc2LFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDk3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICA1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgODYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMcTUzQkI1UkdlLzJEbnQzS3Q2Ty9lYUpTcFlpMngvZjdRRm1UcUMxcndZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIwMTAxMzAzMjAzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTgyQ0JBNUVERUJBRUVEQzQ3RjZDQ0FBNjIxNzYwMjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MTYxMDMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhmTVBiM0ZLUUMtX0FPNC13MzAxNVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmMwYjkyODgtNzFmYy00OGMxLTlhOGEtYmY2NWZhMDE0YjAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTUxLFxuICAgICAgMTU1LFxuICAgICAgNTEsXG4gICAgICA3LFxuICAgICAgMTM5LFxuICAgICAgMjE0LFxuICAgICAgMzIsXG4gICAgICAxNTIsXG4gICAgICAxNDAsXG4gICAgICAxMjAsXG4gICAgICA5NSxcbiAgICAgIDUyLFxuICAgICAgOTksXG4gICAgICAxNjIsXG4gICAgICAxNDksXG4gICAgICAxNDcsXG4gICAgICAyNDYsXG4gICAgICAxNjQsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMTcyLFxuICAgICAgMjIyLFxuICAgICAgNjgsXG4gICAgICAxNjAsXG4gICAgICAxMixcbiAgICAgIDczLFxuICAgICAgMjEwLFxuICAgICAgMTk3LFxuICAgICAgMTc4LFxuICAgICAgMTgzLFxuICAgICAgOSxcbiAgICAgIDkzLFxuICAgICAgMzksXG4gICAgICAyMixcbiAgICAgIDI0NixcbiAgICAgIDEzMCxcbiAgICAgIDE4OCxcbiAgICAgIDU2LFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllZWFlKMkE2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDEwMTMwMzIwMzc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBaG1lZCBUYWhhXCIsXG4gICAgXCJsaWRcIjogXCIzODc1NzgxODQ1MDAzMToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKWHIzc3NERVArVHFySUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZMV09vOGpnRFpwMllCMGl4T2xVQktVb1ZtYTNFNlMzTnNreTlJdXdBMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTHptbTI0WG11VjZOaTJ2ZVZBUkRoVWZhekloZHVNcFpTZ2tIUUJJb0gwZmE2YUdQaS9USEs2SEtXY0dzWTBoeDBGaEI5RXBWSlZKVlhmN0RmUlpXQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYlE1OVdDZWVLdU10TDQ5SkxSQXFVS1pNWWtvRWtycE0zVURtREY0Sm9QckNZYWlHMzlVcXFnKzdhaDg0akd0dUo3TUEycW50VzZkTmdaOHZGTHN6QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjAxMDEzMDMyMDM3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYxNjEwMjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNQjRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1CNC5qc29uIjogIntcImtleURhdGFcIjpcIlE3dUwvcUxYTFBaOURNVS9aZ0hvVGZ0cmp6bU5tVStpNmpmZGIrL0Y4ZUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTY0MTQ2NTc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
