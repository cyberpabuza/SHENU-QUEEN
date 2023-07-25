const config = require('../config')
const { cmd, commands } = require('../lib/command')
const { fetchJson } = require('../lib/functions')
const hiru = require("../lib/news")
const Language = require('../lib/language')
const Lang = Language.getString('shenubot')
const Esana = require('@sl-code-lords/esana-news')
const derana = require("../lib/news")
const wabetainfo = require("@sl-code-lords/wabetainfo")
pkg = require('../package.json')
;(pkg.author != 'MR Hansamala' || pkg.name != 'Shenu-Queen-MD') &&
  console.log('Cloned Version Not Allowd\n\n Don t Copy'')

/*cmd({
    pattern: "wabeta",
    react: "🪀",
    desc: "Whatsapp beta news",
    category: "news",
    use : ".wabeta",
    filename: __filename
},
async(MrHansamala, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const wabeta = await fetchJson(`https://legend-army-api-54a6b8bcefe4.herokuapp.com/api/news/wabetainfo?&apikey=8dfg24th`);

const title = `${wabeta.result.title}`
const date = `${wabeta.result.date}`
const platform = `${wabeta.result.platform}`
const url = `${wabeta.result.url}`
const news = `${wabeta.result.fulldesc}`

await Secktor.sendMessage(from,  { image: { url: "https://telegra.ph/file/e848545de0e98c132a269.jpg" }, caption: `*ᴛɪᴛʟᴇ :* ${title}\n\n*ᴅᴀᴛᴇ :* ${date}\n\n*ᴘʟᴀᴛꜰᴏʀᴍ :* ${platform}\n\n*ᴜʀʟ :* ${url}\n\n*ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${news}\n\n*Dark SamuZa*`}, { quoted: mek })
}
catch(e){
console.log(e)
}})
*/

cmd({
    pattern: "wabeta",
    react: "🪀",
    desc: "Whatsapp beta news",
    category: "news",
    use : ".wabeta",
    filename: __filename
},
async(MrHansamala, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

 const latest = await wabetainfo.latest();
const title = `${latest.title}`
const date = `${latest.date}`
const platform = `${latest.platform}`
const url = `${latest.url}`
const news = `${latest.fulldesc}`
const cmnt =`${latest.faq.question}`
const cmnt2 =`${latest.faq.answer}`

await Secktor.sendMessage(from,  { image: { url: latest.image }, caption: `*📚 ᴛɪᴛʟᴇ :* ${title}\n\n*📅 ᴅᴀᴛᴇ :* ${date}\n\n*📡 ᴘʟᴀᴛꜰᴏʀᴍ :* ${platform}\n\n*🖇️ ᴜʀʟ :* ${url}\n\n*📑 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${news}\n\n *©ꜱʜᴇɴᴜ Qᴜᴇᴇɴ ᴍᴅ*`}, { quoted: mek })
}
catch(e){
console.log(e)
}})

cmd({
    pattern: "wabetaall",
    react: "🪀",
    desc: "Whatsapp beta news",
    category: "news",
    use : ".wabetaall",
    filename: __filename
},
async(MrHansamala, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const posts = await wabetainfo.articlelist()
let teks = '*💃♥️ Wa Beta Info💃♥️*\n\n'
let no = 1
for (let i of posts) {
    teks += `📑No : ${no++}\n*📚title :* ${i.title}\n*📅 Date:* ${i.date}\n*📡 Platform :* ${i.platform}\n*💭 Desc:* ${i.shortdesc}\n*🖇️ url :* ${i.url}\n\n─────────────────\n\n`
    
}
teks += `*©ꜱʜᴇɴᴜ Qᴜᴇᴇɴ ᴍᴅ*`
Secktor.sendMessage(from, { image: { url: 'https://telegra.ph/file/e848545de0e98c132a269.jpg' },  caption: teks }, { quoted: mek })

}
catch(e){
console.log(e)
}})
//====================================================================
cmd({
    pattern: "nasa",
    react: "✨",
    desc: "latest nasa news",
    category: "news",
    use : ".nasa",
    filename: __filename
},
async(MrHansamala, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const nasa = await fetchJson(`https://api.nasa.gov/planetary/apod?api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk`);

const image = `${nasa.url}`    
const title = `${nasa.title}`
const date = `${nasa.date}`
const explanation = `${nasa.explanation}`

await Secktor.sendMessage(from,  { image: { url: image }, caption: `*ᴛɪᴛʟᴇ :* ${title}\n\n*ᴅᴀᴛᴇ :* ${date}\n\n*ᴇxᴘʟᴀɴᴀᴛɪᴏɴ :* ${explanation}\n\n *©ꜱʜᴇɴᴜ Qᴜᴇᴇɴ ᴍᴅ*`}, { quoted: mek })
}
catch(e){
console.log(e)
}})
//====================================================================
cmd({
    pattern: "hirunews",
    react: "🗞️",
    desc: "hirutv news",
    category: "news",
    use : ".hirunews",
    filename: __filename
},
async(MrHansamala, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const latest_hiru_data = await hiru.latestHiru();
await Secktor.sendMessage(from,  { image: { url: latest_hiru_data.img }, caption: `*${latest_hiru_data.title}*\n\n${latest_hiru_data.desc}\n\n${latest_hiru_data.link}\n\n *©ꜱʜᴇɴᴜ Qᴜᴇᴇɴ ᴍᴅ*`}, { quoted: mek })
}
catch(e){
console.log(e)
}})

cmd({
    pattern: "derananews",
    react: "🗞️",
    desc: "Ada derana News news",
    category: "news",
    use : ".hirunews",
    filename: __filename
},
async(MrHansamala, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const latest_derana_data = await derana.latestDerana();
await Secktor.sendMessage(from,  { image: { url: latest_derana_data.img }, caption: `*${latest_derana_data.title}*\n\n${latest_hiru_derana.desc}\n\n${latest_hiru_derana.link}\n\n *©ꜱʜᴇɴᴜ Qᴜᴇᴇɴ ᴍᴅ*`}, { quoted: mek })
}
catch(e){
console.log(e)
}}}
