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
