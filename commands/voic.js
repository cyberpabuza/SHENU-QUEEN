const url = 'https://raw.githubusercontent.com/CYBER-THUSHAN/VOICE-TEST/main/Mp3/shenu%20v1/Hi.mp3'
  let { data } = await axios.get(url)
  for (vr in data){
  if((new RegExp(`\\b${vr}\\b`,'Hi')).test(body)) conn.sendMessage(from,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:mek})   
  }
