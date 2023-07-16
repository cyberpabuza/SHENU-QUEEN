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

const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------
cmd({
    pattern: "chat",
    alias :['gpt'],
    desc: "chat with an AI(GPT)",
    category: "AI",
    use: '<Hii,Nethu>',
    filename: __filename,
},
async(Void, citel,text) => {
    let zx = text.length;
    if (zx < 8) {
        let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
        return citel.reply(data.cnt);  
    }
    if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: Config.OPENAI_API_KEY || "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",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: text,
        temperature: 0.5,
        max_tokens: 80,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ['"""'],
    });
    citel.reply(completion.data.choices[0].text);
}
)

cmd({
    pattern: "dalle",
    alias : ['dall','dall-e'],
    desc: "Create Image by AI",
    category: "AI",
    use: '<an astronaut in mud.>',
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => 
{
//if (!isCreator) return citel.reply(tlang().owner)
if (Config.OPENAI_API_KEY=='') return citel.reply('You Dont Have OPENAI_API_KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys');
if (!text) return citel.reply(`*Give Me A Query To Get Dall-E Reponce ?*`); 
const imageSize = '256x256'
const apiUrl = 'https://api.openai.com/v1/images/generations';
const response = await fetch(apiUrl, {
method: 'POST',
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${Config.OPENAI_API_KEY}`
},
body: JSON.stringify({
  model: 'image-alpha-001',
  prompt: text,
  size: imageSize ,
  response_format: 'url'
})
});

const data = await response.json();
let buttonMessage = {
    image:{url:data.data[0].url},
    caption : '*---Your DALL-E Result---*'

}

Void.sendMessage(citel.chat,{image:{url:data.data[0].url}})
}
)

//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        react: "🧛‍♀️",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/mrhansamala/Queen-Nethu-MD')
        let cap = `╭═════╍╍╍╍╍╍╍╍╍╍═══════°
*╎ 💕 𝑄𝛯𝛯𝛮 𝛮𝛯𝑇𝛨𝑈 𝛭𝐷💕*
*╎ ✶✶✶✶✶✶✶═╍═╍═╍═✶✶✶✶✶✶✶*
*╽🤓 🄷🄴🅈* ${citel.pushName}\n
*╿✨:🅃🄾🅃🄰🄻 🅂🅃🄰🅁🅂 :* ${data.stargazers_count} stars
*╽👑🄶🄾🅁🄺🅂 :* ${data.forks_count} forks
*╿🔥 🅁🄴🄿🄾 :* Cᴏᴍᴍɪɴɢ Sᴏᴏɴ/Rᴇᴘᴏ
*╽🥏 🄶🅁🄾🅄🄿:* Cᴏᴍᴍɪɴɢ Sᴏᴏɴ/Sᴜᴘᴘᴏʀᴛt
*╿👨🏻‍💻 🄱🄾🅃 🄾🅆🄽🄴🅁:*-
 MR.Hᴀɴꜱᴀᴍᴀʟᴀ
*╽🌟:🅆* 𝒐𝒓𝒍𝒅 *🄱* 𝒆𝒔𝒕 *🅆* 𝒉𝒕𝒔𝒂𝒑𝒑 *🄱* 𝒐𝒕 
*╿🇱🇰 *🄼* 𝒂𝒅𝒆 *🄱* 𝒚 *🅂* 𝒓𝒊 *🄻* 𝒂𝒏𝒌𝒂
*╎ ✶✶✶✶✶✶✶═╍═╍═╍═✶✶✶✶✶✶✶*
*┊  🪢𝙿𝚘𝚠𝚎𝚛𝚍 𝙱𝚢 𝙽𝚎𝚝𝚑𝚞 𝙼𝚍 𝚃𝚎𝚊𝚖*
*╰═════╍╍╍╍╍╍╍╍╍╍═══════°*`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "Queen-Nethu-MD",
                    body: "ᴍʀ ʜᴀɴꜱᴀᴍᴀʟᴀ",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
🔰 *${tlang().title}* 🔰
*🌟Description:* A WhatsApp bot with rich features, build in NodeJs to make your WhatsApp enjoyable.
*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 0.0.7
*👤Owner:*  ${Config.ownername}
*Powered by ${tlang().title}*
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
