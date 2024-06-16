const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917385856319";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_21_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICA1NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxLFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODksXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDcwLFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLbTVSTUdjc3hYazdhSVVrNUxXdDNiNGFIL0JhWkJXb1NaSVI5TklEbXlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzM4NTg1NjMxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUUyOTJEMjY3QzRENjQ4QjE5NjM1MTY5QTMyOTU2MzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NTQwNDY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3Mzg1ODU2MzE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNTdBQTRDNjA5RUFGNzkxNDBBOTE4QUZFRjM1QTkxRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg1NDA0NjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGdkb2U2R1VTREM3WWdIMllhTm5qd1wiLFxuICBcInBob25lSWRcIjogXCJhOWRkMzZhOS01MmZiLTRhM2MtOWJhMi0xNDViOGM5YTM4ZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgODcsXG4gICAgICAyMjMsXG4gICAgICAxMjQsXG4gICAgICA3LFxuICAgICAgMTcsXG4gICAgICAyMjIsXG4gICAgICAxOTYsXG4gICAgICA1MyxcbiAgICAgIDE1MyxcbiAgICAgIDQyLFxuICAgICAgMTYyLFxuICAgICAgMTAwLFxuICAgICAgMTc0LFxuICAgICAgMTY0LFxuICAgICAgMTk2LFxuICAgICAgMTEzLFxuICAgICAgMTY2LFxuICAgICAgMjIsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMjA2LFxuICAgICAgMTg3LFxuICAgICAgODEsXG4gICAgICAxODYsXG4gICAgICAxNjcsXG4gICAgICAxODksXG4gICAgICAxNTEsXG4gICAgICAxOCxcbiAgICAgIDcwLFxuICAgICAgOTYsXG4gICAgICAzOSxcbiAgICAgIDEzMixcbiAgICAgIDE0NyxcbiAgICAgIDM4LFxuICAgICAgMTA3LFxuICAgICAgMTc0LFxuICAgICAgODQsXG4gICAgICA4OCxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXWTNaTjUxRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3Mzg1ODU2MzE5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTA5NTkwMjc1MTE1MTE6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QiPCdkKzwnZCa8J2QpvCdkK5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcm9tZm9ERUsyeHU3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZGb05QS1NQMU9CV2FQUElFNTRqZk1XK2NBR2g3bHlTeU9zUXZRSlhBZ2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieGRzU3g1eGF2SkU0a2w0NzU0K2UwY0pkMEhudlVtbm40YTRQbXJHUzdoamNqaE9vdHNVZmFtTkdUcFV2WkpoS2ljRnFjMlBwc0VPOVNnYmJNb3ZaQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNXltTVU5L1VWZGxEZmpJUHJ5YVFheXVsRnFIY1M1UExtd0Q1UTFqa28zSzJMZDM3czY1a3lzbTdMYXIxa0ZrT3Bra2UxeHl1RlkrWkRyZHBvdUJwaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3Mzg1ODU2MzE5OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU0MDQ2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNTY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1NjLmpzb24iOiAie1wia2V5RGF0YVwiOlwianpTSTNDK0pjTDFTWGtma2g4ODAwMW1MZTV4Yy9rVXBUZlM5UkFrSHo4UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDYxNTgxODgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE3NTc2OTM5ODQ4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
