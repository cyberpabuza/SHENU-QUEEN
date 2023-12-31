/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "📝",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╔╍──╠☬ ` + fancytext(Config.ownername.split(' ')[0], 58) + ` ☬╣──╍╗\n`
                str +=
                    '```' + `│ □▰▰▰▰▰▰▰▰□
╏ ✪ 𝗨𝗦𝗘𝗥:-  ${citel.pushName}
╏ ✪ 𝗧𝗛𝗘𝗠𝗘:- ${tlang().title}
╏ ✪ 𝗣𝗥𝗘𝗙𝗜𝗫P:- [ ${prefix} ]
╏ ✪ 𝗢𝗪𝗡𝗘𝗥:- ${Config.ownername}
╏ ✪ 𝗣𝗟𝗨𝗚𝗜𝗡𝗦:- ${commands.length}
╏ ✪ 𝗨𝗦𝗘𝗥𝗦:- ${total}
╏ ✪ 𝗨𝗣𝗧𝗜𝗠𝗘:- ${runtime(process.uptime())}
╏ ✪ 𝗠𝗘𝗠:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}_
╏ ✪ 𝗧𝗜𝗠𝗘:- ${time}
╏ ✪ 𝗗𝗔𝗧𝗘:- ${date}
▣━━━━━━━━━━━━━━━▣
════════════════
👩‍🔧 SPICIAL THANK 
☞𝙼𝚁 𝙷𝙸𝙼𝙴𝚂𝙷  [𝙰𝙽𝙶𝙰𝙻 𝚀𝚄𝙴𝙴𝙽 𝙼𝙳]
☞𝙼𝚁 𝙷𝙰𝙽𝚂𝙰𝙼𝙰𝙻 [𝚀𝚄𝙴𝙴𝙽 𝙽𝙴𝚃𝙷𝚄 𝙼𝙳]
☞𝙼𝚁 𝚂𝙷𝙰𝙳𝙾𝚆 
════════════════
 ❀▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰❀
 𝗦𝗛𝗘𝗡𝗨 𝗤𝗨𝗘𝗘𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧
 ❀▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰❀\n
` + '```'
                for (const category in cmds) 
                {
                   str += `👩‍💻───┝★ *${tiny(category)}* ★┥\n` ;
                   if(text.toLowerCase() == category.toLowerCase()){ str = `╔─────♦ *${tiny(category)}* \n` ;      
                        for (const plugins of cmds[category]) { str += `│🔰 ${fancytext(plugins,1)}\n` ; }
                        str += `━━━━━━━━━━━━━━━━━━━\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[category]) { str += `┊ _${fancytext(plugins,1)}_\n` ; }
                         str += `━━━━━━━━━━━━━━━━━━━━━━\n`  ; 
                   }
  
                }
                str+= `🧚 *ꜱʜᴇɴᴜ-Qᴜᴇᴇɴ-ᴍᴅ ᴠ1*
👩‍💻 *ᴄʀᴇᴛᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴛʜᴜꜱʜᴀɴ*
🔰 *ʀᴇʟᴇꜱᴇ ɴᴏᴡ ?/08/2023*`
               let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                };
             await Void.sendMessage(citel.chat, { audio: {url: "https://github.com/Pramesh04/sup_to_ravana/raw/main/Audio/AUD-20230725-WA0323.mp3" }, mimetype: 'audio/mp4', ptt: true, }, { quoted: citel })
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //--------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "👤",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: false,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
