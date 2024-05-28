const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://hasanharal:atlas-md-bot@cluster0.lo0fihj.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaFo1Vy2ZjCsyxfNFb09";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaFo1Vy2ZjCsyxfNFb09" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/7jkphqy.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Generated and sended programmed by WhatsApp bot by M Hassan Ramzan Haral" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923057732219";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923336227405";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_41_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM1LFxuICAgICAgICA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpSS05FbVB5aDhPaU54ZEowdW9HQ1lOQmt5L0JMdXBWMUlnRHdDdWllRHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzM2MjI3NDA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOEU4RDdFNzI4NEUwMDU4RkVBQTlEOEI5QjM4MkM4MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY5MDAwOTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiclpfTWpSN19RVnFxcFJOakZBOVNQd1wiLFxuICBcInBob25lSWRcIjogXCI5MTkwZmIwMy1hYzgwLTQ0ZTYtYjk5YS1kNzU1ODI0MmM2YjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMSxcbiAgICAgIDcxLFxuICAgICAgODYsXG4gICAgICAyMCxcbiAgICAgIDExNyxcbiAgICAgIDE3MyxcbiAgICAgIDE4NCxcbiAgICAgIDc3LFxuICAgICAgNTgsXG4gICAgICAxMDAsXG4gICAgICAxOCxcbiAgICAgIDE4MSxcbiAgICAgIDE0MSxcbiAgICAgIDI3LFxuICAgICAgMTU5LFxuICAgICAgMjA3LFxuICAgICAgMjQ1LFxuICAgICAgMTkzLFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgNzcsXG4gICAgICAxNzksXG4gICAgICAyMCxcbiAgICAgIDczLFxuICAgICAgOSxcbiAgICAgIDExNSxcbiAgICAgIDE3NCxcbiAgICAgIDkyLFxuICAgICAgNDksXG4gICAgICA2MyxcbiAgICAgIDE2MCxcbiAgICAgIDI1MSxcbiAgICAgIDE3NSxcbiAgICAgIDYwLFxuICAgICAgMTc4LFxuICAgICAgMjcsXG4gICAgICAyMDQsXG4gICAgICAxODksXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFpaRTZFNFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMzNjIyNzQwNTozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTUxMDg4NTk1OTI3Nzk6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSk9Ma1BrSEVQaWgxN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5SXhvVWFxYnVUTk1DMlBJL2FzQzhndjc4NUQ5Yk9NcVlKRG8zb2FDcnpnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNxNkdwUC9xSlprWUQxd2w5Sy9HbkUyVVVuWXNaQVVqMU9yTHkvTTdreGpEVHlQdENlbi9ubEpXaXdCK2N5RGxVdVBZL1lZU1NQbGVuWVNtNmhTZEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndqS0RlQ3pVRkcxVmhMMFh5bUxGL0NTRUQvSXUxUXhWQ0tEb09EMGVHdWQxTHRva0o3SWsxVjRPL1ZVR0hQOEFTbCtjcVpBb1drV1pSMDlwcUJTNkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMzNjIyNzQwNTozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5MDAwOTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFVU5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVVTi5qc29uIjogIntcImtleURhdGFcIjpcIjFwTGxjbkEvaFJlbjNaNmhWRXY1R0V4WmFvSlp3TkRjMkt1UkRKNnJ0Ukk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzMzA2NzE1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || ""Generated and sended by WhatsApp bot by M Hassan Ramzan Haral,
 
  author : process.env.PACK_AUTHER|| "M Hassan Ramzan Haral",
  packname: process.env.PACK_NAME || "M Hassan Ramzan Haral",
  botname : process.env.BOT_NAME  || "Whatsapp bot by M Hassan Ramzan Haral",
  ownername:process.env.OWNER_NAME|| "M Hassan Ramzan Haral",


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
