const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.devs = '94762280384';
global.website = 'https://github.com/YasiyaZer1/yasiyaze' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/H062oEI.jpeg'
module.exports = {
  botname: process.env.BOT_NAME || 'YASIYA-MD',
  dl_limit: process.env.DL_SIZE || '300',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '94762280384',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY YASIYA-MD* 🎊',
  ownername:process.env.OWNER_NAME || 'YASIYA',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'put your heroku_api_key',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.5.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'YASIYA-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
