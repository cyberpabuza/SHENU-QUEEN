cmd({
            pattern: "sound",
            react: "🎧",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<Dowanload Tiktok Sounds>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`*Give A Number Example: ${prefix}sound 5*`)
	const n = parseInt(text);
	if(n.toString()=="NaN" || n < 1 || n > 160 ) return citel.reply('```❌ Give Me A Number From 1 to 160```');
	   let url = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${n.toString()}.mp3`
            let anu  = await getBuffer(url)
//await Void.sendMessage(citel.chat, { audio: botzy_buffer, mimetype: 'audio/mp4', ptt: true })
        let buttonMessage = {
		audio: anu,
		fileName: url.toString() ,
		mimetype: 'audio/mp4',
		ptt: true 
		}
	return Void.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})
