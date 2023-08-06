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
    react: "🗣️",
    alias :['gpt'],
    desc: "chat with an AI(GPT)",
    category: "AI",
    use: '<Hii,Secktor>',
    filename: __filename,
},
async(Void, citel,text) => {
    let zx = text.length;
    if (zx < 8) {
        let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
        return citel.reply(data.cnt);  
    }
    if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
    // const { Configuration, OpenAIApi } = require("openai");
    // const configuration = new Configuration({
    //     apiKey: Config.OPENAI_API_KEY || "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",
    // });
    // const openai = new OpenAIApi(configuration);
    // const completion = await openai.createCompletion({
    //     model: "text-davinci-002",
    //     prompt: text,
    //     temperature: 0.5,
    //     max_tokens: 80,
    //     top_p: 1.0,
    //     frequency_penalty: 0.5,
    //     presence_penalty: 0.0,
    //     stop: ['"""'],
    // });
    // citel.reply(completion.data.choices[0].text);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Config.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", 
      messages: [{ role: "system", content: "You" }, { role: "user", content: text }],
    }),
  });

  const data = await response.json();
  console.log("GPT REPONCE : ",data); 
  if (!data.choices || data.choices.length === 0) {citel.reply("*Invalid ChatGPT API Key, Please Put New Key*"); }
  return await  citel.reply(data.choices[0].message.content)
	
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
	react: "🖥️",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/CYBER-THUSHAN/SHENU-QUEEN-V1')
        let cap = `
╔┅━━━━━━━━━━━━━━━━━━▣
┋  👋 ┋ 𝐻𝐸𝑌 ${citel.pushName}\n
┋ *🔥 ┋ 𝑇𝑂𝑇𝐴𝐿 𝑆𝑇𝐴𝑅𝑆:* ${data.stargazers_count} stars
┋ *🖥️ ┋ 𝐹𝑂𝑅𝐾𝑆:* ${data.forks_count} forks
┋ *🔮 ┋ 𝑅𝐸𝑃𝑂:* 𝐶𝑎𝑚𝑖𝑛𝑔 𝑆𝑜𝑜𝑛 😗
┋ *🗺️ ┋ 𝐺𝑅𝑂𝑈𝑃:* https://chat.whatsapp.com/KCb5XO0jhm676fNwkJz93o
┋ *👩‍💻 ┋ 𝐷𝐸𝑃𝐿𝑂𝑌 𝑌𝑂𝑈𝑅 𝑂𝑊𝑁:*-𝐶𝑦𝑏𝑒𝑟༆𝑻𝑯𝑼𝑺𝑯𝑨𝑵
┋  🚨 ┋ 𝑆𝐻𝐸𝑁𝑈 𝑄𝑈𝐸𝐸𝑁 𝑀𝐷 💫🧚 
╚┅━━━━━━━━━━━━━━━━━━━◈`	
            let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "Secktor-Repo",
                    body: "Easy to Use",
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
/* cmd({
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
🔰 *${tlang().title}* 🔱
*🚨Description:* *From the highlightsapp in the heatsapp that you can enjoy.*
*⏳Speed:* ${latensie.toFixed(4)} ms
*⏲️Uptime:* ${runtime(process.uptime())}
*📊Version:* 0.0.7
*👑Owner:*  ${Config.ownername}
*𝑃𝑜𝑤𝑒𝑟𝑒𝑑 𝑏𝑦 *${tlang().title}*
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
*/
//---------------------------------------------------------------------------
cmd({
    pattern: "theme",
    react: "📳",
    desc: "To find all themes",
    category: "general",
    filename: __filename,
},
async(Void, citel,text,{isCreator}) => {

if(!isCreator) return citel.reply(tlang().owner);
let str=" *All available themes in SHENU QUEEN 🧚* "
str+=`1. SHENU-QUEEN\n\n these are the themes of SHENU QUEEN Userbot.\_Reply ${prefix}setvar THEME:SHENU-QUEEN`
return citel.reply(str)
    
}
)
cmd({
            pattern: "list",
            alias: ["මෙනු" , "help" , "හෙල්ප් ", "උදව්", "cmd"],
            desc: "Help list",
            category: "general",
            react: "✅",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {


            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

╔╍╍╍❰ 𝗦𝗛𝗘𝗡𝗨 𝗤𝗨𝗘𝗘𝗠 𝗠𝗗 ❱╍╍╍╍╍╗
┋
┋ User         : ${citel.pushName}
┋ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
┋ This Is      : 𝗦𝗛𝗘𝗡𝗨-𝗤𝗨𝗘𝗘𝗡-𝗠𝗗-𝗕𝗢𝗧
┋ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
┋ Developer   : 𝗖𝗬𝗕𝗘𝗥-𝗧𝗛𝗨𝗦𝗛𝗔𝗡
┋ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
┋ Install Bot  : 𝗖𝗔𝗠𝗜𝗡𝗚 𝗦𝗢𝗢𝗡
┋ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
┋ ╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╗
┋ ┋ *MULITE DIVISE WHATSAPP BOT*
┋ ╔━━━━━━━━━━━━━━━━━━╗
┋ 🧚‍♀️┋ *SHENU-QUEEN-MD* ┋🧚‍♀️
╚─────────────────────────────╝
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

