const url = 'https://gist.github.com/prabathLK/f602911954a959c8730aeb00a588d15d/raw'
  let { data } = await axios.get(url)
  for (vr in data){
  if((new RegExp(`\\b${vr}\\b`,'gi')).test(body)) conn.sendMessage(from,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:mek})   
    }
