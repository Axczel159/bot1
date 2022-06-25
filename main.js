const fs = require("fs");
const { keep_alive } = require("./keep_alive.js");
const http = require('https'); // or 'https' for https:// URLs
const login = require("fca-unofficial");
const axios = require("axios");
const cheerio = require('cheerio');
const YoutubeMusicApi = require('youtube-music-api');
const ytdl = require('ytdl-core');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const ffmpegs = require('fluent-ffmpeg');
ffmpegs.setFfmpegPath(ffmpeg.path);
const musicApi = new YoutubeMusicApi();
const sharp = require("sharp");
const whois = require('whois-api');
const GoogleImages = require('google-images');
const request = require('request');
const akaneko = require('akaneko');
const google = require('googlethis');
const Innertube = require('youtubei.js');
const {TraceMoe} = require("trace.moe.ts");
const malScraper = require('mal-scraper');
const TorrentIndexer = require("torrent-indexer");
const { createCanvas, loadImage } = require('canvas');
const sagiri = require("sagiri");
const FastSpeedtest = require("fast-speedtest-api");
const sckey = require('soundcloud-key-fetch');
const { SoundCloud } = require("scdl-core");
const { wiki } = require("vtuber-wiki");
const ytch = require('yt-channel-info');
const { YoutubeDataAPI } = require("youtube-v3-api");
const getVideoId = require('get-video-id');
const API_KEY = 'AIzaSyDQ00nO5Xpj8rtme1fnYWbZAU7RM0gt8Qk';
const gTTS = require('gtts');
const Genius = require("genius-lyrics");
const Client = new Genius.Client("mKWeRmfvMWGAP4hF516pez035U6D_xM2w4XPgpRHI_F8v14qtnTDmpXMcgaV0vQn");
const Chatbot  =  require("discord-chatbot");
const lmao = require('djs-chatbot');
const smartestchatbot = require('smartestchatbot');
const express = require('express');
const {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} = require('mathjs');
const anonfile = require('anonfile-lib');
// GLOBAL MESSAGE STORAGE
let msgs = {};
let vips = ['100046351269353','100011606989153','100063176375996','100066154613109','100065084151905','1411758035'];
let cd = {};
/*======================================== BIBLE VERSE ============================================*/
async function verse(){
    let randomverse = await axios.get("http://labs.bible.org/api/?passage=random&type=json").then((response) => {
        return response.data[0]
    }).catch((err) => {
        return "Error"
    })
    return randomverse
}
/*====================================== BIBLE VERSE ==============================================*/
async function saikiiWrap(ctx, text, maxWidth) {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 
/*====================================Crypto Updates API ====================================*/
async function crypto(coinid){
    let Crypto = await axios.get("https://api.coinpaprika.com/v1/tickers/"+coinid).then((response) => {
        return response.data
    }).catch((err) => {
        return "Error"
    })
    return Crypto
}
/*====================================Crypto Updates API ====================================*/
async function qrdecode(imgurl){
    let QRdecode = await axios.get("http://api.qrserver.com/v1/read-qr-code/?fileurl="+imgurl).then((response) => {
        return response.data
    }).catch((err) => {
        return "Error"
    })
    return QRdecode
}
/*====================================REDDIT RANDOM MEME API Function ====================================*/
async function RedditMeme() {
    let PNG = await axios.get("https://meme-api.herokuapp.com/gimme").then((response) => { return response.data}).catch((err) => { return "err " });
    return PNG
}
/*====================================REDDIT RANDOM MEME API Function ====================================*/
/*====================================Text on Image Function ====================================*/
async function addTextOnImage(t) {
    try {
        let img = await sharp("/fact.png").metadata();
    
        const width = img.width;
        const height = img.height;
        const text = t;
        const svgImage = `
        <svg width="${width}" height="${height}">
        <style>
        .title { fill: #000; font-size: 30px; font-family: Tahoma;}
        </style>
        <text x="23%" y="48%" text-anchor="middle" class="title" transform="translate(100,100) rotate(0)" text-align="justify" text-justify="inter-word" textLength="10">${text}</text>
        </svg>
        `;
        const svgBuffer = Buffer.from(svgImage);
        const image = await sharp(svgBuffer).toFile(`${t}_txt.png`);
        await sharp("/fact.png")
            .composite([{
                input: `${t}_txt.png`,
                top: 50,
                left: 50,
            }, ]).toFile(`${t}_output.png`);
        return true
    } catch (error) {
console.log(error.message);
        return false
    }
}
/*==================================== Text on Image Function ====================================*/
/*==================================== LEECH tiktok FUNC ====================================*/
async function leechTT(link) {
    out = await axios.get("https://www.tiktokdownloader.org/check.php?v=" + link).then((response) => { return response.data.download_url }).catch((error) => { return "err" })
    return out
}
/*==================================== LEECH tiktok FUNC ====================================*/
/*==================================== LEECH MP3 FUNC ====================================*/
async function conv(v, t, e) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-Key': 'de0cfuirtgf67a'
    }
    results = await axios.post("https://backend.svcenter.xyz/api/convert-by-45fc4be8916916ba3b8d61dd6e0d6994", "v_id=" + v + "&ftype=mp3&fquality=128&token=" + t + "&timeExpire=" + e + "&client=yt5s.com", { headers: headers }).then((response) => { return response.data.d_url }).catch((error) => { return error.message });
    return results
}
async function fetch(query) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    results = await axios.post("https://yt5s.com/api/ajaxSearch", "q=" + query + "&vt=mp3", { headers: headers }).then((response) => { return response.data }).catch((error) => { return error.message });
    return results
}
async function leechmp3(query) {
    var songs = fetch(query);
    let resp = await songs.then((response) => {
        let slist = response;
        if (slist == "err") {
            return "err"
        }
        else if (slist.t < 1300) {
            let d_url = conv(slist.vid, slist.token, slist.timeExpires).then((response) => {
                return [response, slist.title]
            });
            return d_url
        }
        else if (slist.p == "search") {
            return 'err'
        }
        else if (slist.mess.startsWith("The video you want to download is posted on TikTok.")) {
            return 'tiktok'
        }
        else {
            return 'pakyo'
        }
    });
    return resp
}
/*==================================== LEECH MP3 FUNC ====================================*/
/*==================================== RANDOM QOUTES FUNC ====================================*/
async function getWiki(q) {
  out = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + q).then((response) => {
    return response.data}).catch((error) => { return error })
  return out
}
async function qt() {
    let qoute = await axios.get("https://zenquotes.io/api/random").then((response) => { return response.data[0] }).catch((err) => { return "err " });
    return qoute
}
async function animequote() {
    let qoute = await axios.get("https://animechan.vercel.app/api/random").then((response) => { return response.data}).catch((err) => { return "err " });
    return qoute
}
/*==================================== RANDOM QOUTES FUNC ====================================*/
login({ appState: JSON.parse(fs.readFileSync('fbstate.json', 'utf8')) }, (err, api) => {
    if (err) return console.error(err);
    api.setOptions({ listenEvents: true });
    const listenEmitter = api.listen(async (err, event) => {
        if (err) return console.error(err);
        switch (event.type) {
            case "message_reply":
 if (vips.includes(event.senderID)) {
api.setMessageReaction("", event.messageID, (err) => {
                  }, true);
                }
                else {
api.setMessageReaction("", event.messageID, (err) => {
                    }, true);
                }
let msgid = event.messageID
let input = event.body;
msgs[msgid] = input;
            if (input.startsWith("!AnonUpload")){
const { threadID, messageID, type, messageReply } = event;
if (type != "message_reply") return
if (messageReply.attachments.length < 1){ api.sendMessage("No Attachment Detected\n\nConverting Message to a text file!",event.threadID,event.messageID);
await new Promise(resolve => setTimeout(resolve, 2000));
  fs.writeFileSync("Message.txt", messageReply.body, "utf8");
anonfile.upload('./Message.txt').then((info) => {
    fs.unlinkSync("Message.txt");
api.sendMessage("Anon File Upload\n\nName: "+info.data.file.metadata.name+"\n\nSize: "+info.data.file.metadata.size.readable+"\n\nURL: "+info.data.file.url.full,event.threadID,event.messageID);

})
}else if (messageReply.attachments[0].type === 'photo'){
request(messageReply.attachments[0].url).pipe(fs.createWriteStream(messageReply.attachments[0].name+".png")).on('finish',() => {
anonfile.upload('./'+messageReply.attachments[0].name+'.png').then((info) => {
api.sendMessage("Anon File Upload\n\nName: "+info.data.file.metadata.name+"\n\nSize: "+info.data.file.metadata.size.readable+"\n\nURL: "+info.data.file.url.full,event.threadID,event.messageID);
fs.unlinkSync(messageReply.attachments[0].name+'.png')
})})}
else if (messageReply.attachments[0].type === 'file'){
request(messageReply.attachments[0].url).pipe(fs.createWriteStream(messageReply.attachments[0].filename)).on('finish',() => {
anonfile.upload('./'+messageReply.attachments[0].filename).then((info) => {
  api.sendMessage("Anon File Upload\n\nName: "+info.data.file.metadata.name+"\n\nSize: "+info.data.file.metadata.size.readable+"\n\nURL: "+info.data.file.url.full,event.threadID,event.messageID);
fs.unlinkSync(messageReply.attachments[0].filename)
})})}
else if (messageReply.attachments[0].type === 'video'){request(messageReply.attachments[0].url).pipe(fs.createWriteStream(messageReply.attachments[0].filename)).on('finish',() => {anonfile.upload('./'+messageReply.attachments[0].filename).then((info) => {
    api.sendMessage("Anon File Upload\n\nName: "+info.data.file.metadata.name+"\n\nSize: "+info.data.file.metadata.size.readable+"\n\nURL: "+info.data.file.url.full,event.threadID,event.messageID);
  fs.unlinkSync(messageReply.attachments[0].filename)
})})}
else if (messageReply.attachments[0].type === 'sticker'){
request(messageReply.attachments[0].url).pipe(fs.createWriteStream(messageReply.attachments[0].caption+".png")).on('finish',() => {
anonfile.upload('./'+messageReply.attachments[0].caption+'.png').then((info) => {
    api.sendMessage("Anon File Upload\n\nName: "+info.data.file.metadata.name+"\n\nSize: "+info.data.file.metadata.size.readable+"\n\nURL: "+info.data.file.url.full,event.threadID,event.messageID);
  fs.unlinkSync(messageReply.attachments[0].caption+'.png')
})})}
else if (messageReply.attachments[0].type === 'animated_image'){
request(messageReply.attachments[0].url).pipe(fs.createWriteStream(messageReply.attachments[0].filename+".gif")).on('finish',() => {
anonfile.upload('./'+messageReply.attachments[0].filename+'.gif').then((info) => {
    api.sendMessage("Anon File Upload\n\nName: "+info.data.file.metadata.name+"\n\nSize: "+info.data.file.metadata.size.readable+"\n\nURL: "+info.data.file.url.full,event.threadID,event.messageID);
  fs.unlinkSync(messageReply.attachments[0].filename+'.gif')
})})}
else if (messageReply.attachments[0].type === 'audio'){
request(messageReply.attachments[0].url).pipe(fs.createWriteStream(messageReply.attachments[0].filename)).on('finish',() => {
anonfile.upload('./'+messageReply.attachments[0].filename).then((info) => {
    api.sendMessage("Anon File Upload\n\nName: "+info.data.file.metadata.name+"\n\nSize: "+info.data.file.metadata.size.readable+"\n\nURL: "+info.data.file.url.full,event.threadID,event.messageID);
  fs.unlinkSync(messageReply.attachments[0].filename)
})})}
}
          if (input.startsWith("!FindSauce")) {
          const { threadID, messageID, type, messageReply } = event;
if (type != "message_reply") return           
	if (messageReply.attachments.length > 1)return 
	if (messageReply.attachments[0].type == 'photo'){
const url = messageReply.attachments[0].url;
api.sendMessage("Pouring some sauce ♨...", event.threadID,event.messageID);
//await new Promise(resolve => setTimeout(resolve, 3000));    
const client = sagiri("664fc648f1f0e6e52fc499fcbb28f892b7b31eda");
const results = await client(url).then(res =>{ 
  console.log(res[0]);
  //Danbooru
  if (res[0].index === 9){
  var r0 = res[0].raw.data.creator;
  var r1 = res[0].raw.data.characters;
  var r2 = res[0].raw.data.material;
  var r3 = res[0].raw.header.similarity;
  var r4 = res[0].raw.data.source;
api.sendMessage("Creator: "+r0+"\n\nCharacter(s): "+r1+"\n\nMaterial: "+r2+"\n\nSimilarity: "+r3+"%"+"\n\nSource: "+r4, event.threadID,event.messageID);
}
  //Pixiv
  else if (res[0].index === 5){
 var r0 = res[0].authorName;
  var r1 = res[0].raw.data.title;
  var r2 = res[0].raw.data.pixiv_id;
  var r3 = res[0].raw.data.member_name;
  var r4 = res[0].similarity;
var r5 = res[0].url;
api.sendMessage("Author Name: "+r0+"\n\nTitle: "+r1+"\n\nPixivID: "+r2+"\n\nMember Name: "+r3+"\n\nSimilarity: "+r4+"%"+"\n\nSource: "+r5, event.threadID,event.messageID);
                             }
  //Pixiv 2nd Index
  else if (res[0].index === 6){
 var r0 = res[0].authorName;
  var r1 = res[0].raw.data.title;
  var r2 = res[0].raw.data.pixiv_id;
  var r3 = res[0].raw.data.member_name;
  var r4 = res[0].similarity;
var r5 = res[0].url;
api.sendMessage("Author Name: "+r0+"\n\nTitle: "+r1+"\n\nPixivID: "+r2+"\n\nMember Name: "+r3+"\n\nSimilarity: "+r4+"%"+"\n\nSource: "+r5, event.threadID,event.messageID);
           }
  //Devian Art
else if (res[0].index === 34){
 var r0 = res[0].authorName;
  var r1 = res[0].raw.data.title;
  var r2 = res[0].raw.data.da_id;
  var r4 = res[0].raw.header.similarity;
var r5 = res[0].url;
api.sendMessage("Author Name: "+r0+"\n\nTitle: "+r1+"\n\nDevianArtID: "+r2+"\n\nSimilarity: "+r4+"%"+"\n\nSource: "+r5, event.threadID,event.messageID);
}
  //Yande.re
else if (res[0].index === 12){
 var r0 = res[0].raw.data.creator;
  var r1 = res[0].raw.data.title;
  var r2 = res[0].raw.data.yandere_id;
  var r3 = res[0].raw.data.characters;
  var r4 = res[0].raw.data.material;
  var r5 = res[0].raw.header.similarity;
  var r6 = res[0].raw.data.source;
var r7 = res[0].url;
api.sendMessage("Author Name: "+r0+"\n\nTitle: "+r4+"\n\nYandereID: "+r2+"\n\nCharacters: "+r3+"\n\nMaterial: "+r4+"\n\nSimilarity: "+r5+"%"+"\n\nSource: "+r6+"\n\nSource Link: "+r7, event.threadID,event.messageID);
  }
  //Nico Nico Seiga
  else if (res[0].index === 8){
 var r0 = res[0].raw.data.member_name;
  var r1 = res[0].raw.data.title;
  var r2 = res[0].raw.data.seiga_id;
  var r5 = res[0].similarity;
var r7 = res[0].url;
api.sendMessage("Author Name: "+r0+"\n\nTitle: "+r1+"\n\nSeigaID: "+r2+"\n\nSimilarity: "+r5+"%"+"\n\nSource: "+r7, event.threadID,event.messageID);
  }
  //Anidb
else if (res[0].index === 21){
 var r0 = res[0].raw.data.source;
  var r1 = res[0].raw.data.year;
  var r2 = res[0].raw.data.anidb_aid;
  var r3 = res[0].raw.data.mal_id;
  var r4 = res[0].raw.data.anilist_id;
  var r5 = res[0].similarity;
var r7 = res[0].url;
api.sendMessage("Source: "+r0+"\n\nYear: "+r1+"\n\nAniDb ID: "+r2+"\n\nMyAnimeList ID: "+r3+"\n\nAniList ID: "+r4+"\n\nSimilarity: "+r5+"%"+"\n\nSource: "+r7, event.threadID,event.messageID);
    }
  //mangaupdates.com
else if (res[0].index === 36){
 var r0 = res[0].raw.data.type;
  var r1 = res[0].raw.data.source;
  var r2 = res[0].raw.data.mu_id;
  var r3 = res[0].raw.data.part;
  var r5 = res[0].similarity;
var r7 = res[0].url;
api.sendMessage("Type: "+r0+"\n\nTitle: "+r1+"\n\nMangaUpdates ID: "+r2+"\n\nPart: "+r3+"\n\nSimilarity: "+r5+"%"+"\n\nSource: "+r7, event.threadID,event.messageID);
}
  //sankaku ch.
else if (res[0].index === 27){
 var r0 = res[0].raw.data.creator;
  var r2 = res[0].raw.data.sankaku_id;
  var r3 = res[0].raw.data.characters;
  var r4 = res[0].raw.data.material;
  var r5 = res[0].similarity;
  var r6 = res[0].raw.data.source;
var r7 = res[0].url;
api.sendMessage("Creator Name: "+r0+"\n\nTitle: "+r4+"\n\nSankaku ID: "+r2+"\n\nCharacter(s): "+r3+"\n\nMaterial: "+r4+"\n\nSimilarity: "+r5+"%"+"\n\nSource: "+r7+"\n\n2nd Source: "+r6, event.threadID,event.messageID);
  }
  //nhentai.net
else if (res[0].index === 18){
 var r0 = res[0].raw.data.eng_name;
  var r1 = res[0].raw.data.jp_name;
  var r2 = res[0].raw.data.creator;
  var r5 = res[0].similarity;
  var r6 = res[0].raw.data.source;
var r7 = res[0].url;
api.sendMessage("EN Name: "+r0+"\n\nJP Name: "+r1+"\n\nCreator(s): "+r2+"\n\nSimilarity: "+r5+"%"+"\n\nSource: "+r6+"\n\nSource Link: "+r7, event.threadID,event.messageID);
           }
  //IMDb
else if (res[0].index === 23){
 var r0 = res[0].raw.data.source;
  var r1 = res[0].raw.data.part;
  var r2 = res[0].raw.data.imdb_id;
  var r3 = res[0].raw.data.year;
  var r5 = res[0].similarity;
var r7 = res[0].url;
api.sendMessage("Creator Name: "+r0+"\n\nPart: "+r1+"\n\nIMDb ID: "+r2+"\n\nYear: "+r3+"\n\nSimilarity: "+r5+"%"+"\n\nSource: "+r7, event.threadID,event.messageID);
  }
  //IMDb 2nd
else if (res[0].index === 24){
 var r0 = res[0].raw.data.source;
  var r1 = res[0].raw.data.part;
  var r2 = res[0].raw.data.imdb_id;
  var r3 = res[0].raw.data.year;
  var r5 = res[0].similarity;
var r7 = res[0].url;
api.sendMessage("Creator Name: "+r0+"\n\nPart: "+r1+"\n\nIMDb ID: "+r2+"\n\nYear: "+r3+"\n\nSimilarity: "+r5+"%"+"\n\nSource: "+r7, event.threadID,event.messageID);
  }
  //Pawoo
else if (res[0].index === 35){
 var r0 = res[0].raw.data.pawoo_user_username;
  var r1 = res[0].raw.pawoo_user_display_name;
  var r2 = res[0].raw.data.pawoo_id;
  var r3 = res[0].raw.data.created_at;
  var r5 = res[0].similarity;
var r7 = res[0].url;
api.sendMessage("User Name: "+r0+"\n\nDisplay Name: "+r1+"\n\nPawooID: "+r2+"\n\nCreation TimeStamp: "+r3+"\n\nSimilarity: "+r5+"%"+"\n\nUser Link: "+r7, event.threadID,event.messageID);
}
  //bcy.net illust
else if (res[0].index === 12){
 var r0 = res[0].authorName;
  var r1 = res[0].raw.data.title;
  var r2 = res[0].raw.data.bcy_type;
  var r3 = res[0].raw.data.bcy_id;
  var r5 = res[0].raw.header.similarity;
  var r6 = res[0].authorUrl;
var r7 = res[0].url;
api.sendMessage("Author Name: "+r0+"\n\nTitle: "+r1+"\n\nType: "+r2+"\n\nID: "+r3+"\n\nSimilarity: "+r5+"%"+"\n\nAuthor Link: "+r6+"\n\nSource Link: "+r7, event.threadID,event.messageID);
    }
                            })
            }
    }
            if (input.startsWith("!SauceV1")) {  
              const { threadID, messageID, type, messageReply } = event;
if (type != "message_reply") return           
	if (messageReply.attachments.length > 1) return
	if (messageReply.attachments[0].type == 'photo') {
    const url = messageReply.attachments[0].url;
api.sendMessage("Pouring some sauce♨...", event.threadID,event.messageID);
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png")).on('finish',() => {
  const sauce = new TraceMoe();
sauce.fetchAnimeFromBuffer(fs.readFileSync("SharedFiles/photo.png")).then((res) => { 
  fs.unlinkSync("SharedFiles/photo.png");
request(res.result[0].video).pipe(fs.createWriteStream("SharedFiles/video.mp4")).on('finish',() => {var message = {
          body:("======1st Result======\nNAME: "+res.result[0].filename+"\n\nEPISODE: "+res.result[0].episode+"\n =====2nd Result =====\nNAME: "+res.result[1].filename+"\n\nEPISODE: "+res.result[1].episode),
         attachment: 
fs.createReadStream(__dirname + "/SharedFiles/video.mp4")}
api.sendMessage(message, event.threadID,event.messageID);}).on('finish',()=>{fs.unlinkSync("SharedFiles/video.mp4")})                            })
})
            }}
            if (input.startsWith("BotUnsend") && vips.includes(event.senderID)) {
            api.unsendMessage(event.messageReply.messageID, (err) => {
              if (err) {
api.sendMessage("Note: Unsend Command can only used by VIP user.", event.threadID, event.messageID);
              } else {console.log("Unsend Done");
              }
            })
            }
                break;
            case "message":
if (vips.includes(event.senderID)) {            api.setMessageReaction("", event.messageID, (err) => {
                  }, true);
                }
                else {
api.setMessageReaction("", event.messageID, (err) => {
                    }, true);
                }
                if (event.attachments.length != 0) {
                    if (event.attachments[0].type == "photo") {msgs[event.messageID] = ['img', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "animated_image") {msgs[event.messageID] = ['gif', event.attachments[0].url]
                    }
                     else if (event.attachments[0].type == "sticker") {msgs[event.messageID] = ['sticker', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "video") {msgs[event.messageID] = ['vid', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "audio") {msgs[event.messageID] = ['vm', event.attachments[0].url]
                    }
                } else {msgs[event.messageID] = event.body
                }
                if (event.body != null) {
                    let input = event.body;                       
                  if (input.startsWith("!leech")) {
                        let data = input.split(" ");
                        if (data.length < 2) {    api.sendMessage("⚠️Invalid Use Of Command!\n💡Usage: !leech yt_url", event.threadID);
                        } else {   api.sendMessage("🔃Trying to Download...", event.threadID, event.messageID);
                            try {   let s = leechmp3(data[1]);  s.then((response) => {
                                    if (response == "pakyo") {
                                        api.setMessageReaction("🖕🏾", event.messageID, (err) => {
                                        }, true);
                                        api.sendMessage("TANGINA MO FAQ😠\nULOL 20mins Max Duration Only!😝", event.threadID, event.messageID);
                                    }
                                    else if (response == "err") {
                                        api.sendMessage("❌Invalid Input", event.threadID, event.messageID);
                                        api.setMessageReaction("😭", event.messageID, (err) => {

                                        }, true);
                                    }
                                    else if (response == "tiktok") {
                                        api.sendMessage("❌Youtube Only, Bawal Tiktok!", event.threadID, event.messageID);
                                        api.setMessageReaction("😡", event.messageID, (err) => {

                                        }, true);
                                    }
                                    else if (response[0] != undefined) {
                                        var file = fs.createWriteStream("SharedFiles/music.mp3");
                                        var targetUrl = response[0];
                                        var gifRequest = http.get(targetUrl, function (gifResponse) {
                                            gifResponse.pipe(file);
                                            file.on('finish', function () {
                                                console.log('finished downloading..')
                                                api.sendMessage('✅Download Complete! Uploading...', event.threadID)
                                                var message = {
                                                    body: "Downloading Complete!\n\n🎶Song Title: " + response[1] + "\n\nNote: Please don't flood the bot!",
                                                    attachment: fs.createReadStream(__dirname + '/song.mp3')
                                                }
                                                api.sendMessage(message, event.threadID);
                                            });
                                        });
                                    }
                                });
                            } catch (err) {
                                api.sendMessage("⚠️Error: " + err.message, event.threadID);
                            }
                        }}
else if (input.startsWith("test1")){
  const r = await google.search("hentai pics");
  const url = r.results[0].url;
  console.log(r)
  
}
else if (input.startsWith("!Solve")){
  var text = input;     
text = text.substring(7)
  if (text.includes("√")){
    const res = await sqrt(text.replace(/√/gi,""));
    console.log(res)
    api.sendMessage("=>🌸Math Solver🌸<=\n\nProblem: "+text+"\n\nAnswer: "+res,event.threadID,event.messageID)
  }else{
const res = await evaluate(text);
  api.sendMessage("=>🌸Math Solver🌸<=\n\nProblem: "+text+"\n\nAnswer: "+res,event.threadID,event.messageID)}
}
else if (input.startsWith("!Compile")){
  var text = input;     
text = text.substring(9)
  const words = text.split(' ');
const Words = text.substring(text.indexOf(' ')+1);
var program = {
    script : Words,
    language: words[0],
    versionIndex: "0",
    clientId: "1b847c69ddb236992249b20fd43e6692",
    clientSecret:"ae03a4921775d4958cce5dd6849022aa2a90da0b13883ab148257efcb52c0343"
};
request({
    url: 'https://api.jdoodle.com/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
  if (!body.error){
  var res = body.output;
api.sendMessage("Output:\n\n"+res,event.threadID,event.messageID);
  }else{
api.sendMessage("Output:\n\n"+body.error,event.threadID,event.messageID);
  }});
}
else if (input.startsWith("TT")){
  const url = "https://virtualyoutuber.fandom.com/wiki/Amano_Pikamee?so=search";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const basicDetails = $("section div");
    const res = [];
    basicDetails.each((idx, el) => {
      const info = {};
      info.data1 = $(el).children("[class='pi-data-label pi-secondary-font']").text();
      info.data2 = $(el).children("[class='pi-data-value pi-font']").text();
      info.data3 = $(el).children("[class='pi-data-value pi-font']").children("a").attr("href");
      res.push(info);
    });
    console.dir(res);
  }
else if (input.startsWith("!LRCdownload")){
  var text = input;     
text = text.substring(13)
  const url = "https://www.megalobiz.com/search/all?qry="+text.replace(/ /gi,"+");
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $(".entity_full_member_image");
  const Q = [];
  listItems.each((idx, el) => {
    const E = {};
    E.data = $(el).children("a")[0].attribs.href;
    Q.push(E);
    });
  const newUrl = Q[0].data;
  const Newurl = "https://www.megalobiz.com"+newUrl;
  const Data = await axios.get(Newurl);
    const R = cheerio.load(Data.data);
    const list = R("[class='lyrics_details entity_more_info']");
  let title = R('.profile_h1');
  const V = [];
  list.each((idx, el) => {
    const P = {};
    P.data = R(el).children("span").text();
    V.push(P);
    });
  var Title = title.text();
fs.writeFile("SharedFiles/music_lyrics.lrc",V[0].data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  var message = {
          body: "How to use .lrc files?\n\n-download .lrc file\n-rename your .lrc file same to your .mp3 filename(dont change the file extention)\n-move your .lrc file to same folder where your .mp3 files located\n\n"+Title+"\n\nSource: "+Newurl,
         attachment: fs.createReadStream(__dirname + "/SharedFiles/music_lyrics.lrc")}
  api.sendMessage(message, event.threadID,event.messageID);
    })
}
else if (input.startsWith("!AnimeScrape")){
  var text = input;     
text = text.substring(13)
const url = "https://nyaa.si/?f=0&c=1_2&q="+text;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const arrayList = $(".table-responsive table tbody tr");
    const res = [];
    arrayList.each((idx, el) => {
      const Data = {};
      Data.name = $(el).children("td").children("a").text().replace(/\t/gi,"").replace(/\n/gi,"");
      Data.torrentLink = $(el).children(".text-center").children("a")[1].attribs.href;
      res.push(Data);
    });
  var name1 = res[0].name;
  var link1 = res[0].torrentLink;
  var name2 = res[1].name;
  var link2 = res[1].torrentLink;
  var name3 = res[2].name;
  var link3 = res[2].torrentLink;
  var name4 = res[3].name;
  var link4 = res[3].torrentLink;
  var name5 = res[4].name;
  var link5 = res[4].torrentLink;
fs.writeFile("SharedFiles/torrent-links.txt","🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹\n"+name1+"\n\n"+link1+"\n\n\n🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹\n"+name2+"\n\n"+link2+"\n\n\n🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹\n"+name3+"\n\n"+link3+"\n\n\n🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹\n"+name4+"\n\n"+link4+"\n\n\n🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹🔸🔹\n"+name5+"\n\n"+link5, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
var message = {
          body: "Scraping Success\nDownload and Check the text file below!\n\nNote: that this api can only search for anime series/movies, Inside the text file there are 5 links that the api scraped.\n\nSource: https://nyaa.si/",
         attachment: fs.createReadStream(__dirname + "/SharedFiles/torrent-links.txt")}
  api.sendMessage(message, event.threadID,event.messageID);
})
}

  else if (input.startsWith("!GetLatestAnime")){
const url = "https://gogoanime.fi/";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const selector = $(".items li");
    const Data = [];
    selector.each((idx, el) => {
      const list = {};
      list.animeName = $(el).children("p").children("a").text();
      list.episode = $(el).children(".episode").text();
      Data.push(list);
    });
    var r = Data;
    var Res1 = r[0].animeName;
    var res1 = r[0].episode;
    var Res2 = r[1].animeName;
    var res2 = r[1].episode;
    var Res3 = r[2].animeName;
    var res3 = r[2].episode;
    var Res4 = r[3].animeName;
    var res4 = r[3].episode;
    var Res5 = r[4].animeName;
    var res5 = r[4].episode;

api.sendMessage("Showing only First 5 Latest Result\n\n"+Res1+"\n => "+res1+"\n\n"+Res2+"\n => "+res2+"\n\n"+Res3+"\n => "+res3+"\n\n"+Res4+"\n => "+res4+"\n\n"+Res5+"\n => "+res5+"\n\nSource: GogoAnime",event.threadID,event.messageID)
  }
                  else if (input.startsWith("Test")){
    if (vips.includes(event.senderID)){   api.sendMessage("User is VIP",event.threadID,event.messageID)
}else{
api.sendMessage("User is not VIP",event.threadID,event.messageID)
    }}
else if (input.startsWith("Peko-b0t")){
  var text = input;     
text = text.substring(9)
let data = input.split(" ")
                data.shift()
  const client = new smartestchatbot.Client();

var res = await client.chat({message:text, name:"Peko-b0t", owner:"Lester", user: 100065084151905}, "auto"); if (res === "I was created by Lebyy_Dev.")
{var r = res.replace(res,"My creator is my only master and that is Master Lester.");
api.sendMessage(r,event.threadID,event.messageID);return;} if (res === "I obey Lebyy_Dev.")
{var r = res.replace(res,"My creator is my only master and that is Master Lester.");
api.sendMessage(r,event.threadID,event.messageID);return;} if (res === "Lebyy_Dev.")
{var r = res.replace(res,"My creator is my only master and that is Master Lester.");
api.sendMessage(r,event.threadID,event.messageID);return;}else{api.sendMessage(res,event.threadID,event.messageID)}
}
else if (input.startsWith("Alexa")){
var text = input;     
text = text.substring(6)
let data = input.split(" ")
                data.shift()
var res = await lmao.chat({ Message: text });
  console.log(res)
if (res.embed.description === "I was created by Lebyy_Dev.")
{var r = res.embed.description.replace(res.embed.description,"My creator is my only master and that is Master Lester.");
api.sendMessage(r,event.threadID,event.messageID);return;} if (res.embed.description === "I obey Lebyy_Dev.")
{var r = res.embed.description.replace(res.embed.description,"My creator is my only master and that is Master Lester.");
api.sendMessage(r,event.threadID,event.messageID);return;} if (res.embed.description === "Lebyy_Dev.")
{var r = res.embed.description.replace(res.embed.description,"My creator is my only master and that is Master Lester.");
api.sendMessage(r,event.threadID,event.messageID);return;} if (res.embed.description === "My creator is Lebyy_Dev.")
{var r = res.embed.description.replace(res.embed.description,"My creator is my only master and that is Master Lester.");
api.sendMessage(r,event.threadID,event.messageID);return;}else{api.sendMessage(res.embed.description,event.threadID,event.messageID)}
}
else if (input.startsWith("Peko-B0T")){
  var text = input;     
text = text.substring(9)
let data = input.split(" ")
                data.shift()
  const chatbot  =  new  Chatbot({name: "Peko-B0T", gender: "Genderless AI"});
  var res = await chatbot.chat(text);
  console.log(res)
  if (res === "I was created by Udit."){ var r = res.replace(res,"My creator is my only master and that is Master Lester."); api.sendMessage(r,event.threadID,event.messageID);return;}if (res === "My dear great botmaster, Udit."){ var r = res.replace(res,"My creator is my only master and that is Master Lester."); api.sendMessage(r,event.threadID,event.messageID);return;}else{
api.sendMessage(res,event.threadID,event.messageID)}
}
else if (input.startsWith("!say")){ var text = input;     
text = text.substring(5)
let data = input.split(" ")
                data.shift()
var gtts = new gTTS(text.slice(0, -2), text.slice(-2)); 
var tts = gtts.save('SharedFiles/music.mp3', function (err, result){ 
    if(err) { throw new Error(err); } 
    console.log("Text to speech converted!"); 
 
var message = { attachment:  fs.createReadStream(__dirname + "/SharedFiles/music.mp3")}
api.sendMessage(message,event.threadID,event.messageID)});
}
/*else if (input.startsWith("!YTchInfo")){var text = input;     
text = text.substring(10)
var Text = text.replace("https://youtube.com/channel/","")
let data = input.split(" ")
                data.shift()
const payload = {
   channelId: Text,
   channelIdType: 0,
}

ytch.getChannelInfo(payload).then((res) => { 
   if (!res.alertMessage) {console.log(res)
     var r1 = res.author;
     var r2 = res.subscriberText;
     var r3 = res.subscriberCount;
     var r4 = res.isVerified;
     var r5 = res.authorId;
     var r6 = res.authorUrl;
     var r7 = res.channelLinks.primaryLinks[0].url;
     var r8 = res.channelLinks.secondaryLinks[0].url;
     var ImgUrl = res.authorThumbnails[2].url;
     request(ImgUrl).pipe(fs.createWriteStream("SharedFiles/photo.png")).on('finish',() => {
var message = { body: "YT CHANNEL INFO.\n\n\nChannel Name: "+r1+"\n\nSubscriber(s): "+r2+"\n\nExact Subs.Count: "+r3+"\n\nVerified?: "+r4+"\n\nChannel ID: "+r5+"\n\nChannel Link: "+r6+"\n\nOther Link(s): "+r7+"\n"+r8,
         attachment:  fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message,event.threadID,event.messageID);
})
   } else {
      console.log('Channel could not be found.')
      // throw response.alertMessage
   }
}).catch((err) => {
   console.log(err)
})                                          }*/
  else if (input.startsWith("!YTshortsDL")){
    api.sendMessage("Connecting to YouTube. . .",event.threadID,event.messageID);
    var text = input;     
text = text.substring(12)
let data = input.split(" ")
                data.shift()
    var url = "https://sandl.vercel.app/video/video?url=";
    var vidUrl = url+text;
request(vidUrl).pipe(fs.createWriteStream("SharedFiles/video.mp4")).on('finish',() => { 
  api.sendMessage("Video Downloaded!\nUploading. . .",event.threadID,event.messageID);
console.log("YT Short Vid. Downloaded!");
var message = { body: "Here's your downloaded YT Short Vid.",
         attachment:  fs.createReadStream(__dirname + "/SharedFiles/video.mp4")}
api.sendMessage(message,event.threadID,event.messageID);
    })
  }
else if (input.startsWith("!ChannelInfo")){var text = input;     
text = text.substring(13)
var Text = text.replace("https://youtube.com/channel/","")
let data = input.split(" ")
                data.shift()
let Info = await axios.get("https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+Text+"&key=AIzaSyDQ00nO5Xpj8rtme1fnYWbZAU7RM0gt8Qk");
  axios.get("https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+Text+"&key=AIzaSyDQ00nO5Xpj8rtme1fnYWbZAU7RM0gt8Qk").then((res) => {
var r1 = Info.data.items[0].kind.replace("youtube#channel","YT Channel Info.");
var r2 = res.data.items[0].snippet.title;
var r3 = res.data.items[0].snippet.country;
var r4 = Info.data.items[0].statistics.subscriberCount;
var r5 = Info.data.items[0].statistics.videoCount;
var r6 = Info.data.items[0].statistics.viewCount;
var r7 = Info.data.items[0].id
var imgUrl = res.data.items[0].snippet.thumbnails.high.url;
request(imgUrl).pipe(fs.createWriteStream("SharedFiles/photo.png")).on('finish',() => {
var message = { body: r1+"\n\n\nChannel Name: "+r2+"\n\nCountry: "+r3+"\n\nExact Subs.Count: "+r4+"\n\nVideo(s): "+r5+"\n\nView Count: "+r6+"\n\nChannel ID: "+r7,
         attachment:  fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message,event.threadID,event.messageID);})
})
}
else if (input.startsWith("!VTuberWiki")){
var text = input;     
text = text.substring(12)
let data = input.split(" ")
                data.shift()
const vtuber = await wiki(text).then((Res)=>{
  if (Res.title1){
var r1 = Res.title1;
var r2 = Res.caption1;
var r3 = Res.original_name;
var r4 = Res.nick_name;
var r5 = Res.debut_date;
var r6 = Res.character_designer;
var r7 = Res.affiliation;
var r8 = Res.gender;
var r9 = Res.age;
var r10 = Res.birthday;
var r12 = Res.height;
var r13 = Res.zodiac_sign;
var r14 = Res.description;
var r15 = Res.channel;
var r16 = Res.social_media;
var r17 = Res.more;
var r18 = Res.official_website;
var r19 = Res.image_url;
request(r19).pipe(fs.createWriteStream("SharedFiles/photo.png")).on('finish',() => {
var message = { body: "Name: "+r1+"\nOriginal Name: "+r3+"\nNick Name: "+r4+"\nPopular Line: "+r2+"\nDebut Date: "+r5+"\nChar.Designer: "+r6+"\nAffiliation: "+r7+"\nGender: "+r8+"\nAge: "+r9+"\nBirthday: "+r10+"\nHeight: "+r12+"\nZodiac Sign: "+r13+"\n\nDescription: "+r14+"\n\nChannel Link(s): "+r15+"\n\nSocial Link(s): "+r16+"\n\nSource: "+r17+"\n\nMain Source: "+r18,
         attachment:  fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message,event.threadID,event.messageID)})
}else if (Res.title) {var r1 = res.title;
var r7 = Res.affiliation;
var r8 = Res.gender;
var r9 = Res.age;
var r10 = Res.birthday;
var r11 = Res.height;
var r12 = Res.weight;
var r14 = Res.description;
var r15 = Res.channel.replace(/<br>/gi,"\n\n");
var r16 = Res.social_media.replace(/<br>/gi,"\n\n");
var r17 = Res.more;
var r18 = Res.official_website.replace(/<br>/gi,"\n\n");
var r19 = Res.image_url;
request(r19).pipe(fs.createWriteStream("SharedFiles/photo.png")).on('finish',() => {
var message = { body: "Title: "+r1+"\nAffiliation: "+r7+"\nGender: "+r8+"\nAge: "+r9+"\nBirthday: "+r10+"\nHeight: "+r11+"\nWeight: "+r12+"\n\nDescription: "+r14+"\n\nChannel Link(s): "+r15+"\n\nSocial Link(s): "+r16+"\n\nSource: "+r17+"\n\nMain Source(s): "+r18,
         attachment:  fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message,event.threadID,event.messageID)})}
})
}
else if (input.startsWith("!SCdl")){
var text = input;     
text = text.substring(6)
let data = input.split(" ")
                data.shift()
api.sendMessage("Connecting to SoundCloud . . .", event.threadID,event.messageID);
await new Promise(resolve => setTimeout(resolve, 1500));
const scdl = await SoundCloud.create();
const res = await scdl.search({
  query: text,
  limit: 1
}); if (res.total_results === 0){api.sendMessage(">>>>>>[ERROR]<<<<<<\n\nCannot find the song/media that you searched for.", event.threadID,event.messageID);}else if (!res.collection[0].media){api.sendMessage(">>>>>>[ERROR]<<<<<<\n\nCannot find the song/media that you searched for.", event.threadID,event.messageID);}else{
  const stream = await scdl.download(res.collection[0].permalink_url);
stream.pipe(fs.createWriteStream("SharedFiles/music.mp3")).on('finish',() => {
  var r1 = res.collection[0].title;
  var message = {
body:"===================\n 🌸 SoundCloud Music🌸\n===================\nTitle: "+r1+"\n\n!!Enjoy the music!!",
         attachment:  fs.createReadStream(__dirname + "/SharedFiles/music.mp3")}
           api.sendMessage(message, event.threadID,event.messageID);})
}}
else if (input.startsWith("!SC_GrabKey")){
api.sendMessage("Generating Key🔑. . .",event.threadID,event.messageID);
await new Promise(resolve => setTimeout(resolve, 3000));
api.sendMessage("Testing Generated Key🔑. . .",event.threadID,event.messageID);
await new Promise(resolve => setTimeout(resolve, 5000));
  sckey.fetchKey().then(key => {
sckey.testKey(key).then(result => {
    if(result) {
api.sendMessage("Generated API Key for SoundCloud\n\nKEY: "+key+"\n\nSTATUS: Active✅",event.threadID,event.messageID)
    } else { api.sendMessage("Generated Key Doesn't working\n\nKEY: "+key+"\n\nSTATUS: Not Active❌",event.threadID,event.messageID);
    }
})})
}
else if (input.startsWith("!Poll")){
  var content = input;     
content = content.substring(6)
let data = input.split(" ")
                data.shift()
  var T = input[0];
    var options = content.substring(content.indexOf(" -> ") + 4)

    var option = options.split(" | ");
    var object = {};
    if (option.length == 1 && option[0].includes(' | ')) option[0] = option[0].replace(' | ', ' ');
    for (var i = 0; i < option.length; i++) object[option[i]] = false;
    return api.createPoll(T, event.threadID, object, (err) => (err) ? api.sendMessage('error', event.threadID, event.messageID) : '');
}
else if (input.startsWith("!NNChange")){
  var name = input;     
name = name.substring(10)
let data = input.split(" ")
                data.shift()
  const mention = Object.keys(event.mentions)[0];
	if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
	if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
}
else if (input.startsWith("!DDGsearch")){
  var text = input;     
text = text.substring(11)
let data = input.split(" ")
                data.shift()
await axios.get("https://api.duckduckgo.com/?q='"+text+"'&format=json&pretty=1'").then((res) => {
  var r1 = res.data.Abstract;
  var r2 = res.data.AbstractURL;
  var r3 = res.data.AbstractSource;
  var r4 = res.data.Heading;
    api.sendMessage("Heading: "+r4+"\n\nSource: "+r3+"\n\n"+r1+"\n\nSource Link: "+r2,event.threadID,event.messageID);
})
}
else if (input.startsWith("!DDGinfo")){
  var text = input;     
text = text.substring(9)
let data = input.split(" ")
                data.shift()
await axios.get("https://api.duckduckgo.com/?q='"+text+"'&format=json&pretty=1'").then((res) => {
  var r = res.data.Heading;
  var r1 = res.data.Infobox.content[0].value;
  var r2 = res.data.Infobox.content[1].value;
  var r3 = res.data.Infobox.content[2].value;
  var r4 = res.data.Infobox.content[3].value;
  var r5 = res.data.Infobox.content[4].value;
  var r6 = res.data.Infobox.content[5].value;
  var r11 = res.data.Infobox.content[0].label;
  var r22 = res.data.Infobox.content[1].label;
  var r33 = res.data.Infobox.content[2].label;
  var r44 = res.data.Infobox.content[3].label;
  var r55 = res.data.Infobox.content[4].label;
  var r66 = res.data.Infobox.content[5].label;
   api.sendMessage("Heading: "+r+"\n\n"+r11+"\n"+r1+"\n\n"+r22+"\n"+r2+"\n\n"+r33+"\n"+r3+"\n\n"+r44+"\n"+r4+"\n\n"+r55+"\n"+r5+"\n\n"+r66+"\n"+r6,event.threadID,event.messageID);
})
                          }
/*==================================== Text on Image Sending Function ====================================*/                                else if (input.startsWith("!ImgText")) {
                                 
                            let data = input.split(" ");
                            if (data.length < 2) {
                                api.sendMessage("⚠️Invalid Use Of Command!\n💡Usage: !ImgTxt say_something", event.threadID);
                            } else {
                                try {
                                    data.shift()
                                    let txt = data.join(" ").replace("\\", "");
                                    let img = await addTextOnImage(txt);
                                    if (!img) {
                                        throw new Error("Failed to Generate Image!")
                                    } else {
                                        api.sendMessage({
                                            body: "",
                                            attachment: fs.createReadStream(`${__dirname}/${txt}_output.png`)
                                                .on("end", async () => {
                                                    if (fs.existsSync(`${__dirname}/${txt}_output.png`)) {
                                                        fs.unlink(`${__dirname}/${txt}_output.png`, function (err) {
                                                            if (err) console.log(err);
                                                            console.log(`${__dirname}/${txt}_output.png is deleted!`);
                                                        });
                                                    }
                                                    if (fs.existsSync(`${__dirname}/${txt}_txt.png`)) {
                                                        fs.unlink(`${__dirname}/${txt}_txt.png`, function (err) {
                                                            if (err) console.log(err);
                                                            console.log(`${__dirname}/${txt}_txt.png is deleted!`);
                                                        });
                                                    }
                                                })
                                        }, event.threadID,event.messageID);
                                    }
                                } catch (err) {
                                    api.sendMessage(`⚠️${err.message}`, event.threadID, event.messageID);
                                }
                            }                                 }
 else if (input.startsWith("!Help")){
var r = fs.readFileSync("./help.txt");
var res = r.toString();
api.sendMessage(res,event.threadID)
}
else if (input.startsWith("!NetSpeedTest")){
  let speedtest = new FastSpeedtest({
  token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
    verbose: false, 
    timeout: 10000, 
    https: true, 
    urlCount: 5, 
    bufferSize: 8, 
    unit: FastSpeedtest.UNITS.Mbps
});
speedtest.getSpeed().then(s => {
    console.log(`Speed: ${s} Mbps`);
}).catch(e => {
    console.error(e.message);
});
}
  else if (input.startsWith("!GetAnimePic")){
    var text = input;     
text = text.substring(13)
let data = input.split(" ")
                data.shift()
malScraper.getPictures(text)
  .then((res) => request(res[0].imageLink).pipe(fs.createWriteStream("SharedFiles/Img1.png")).on('finish',() => {
request(res[1].imageLink).pipe(fs.createWriteStream("SharedFiles/Img2.png")).on('finish',() => {
request(res[2].imageLink).pipe(fs.createWriteStream("SharedFiles/Img3.png")).on('finish',() => {
  var message = {
          body:"You searched for image of "+text+"\n\nLimit is only 3 Img.\n\nSource: MyAnimeList(MAL)",
         attachment: [fs.createReadStream(__dirname + "/SharedFiles/Img1.png"), fs.createReadStream(__dirname + "/SharedFiles/Img2.png"), fs.createReadStream(__dirname + "/SharedFiles/Img3.png")]}
           api.sendMessage(message, event.threadID,event.messageID,fs.unlinkSync("SharedFiles/Img1.png"),fs.unlinkSync("SharedFiles/Img2.png"),fs.unlinkSync("SharedFiles/Img3.png"))})})
}))
  .catch((err) => api.sendMessage("[ERROR]\n"+err, event.threadID,event.messageID))
  }
  else if (input.startsWith("!MAL_Info")){
api.sendMessage("Getting data from MyAnimeList(MAL)...", event.threadID,event.messageID);
var text = input;     
text = text.substring(10)
let data = input.split(" ")
                data.shift()
malScraper.getInfoFromName(text, true)
  .then((res) => request(res.picture).pipe(fs.createWriteStream("SharedFiles/photo.png")).on('finish',() => {
    var r1 = res.englishTitle;
    var r2 = res.japaneseTitle;
    var r3 = res.synonyms;
    var r4 = res.type;
    var r5 = res.episodes;
    var r6 = res.aired;
    var r7 = res.premiered;
    var r8 = res.producers;
    var r9 = res.studios;
    var r10 = res.source;
    var r11 = res.duration;
    var r12 = res.rating;
    var r13 = res.genres;
    var r14 = res.status;
    var r15 = res.ranked;
    var r16 = res.popularity;
    var r17 = res.trailer;
    var r18 = res.url;
    var r19 = res.title;
    var message = {
          body:"Title: "+r19+"\n\nEN Title: "+r1+"\n\nJP Title: "+r2+"\n\nSynonyms: "+r3+"\n\nType: "+r4+"\n\nEpisode(s): "+r5+"\n\nAired: "+r6+"\n\nPremiered: "+r7+"\n\nProducers: "+r8+"\n\nStudios: "+r9+"\n\nSource: "+r10+"\n\nDuration: "+r11+"\n\nRating: "+r12+"\n\nGenres: "+r13+"\n\nStatus: "+r14+"\n\nRanked: "+r15+"\n\nPopularity: "+r16+"\n\nTrailer: "+r17+"\n\nInfo. Source: "+r18+"\n\nMyAnimeList Anime Info",
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
           api.sendMessage(message, event.threadID,event.messageID);
  }))
  .catch((err) => api.sendMessage("[ERROR]\n"+err, event.threadID,event.messageID))
  }
else if (input.startsWith("!MAL_LatestNews")){
  const nbNews = 5

malScraper.getNewsNoDetails(nbNews)
  .then((n) => api.sendMessage(" ===1st Anime News===\n"+n[0].title+"\n\n ===2nd Anime News===\n"+n[1].title+"\n\n ===3rd Anime News===\n"+n[2].title+"\n\n ===4th Anime News===\n"+n[3].title+"\n\n ===5th Anime News===\n"+n[4].title+"\n\nTop 5 Latest MyAnimeList News.", event.threadID,event.messageID))
  .catch((err) => console.log(err))
}
  else if (input.startsWith("!PHub")){
	let data = input.split(" ");
 data.shift()
let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = require("canvas");
	
	let avatar = __dirname + '/avt.png';
	let pathImg = __dirname + '/porn.png';
	var text = data.join(" ");
	let name = (await api.getUserInfo(senderID))[senderID].name
	var linkAvatar = (await api.getUserInfo(senderID))[senderID].thumbSrc;
	if (!text) return api.sendMessage("Enter the content of the comment on p*rnhub", threadID, messageID);
	let getAvatar = (await axios.get(linkAvatar, { responseType: 'arraybuffer' })).data;
	let getPorn = (await axios.get(`https://scontent.xx.fbcdn.net/v/t1.15752-9/276157423_1313576649124005_663971414341608802_n.png?stp=dst-png_p480x480&_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=isiP_dTs2SoAX_aTLL3&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJwsDUbYxdzHUuUHbMb9x3FuwsYF4YUNE62kZizB10dMA&oe=626ACDA0`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(avatar, Buffer.from(getAvatar, 'utf-8'));
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let image = await loadImage(avatar);
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(image, 30, 310, 70, 70);
	ctx.font = "700 23px Arial";
	ctx.fillStyle = "#FF9900";
	ctx.textAlign = "start";
	ctx.fillText(name, 115, 350);
	ctx.font = "400 23px Arial";
	ctx.fillStyle = "#ffff";
	ctx.textAlign = "start";
	let fontSize = 23;
	while (ctx.measureText(text).width > 2600) {
		fontSize--;
		ctx.font = `400 ${fontSize}px Arial, sans-serif`;
	}
	const lines = await saikiiWrap(ctx, text, 1160);
	ctx.fillText(lines.join(' '), 30,430);
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
	fs.removeSync(avatar);
Sync(avatar);
Sync();
	return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}
/*==================================== Text on Image Sending Function ====================================*/   
else if(input.includes("GoodNight") || input.includes("Good Night") || input.includes("goodnight") || input.includes("good night") || input.includes("GOOD NIGHT") || input.includes("GOODNIGHT") || input.includes("Oyasumi") || input.includes("oyasumi") || input.includes("OYASUMI") || input.includes("Tulog") || input.includes("tulog") || input.includes("Sleep") || input.includes("SLEEP") || input.includes("sleep") || input.includes("Sweet Dreams") || input.includes("SweetDreams") || input.includes("SWEET DREAMS") || input.includes("SWEETDREAMS") || input.includes("sweet dreams") || input.includes("sweetdreams"))
                      {  
                        api.getUserInfo(event.senderID, (err,data) => { if(err){
                                console.log(err)
                            }else{                    
          var message = {
          body:"Oyasuminasai~😴, " + (data[event.senderID]['name']+" Senpai❤"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/sleep.png")}
           api.sendMessage(message, event.threadID,event.messageID);}
})                   }
                      
       else if(input.includes("GoodEve") || input.includes("GoodEve.") || input.includes("goodeve") || input.includes("GOODEVE") || input.includes("GOODEVE.") || input.includes("good eve") || input.includes("goodeve.") || input.includes("good eve.") || input.includes("Konbanwa") || input.includes("konbanwa") || input.includes("KONBANWA") || input.includes("Magandang Gabi") || input.includes("MAGANDANG GABI") || input.includes("magandang gabi"))
                      {  
                        api.getUserInfo(event.senderID, (err,data) => {
                       if(err){
                                console.log(err)
                            }else{   
                        
          var message = {
          body:"Konbanwa~!, " + (data[event.senderID]['name']+" Senpai❤"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/eve.png")}
           api.sendMessage(message, event.threadID,event.messageID);}                            })
           
                      }           
                      else if (input.startsWith("/commands_list")) {
 
                        let data = input.split(" ");
                        if (data.length < 2) {
                            api.sendMessage("📌COMMANDS LIST📌\n\n/commands_list\n!AnimeQuote\n!tiktokdl <TT_VideoUrl>\n!leech <YT_VideoUrl>\n!wiki <Word>\n!play <MusicTitle>\n!motivation\n!Date&Time\n!help\n\n🔽CREDITS🔽\nJohn Paul Caigas\nEarl Shine Sawir\n\n🤖BOT NI LESTER🤖", event.threadID, event.messageID);
                            
                            }
                               }
                        else if (input.startsWith("!help")) {
 
                        let data = input.split(" ");
                        if (data.length < 2) {
                            api.sendMessage("🛠FUNCTIONS🛠\nthe command /commands_list used to show all bot commands to help new user understand how the bot works\n\nthe command !AnimeQuote gives the user a random anime quote\n\nthe command !tiktok leech tiktok's video and download its mp3 via link\n\nthe command !leech leech any youtube stories  videos via link\n\nthe command !wiki finds or defines the word meaning\n\nthe command !play finds and play's the user entered title of the music from youtube\n\nthe command !motivation gives user a random motivational qoute\n\nthe command !Date&Time shows the current date and time\n\nthe command !help shows the command explanation to the user\n\n🔽CREDITS🔽\nJohn Paul Caigas\nEarl Shine Sawir\n\n🤖BOT NI LESTER🤖", event.threadID, event.messageID);
                            
                            }
                               }
                    else if (input.startsWith("!tiktokdl")) {
                        let data = input.split(" "); 
                        if (data.length < 2) {
                            api.sendMessage("⚠️Invalid Use Of Command!\n💡Usage: !tiktokdl vid_url", event.threadID);
                        } else {
                            api.sendMessage("🔃Trying to Download...", event.threadID, event.messageID);
                            try {
                                let s = leechTT(data[1]);
                                s.then((response) => {
                                    if (response == "err") {
                                        api.sendMessage("❌Invalid Input", event.threadID, event.messageID);
                                        api.setMessageReaction("😭", event.messageID, (err) => {

                                        }, true);
                                    }
                                    else {
                                        var file = fs.createWriteStream("tiktok.mp4");
                                        var targetUrl = response;
                                        var gifRequest = http.get(targetUrl, function (gifResponse) {
                                            gifResponse.pipe(file);
                                            file.on('finish', function () {
                                                console.log('finished downloading..')
                                                api.sendMessage('✅Download Complete! Uploading...', event.threadID)
                                                var message = {
                                                    body: "Congratulations!\n\nEnjoy!",
                                                    attachment: fs.createReadStream(__dirname + '/tiktok.mp4')
                                                }
                                                api.sendMessage(message, event.threadID);
                                            });
                                        });
                                    }
                                });
                            } catch (err) {
                                api.sendMessage("⚠️Error: " + err.message, event.threadID);
                            }
                        }
                    }
                    else if (input.startsWith("!play")) {
                        let data = input.split(" ");
                        if (data.length < 2) {
                            api.sendMessage("⚠️Invalid Use Of Command!\n💡Usage: !play music_title", event.threadID);
                        } else {
                            if (!(vips.includes(event.senderID))) {
                                if (!(event.senderID in cd)) {
                                    cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
                                else if (Math.floor(Date.now() / 1000) < cd[event.senderID]) {
                                    api.sendMessage("Opps you're going to fast! Wait for " + Math.floor((cd[event.senderID] - Math.floor(Date.now() / 1000)) / 60) + " mins and " + (cd[event.senderID] - Math.floor(Date.now() / 1000)) % 60 + " seconds", event.threadID, event.messageID);
                                    return
                                }
                                else {
                                    cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
                            }
                            api.sendMessage("🔃Requesting...", event.threadID, event.messageID);
                            try {
                                data.shift();
                                await musicApi.initalize();
                                const musics = await musicApi.search(data.join(" ").replace(/[^\w\s]/gi, ''));
                                if (musics.content.length == 0) {
                                    throw new Error(`${data.join(" ").replace(/[^\w\s]/gi, '')} returned no result!`)
                                } else {
                                    if (musics.content[0].videoId === undefined) {
                                        throw new Error(`${data.join(" ").replace(/[^\w\s]/gi, '')} is not found on youtube music`)
                                    }
                                }
                                const url = `https://www.youtube.com/watch?v=${musics.content[0].videoId}`;
                                console.log(`connecting to yt`);                           
                                const strm = ytdl(url, {
                                    quality: "lowest"
                                });
                                const info = await ytdl.getInfo(url);
                                console.log(`converting`);
                                ffmpegs(strm)
                                    .audioBitrate(150)
                                    .save(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`)
                                    .on("end", () => {
                                        console.log(`Playing ${data.join(" ").replace(/[^\w\s]/gi, '')}`);
                                        api.sendMessage({
                                            body: "Download Complete!\n\n🎶Song Title: " + info.videoDetails.title + "\n\nEnjoy the song!",
                                            attachment: fs.createReadStream(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`)
                                                .on("end", async () => {
                                                    if (fs.existsSync(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`)) {
                                                        fs.unlink(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`, function (err) {
                                                            if (err) console.log(err);
                                                            console.log(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3 is deleted!`);
                                                        });
                                                    }
                                                })
                                        }, event.threadID, event.messageID);
                                    });

                            } catch (err) {
                                api.sendMessage(`⚠️${err.message}`, event.threadID, event.messageID);
                            }
                          }                         }
else if (input.startsWith("!Torrent")){
  var text = input;     
text = text.substring(9)
let data = input.split(" ")
                data.shift()
const torrentIndexer = new TorrentIndexer();
 api.sendMessage("Scraping Torrent Links...", event.threadID,event.messageID);
const torrents = await torrentIndexer.search(text).then(res =>{    fs.writeFile("SharedFiles/torrent-links.txt", JSON.stringify(res[0].link+"➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖"+res[1].link+"➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖"+res[3].link+"➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖"+res[4].link+"➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖"+res[5].link), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");})
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  var message = {
          body:"=====1st Result=====\nTitle: "+res[0].title+"\n\nResolution: "+res[0].resolution+"\nSize: "+res[0].size+"\n=====2nd Result=====\nTitle: "+res[1].title+"\n\nResolution: "+res[1].resolution+"\nSize: "+res[1].size+"\n=====3rd Result=====\nTitle: "+res[2].title+"\n\nResolution: "+res[2].resolution+"\nSize: "+res[2].size+"\n=====4th Result=====\nTitle: "+res[3].title+"\n\nResolution: "+res[3].resolution+"\nSize: "+res[3].size+"\n=====5th Result=====\nTitle: "+res[4].title+"\n\nResolution: "+res[4].resolution+"\nSize: "+res[4].size,
         attachment: fs.createReadStream(__dirname + "/SharedFiles/torrent-links.txt")}
           api.sendMessage(message, event.threadID,event.messageID);
    }
  timeleft -= 1;
}, 500);
  })
}
                    else if (input.startsWith("!wiki")) {
                        
                        let data = input.split(" ");
                        if (data.length < 2) {
                            api.sendMessage("⚠️Invalid Use Of Command!\n💡Usage: !wiki word", event.threadID);
                        } else {
                            try {
                                data.shift()
                                var txtWiki = "";
                                let res = await getWiki(data.join(" "));
                                if(res === undefined){
                                    throw new Error(`API RETURNED THIS: ${res}`)
                                }
                                if(res.title === undefined) {
                                  throw new Error(`API RETURNED THIS: ${res}`)
                                }
                                txtWiki += `🔎You search the word ${res.title} \n\nTimeStamp: ${res.timestamp}\n\n💡Description: ${res.description}\n\n💡Info: ${res.info}`
                                
                                api.sendMessage(`${txtWiki}`, event.threadID, event.messageID);
                            }
                            catch (err) {
                                api.sendMessage(`⚠️${err.message}`, event.threadID, event.messageID);
                            }
                        }
  }
                      else if(input.includes("Hello") || input.includes("HELLO") || input.includes("Konnichiwa") || input.includes("KONNICHIWA") || input.includes("hello") || input.includes("konnichiwa") || input.includes("Yahallo") || input.includes("yahallo") || input.includes("YAHALLO") || input.includes("Nyahallo"))
                      {  
                        api.getUserInfo(event.senderID, (err,data) => {
                       if(err){
                                console.log(err)
                            }else{   
                        
          var message = {
          body:"Nyahallo~!, " + (data[event.senderID]['name']+" Senpai❤"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/hello.png")}
           api.sendMessage(message, event.threadID,event.messageID);}                            })
           
                          }
                      else if(input.startsWith("ඞ") || input.includes("SUS") || input.includes("sus") || input.includes("Sus"))
                      {  
                      api.getUserInfo(event.senderID, (err,data) => {
                       if(err){
                                console.log(err)
                            }else{   
                        
          var message = {
          body:(data[event.senderID]['name']+" is SUS"+"\nA M O G U S"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/AMOGUS.mp3")}
           api.sendMessage(message, event.threadID,event.messageID);}                            })
                                                  }
/*====================================Crypto Tracker API Function ====================================*/
   else if (input.startsWith("!NSFW_Maid")) {
  await akaneko.nsfw.maid().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("Maids, Maid Uniforms, etc, you know what maids are :3"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 500);                            })    
               }
else if (input.startsWith("!NSFW_Hentai")) {
  await akaneko.nsfw.hentai().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("Just a random vanilla hentai image"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 500);                            })    
                              }
else if (input.startsWith("!SFW_FoxGirl")) {
  await akaneko.foxgirl().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("SFW Fox Girls (Fox Girls)"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 500);                            })    
                                     }
  else if (input.startsWith("!NSFW_Femdom")) {
  await akaneko.nsfw.femdom().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("Female Domination?"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 500);                            })    
                              }
else if (input.startsWith("!NSFW_Pantsu")) {
  await akaneko.nsfw.panties().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("I mean... just why? You like underwear?"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 800);                            })    
                      }
else if (input.startsWith("!NSFW_Yuri")) {
  await akaneko.nsfw.yuri().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("Girls on Girls, and Girl's only!😍"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 830);                            })    
                  }
  else if (input.startsWith("!NSFW_Doujin")) {
  await akaneko.nsfw.doujin().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("Just a random doujin page image"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 500);                            })    
        }
else if (input.startsWith("!NSFW_Glasses")) {
  await akaneko.nsfw.glasses().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("Girls that wear glasses, uwu~"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 500);                            })    
          }
else if (input.startsWith("!NSFW_MobileWall")) {
  await akaneko.nsfw.mobileWallpapers().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("Just a random NSFW Wallpaper! (Mobile)"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 500);                            })    
  }
else if (input.startsWith("!SFW_MobileWall")) {
  await akaneko.mobileWallpapers().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("SharedFiles/photo.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("Just a random  Wallpaper! (Mobile)"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 500);                            })    
  }
   else if(input.startsWith("!QR_Decode")){

let data = input.split(" ");
                                    data.shift()
    
  let QRdecode = qrdecode(data) 
    
    QRdecode.then((response)=> { 
      console.log("Decoded String: "+response[0].symbol[0].data);
      api.sendMessage("Decoded String: "+response[0].symbol[0].data, event.threadID, event.messageID);
                        })
}                     

else if(input.startsWith("!CryptoUpdates")){

let data = input.split(" ");
                                    data.shift()
  let Crypto = crypto(data)

Crypto.then((response,err) => {            if(err){
  console.log(err);
}else{try{                 api.sendMessage("Rank: Top "+response.rank+"\n\nCryptoName: " + response.name +"\n\nCryptoSymbol: "+ response.symbol+"\n\nPrice: "+"1 "+response.symbol+" = $"+response.quotes.USD.price+ "\n\nCirculating Supply: " + response.circulating_supply+"\n\nTotal Supply: "+response.total_supply+"\n\nMax Supply: "+response.max_supply+"\n==================="+"\nVolume 24/7: "+response.quotes.USD.volume_24h+"\nVolume Change 24/7: "+response.quotes.USD.volume_24h_change_24h+"%"+"\n\nMarket Cap: "+ response.quotes.USD.market_cap+"\nMarket Cap Change 24/7: "+response.quotes.USD.market_cap_change_24h+"%"+"\nMarket Cap Change 12H: "+response.quotes.USD.percent_change_12h+"%"+"\nMarket Cap Change 6H: "+response.quotes.USD.percent_change_6h+"%"+"\nMarket Cap Change 1H: "+response.quotes.USD.percent_change_1h+"%"+"\nMarket Cap Change 30Mins: "+response.quotes.USD.percent_change_30m+"%"+"\nMarket Cap Change 15Mins: "+response.quotes.USD.percent_change_15m+"%", event.threadID, event.messageID);
                        }catch (err){
  api.sendMessage("Error: Invalid CoinID",event.threadID,event.messageID);
                        }
                                            }                          })
                           }

/*====================================Crypto Tracker API Function ====================================*/
/*====================================REDDIT RANDOM MEME Download and Send Function ====================================*/                  
                          if (input.startsWith("!RRMeme")){
                let img = RedditMeme();
                        img.then((response) => { 
                          const fs = require('fs'); 
const https = require('https'); 
const url = response.url; 
https.get(url,(res) => { 
    const path = `${__dirname}/SharedFiles/photo.png`;  
    const filePath = fs.createWriteStream(path); 
    res.pipe(filePath); 
    filePath.on('finish',() => { 
        filePath.close(); 
        console.log('Meme Succesfully Sent!');  
api.getUserInfo(event.senderID, (err) => {
                       if(err){   
console.log(err);
                            }else {      
          var message = {
          body:("Subreddit: " + response.subreddit + "\nAuthor: " + response.author + "\nUp Votes: "+"⬆" + response.ups),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
api.sendMessage(message, event.threadID,event.messageID);}                            })   
                         })
                      })
                     })                                                     }
/*====================================REDDIT RANDOM MEME Download and Send Function ====================================*/

if(input.startsWith("!BibleVerse")){
                                    let v = verse()
                                    v.then((response) => {
                                        api.sendMessage("From the book of " + response.bookname + " \nChapter " + response.chapter + ", Verse " + response.verse + "\n\n" + response.text, event.threadID,event.messageID)
                                    }).catch((err) => {
                                        console.log(err)
                                    })
}
/*====================================Random Anime Qoute Get and Send Function ====================================*/                           
                    else if (input.startsWith("!AnimeQuote")){
                        let raq = animequote();
                        raq.then((response) => { 
                            api.sendMessage("Anime Name: " + response.anime +"\n\n"+ response.quote + "\n\n- " + response.character, event.threadID, event.messageID);
                        })
                                                }
/*====================================Random Anime Qoute Get and Send Function ====================================*/
/*====================================NSFW Commands Function ====================================*/
         else if (input.startsWith("!QR_Create")){
           var text = input;

           
text = text.substring(11)
let data = input.split(" ")
                data.shift()
          const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
           let encodedUrl = encodeURIComponent(url);
           let encodedText = encodeURIComponent(text);
     const request = require('request'); request(url+text).pipe(fs.createWriteStream("SharedFiles/photo.png")).on('finish',() => {  
       console.log(text+" has been converted to QR Code!");
api.getUserInfo(event.senderID, (data) => {                       
          var message = {
          body:("Here's Your Generated QR Code For: "+'"'+text+'"'+"\n\nQR Code Link: "+url+encodedText+"\n\nDecryption Link: "+encodedUrl+encodedText),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
           api.sendMessage(message, event.threadID,event.messageID);
                             })
          })
         }
           
           
/* else if ((input.startsWith("!R+18Vid"))&&(vips.includes(event.senderID))){
      const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true); 
      const rnd2 = nsfw.getRandom("mp4");
  
      const fs = require('fs'); 

const https = require('https'); 

const url = rnd2.url; 

  
https.get(url,(res) => { 

    const path = `${__dirname}/video.mp4`;  

    const filePath = fs.createWriteStream(path); 

    res.pipe(filePath); 

    filePath.on('finish',() => { 
console.log('Downloading Video!');
        filePath.close(); 
  
api.getUserInfo(event.senderID, (data) => {                        
          var message = {
          body:("Random PHub Vid🙂👍"),
         attachment: fs.createReadStream(__dirname + "/video.mp4")}
           api.sendMessage(message, event.threadID,event.messageID);
                             })                 
                         })
      
                      })                   
    }
                                     
  else if ((input.startsWith("!R+18Pic")) && (vips.includes(event.senderID))){
      const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true); 
      const rnd2 = nsfw.getRandom("png");
      
      const fs = require('fs'); 

const https = require('https'); 

const url = rnd2.url; 

  
https.get(url,(res) => { 

    const path = `${__dirname}/SharedFiles/photo.png`;  

    const filePath = fs.createWriteStream(path); 

    res.pipe(filePath); 

    filePath.on('finish',() => { 
      console.log('Downloading Image!');
        filePath.close(); 
          
api.getUserInfo(event.senderID, (err,data) => {
                       if(err){
                                api.sendMessage("Error Downloading Image!", event.threadID,event.messageID);
                            }else{
                        
          var message = {
          body:("Random Nude Image🙂👍"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
           api.sendMessage(message, event.threadID,event.messageID);}                            })
      
                  
                         })

                      })}
    /*else if ((input.startsWith("!R+18GIF")) && (vips.includes(event.senderID))){
   const RandomHub = require('random-hub').RandomHub;
const hub = new RandomHub();
      
   const fs = require('fs'); 

const https = require('https'); 

  
// URL of the image 

const url = hub.getRandomHub(); 

  
https.get(url,(res) => { 

    // Image will be stored at this path 

    const path = `${__dirname}/SharedFiles/photo.png`;  

    const filePath = fs.createWriteStream(path); 

    res.pipe(filePath); 

    filePath.on('finish',() => { 

        filePath.close(); 

        console.log('Download Completed'); 
var message = {
          body:("Hinay hinay lang kapatid ✝"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
           api.sendMessage(message, event.threadID,event.messageID);
                          })                 
 })
                  
   
}
    else if ((input.startsWith("!R+18Gif2")) && (vips.includes(event.senderID))){
      const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true); 
      const rnd2 = nsfw.getRandom("gif");
      
      const fs = require('fs'); 

const https = require('https'); 

const url = rnd2.url; 

  
https.get(url,(res) => { 

    const path = `${__dirname}/SharedFiles/photo.png`;  

    const filePath = fs.createWriteStream(path); 

    res.pipe(filePath); 

    filePath.on('finish',() => { 
console.log('Downloading GIF!');
        filePath.close(); 
          
api.getUserInfo(event.senderID, (err,data) => {
                       if(err){
                                api.sendMessage("Error Downloading GIF!", event.threadID,event.messageID);
                            }else{
                        
          var message = {
          body:("Random NSFW GIF🙂👍"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
           api.sendMessage(message, event.threadID,event.messageID);}})
                      })
    }*/    
/*====================================NSFW Commands Function ====================================*/
    else if (input.startsWith("!CryptoList")){
                            
          axios.get("https://api.coinpaprika.com/v1/ticker")
                  .then(response => {  var value = new Array(10696);
        for (var i = 0; i < 10696; i++) {
            value[i] = i + 1; 
          console.log(response.data[i].id);
      
        
 }})
  } 
      else if (input.startsWith("!Weather")){
        var text = input;     
text = text.substring(9)
let data = input.split(" ")
                data.shift()
        var weather = require('weather-js');
 
weather.find({search: text, degreeType: 'C'}, function(err, result) { 
  if(err) console.log(err);
console.log(result);
const url = result[0].current.imageUrl;
  
const request = require('request'); request(url).pipe(fs.createWriteStream("SharedFiles/photo.png")).on('finish',() => { 
          
api.getUserInfo(event.senderID, (err,data) => {
                       if(err){                               console.log(err);
                            }else{                                  
          var message = {
          body:("Location: " + result[0].location.name+"\n\nTemperature: " + result[0].current.temperature+"°C"+"\n\nSky Condition: " + result[0].current.skytext+"\n\nDay: " + result[0].current.day+"\n\nDate: "+ result[0].current.date+"\n\nObservation Location: " + result[0].current.observationpoint+"\n\nWind Speed & Direction: " + result[0].current.winddisplay+"\n\nWeather Global Updates by Peko-B0T"),
         attachment: fs.createReadStream(__dirname + "/SharedFiles/photo.png")}
           api.sendMessage(message, event.threadID,event.messageID);}                            })                            })
                      })
    }
        else if (input.startsWith("!IP-Tracker")){var iptext = input;     
iptext = iptext.substring(9)
let data = input.split(" ")
                data.shift()
       var ipInfo = require("ip-info-finder");

ipInfo.getIPInfo.location(iptext).then(data => {  if (data.country === undefined){api.sendMessage("Invalid IP Address!\n\nTip: !IP-Info <ip address>", event.threadID,event.messageID);}else{
  
  api.sendMessage("Timezone: " +data.timezone+"\n\nCountry: "+data.country+"\n\nCountry Code: "+data.countryCode+"\n\nRegion: "+data.regionName+"\n\nCity: "+data.city+"\n\nGeoLocation: "+data.location[0].display_name+"\n\nZip Code: "+data.zip+"\n\nLatitude: "+data.lat+"\nLongitude: "+data.lon, event.threadID,event.messageID);}
})
                          
   }
                           
  else if (input.startsWith("!IP-WhoIs")){ 
                                          var iptext = input;     
iptext = iptext.substring(10)
let data = input.split(" ")
                data.shift()
       
  whois.rawLookup(iptext, (error, result) => {
    
api.sendMessage(result,event.threadID,event.messageID);
});
          }
    
/*====================================HoloPic API Get, Download and Send Function ====================================*/

else if (input.includes("!Angry")){
                            
          axios.get("https://api.satou-chan.xyz/api/endpoint/angry")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Angry GIF Sent!')
                           var message = {
                              body: "Oii!!! Temeee!!! Oraaaa!!!",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })

                    }                       
else if (input.includes("!Bite")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/bite")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Bite GIF Sent!')
                           var message = {
                              body: "*bitten*",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
}
  else if (input.includes("!Bored")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/bored")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Bored GIF Sent!')
                           var message = {
                              body: "Mee too😑",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
                     }
    else if (input.includes("!Pat")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/pat")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Pat GIF Sent!')
                           var message = {
                              body: "Head Pats for you!",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
                       }
      else if (input.includes("!Cuddle")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/cuddle")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Cuddle GIF Sent!')
                           var message = {
                              body: "Cuddle",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
                                                                                                                         }
        else if (input.includes("!Tinapay")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/bread")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Bread GIF Sent!')
                           var message = {
                              body: "Bread",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
                                                                                                                         }
          else if (input.includes("!Kill")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/kill")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Kill GIF Sent!')
                           var message = {
                              body: "Kill!!!",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
                                                  }
            else if (input.includes("!Kiss")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/kiss")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Kiss GIF Sent!')
                           var message = {
                              body: "😚",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
                       }
              else if (input.includes("!Lick")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/lick")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Lick GIF Sent!')
                           var message = {
                              body: "*lick*",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
}
else if (input.includes("!Spank")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/spank")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Spank GIF Sent!')
                           var message = {
                              body: "Spank!",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
                                      }
  else if (input.includes("!RAP")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/anime")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Anime Pic. Sent!')
                           var message = {
                              body: "Just a Random Anime Pic.",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
            }
    else if (input.includes("!Slap")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/slap")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Slap GIF Sent!')
                           var message = {
                              body: "*slap*",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
  }
      else if (input.includes("!Poke")){
                                
          axios.get("https://api.satou-chan.xyz/api/endpoint/poke")
                  .then(response => {
                    var mention = Object.keys(event.mentions)[0];
                     var file = fs.createWriteStream("SharedFiles/photo.png");
                     var targetUrl = response.data.url;
                    
                     var gifRequest = http.get(targetUrl, function (gifResponse) {
                        gifResponse.pipe(file);
                        file.on('finish', function () {
                           console.log('Poke GIF Sent!')
                           var message = {
                              body: "*poke* *poke*",
                              attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                           }
                           api.sendMessage(message, event.threadID, event.messageID);
                           api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                        });
                     });
                  })
                          }
else if (input.startsWith("!WhatIs")) {var text = input;     
text = text.substring(8)
let data = input.split(" ")
                data.shift()
const res = await google.search("what is "+text+" google dictionary").then(res =>{
    if (!res.dictionary){
  api.sendMessage("Error: Word not found on google dictionary.",event.threadID,event.messageID);
  }else{
const url = res.dictionary.audio;
request(url).pipe(fs.createWriteStream("SharedFiles/music.mp3")).on('finish',() => {
  api.getUserInfo(event.senderID, (data) =>  {var message = {
          body:("🌸G-DICTIONARY🌸\n\n"+"You searched for the definition of "+text+"\n\nWord: "+res.dictionary.word+"\n\nPhonetic: "+res.dictionary.phonetic+"\n\nDefinitions: "+res.dictionary.definitions[0]+"\n"+res.dictionary.definitions[1]),
         attachment:[
fs.createReadStream(__dirname + "/SharedFiles/music.mp3")]}
           api.sendMessage(message, event.threadID,event.messageID);})

})
    }
  })
                    }
  
  else if (input.startsWith("!ConvertUnit")) {var text = input;     
text = text.substring(13)
let data = input.split(" ")
                data.shift()
  const res = await google.search(text).then(res =>{
  if (!res.unit_converter){
  api.sendMessage("Error: Check if your input is correct!",event.threadID,event.messageID);
  }else{
api.sendMessage("=>🌸Unit Converter🌸<=\n\nYou Searched for: "+text+"\n\n"+res.unit_converter.input+" => "+res.unit_converter.output+"\n\n"+res.unit_converter.formula, event.threadID, event.messageID);}
  })
          }
else if (input.startsWith("!Translate")) {var text = input;     
text = text.substring(11)
let data = input.split(" ")
                data.shift()
  const res = await google.search("translate "+text).then(res =>{
    if (!res.translation){
  api.sendMessage("Error: Cannot identify the language for the text you entered!",event.threadID,event.messageID);
  }else{
      let r = res.translation.source_language.replace(/- detected/gi, '');
api.sendMessage("🌸Translation Result🌸\n"+"\nLanguage: "+r+" => "+res.translation.target_language+"\n===================\n"+r+": "+'"'+res.translation.source_text+'"'+"\n"+res.translation.target_language+": "+'"'+res.translation.target_text+'"', event.threadID, event.messageID);}
  })
    }
  else if (input.startsWith("!GetUserID")){
   var {mentions, senderID, threadID, messageID} = event;
	if (Object.keys(mentions) == 0) return api.sendMessage(`${senderID}`, threadID, messageID);
	else {
		for (var i = 0; i < Object.keys(mentions).length; i++) api.sendMessage(`${Object.values(mentions)[i].replace('@', '')}: ${Object.keys(mentions)[i]}`, threadID,messageID);
		return;
             } 
  }
    else if (input.startsWith("!dlshort")){
api.sendMessage("Downloading YT Short. . .\n(눈‸눈)", event.threadID,event.messageID);
      var text = input;     
text = text.substring(9)
let data = input.split(" ")
      data.shift()
      let Short = await getVideoId(text);
      const youtube = await new Innertube();
      const stream = youtube.download(Short.id);
stream.pipe(fs.createWriteStream(`./SharedFiles/video.mp4`)).on('finish',() => {
      var message = {
          body:("YT Shorts Downloader"),
         attachment:[ 
fs.createReadStream(__dirname + "/SharedFiles/video.mp4")]}
           api.sendMessage(message, event.threadID,event.messageID)})
    }
      else if (input.startsWith("!singAlong")){
        
var text = input;     
text = text.substring(11)
let data = input.split(" ")

if (data.length < 2) {
                                api.sendMessage("⚠️Invalid Use Of Command!\n💡Usage: !dlMusic <name of music>", event.threadID);
                                      }else{if (!(vips.includes(event.senderID))) {
                                if (!(event.senderID in cd)) {
                                    cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
                                else if (Math.floor(Date.now() / 1000) < cd[event.senderID]) {
                                    api.sendMessage("Opps you're going to fast! Wait for " + Math.floor((cd[event.senderID] - Math.floor(Date.now() / 1000)) / 60) + " mins and " + (cd[event.senderID] - Math.floor(Date.now() / 1000)) % 60 + " seconds", event.threadID, event.messageID);
return
   }
else {                                  cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
 }data.shift()
const searches = await Client.songs.search(text);
const firstSong = searches[0];
const RES = await firstSong.lyrics(); 
  const youtube = await new Innertube();
  const search = await youtube.search(firstSong.title);
if (search.videos[0] === undefined){api.sendMessage("Error: Invalid request.",event.threadID,event.messageID);}else{api.sendMessage("Connecting to YT Music!", event.threadID,event.messageID);
  const stream = youtube.download(search.videos[0].id, { 
    format: 'mp4',
    quality: 'tiny', 
    type: 'audio',
    audioQuality: 'lowest',
    audioBitrate: '550',
    fps: '30'
      });
   stream.pipe(fs.createWriteStream(`./SharedFiles/music.mp3`));
 
  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  }); 
  stream.on('info', (info) => {
    console.info('[DOWNLOADER]',`Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]','Done!')
    
    var message = {
          body:("YT Music Downloader\n\n"+search.videos[0].title+"\n\nSong Lyrics\n\n"+RES),
         attachment:[ 
fs.createReadStream(__dirname + "/SharedFiles/music.mp3")]}
           api.sendMessage(message, event.threadID,event.messageID)
  })
}
      } 
                            }
    else if (input.startsWith("!dlMusic")){
  
var text = input;     
text = text.substring(9)
let data = input.split(" ")

if (data.length < 2) {
                                api.sendMessage("⚠️Invalid Use Of Command!\n💡Usage: !dlMusic <name of music>", event.threadID);
                                      }else{if (!(vips.includes(event.senderID))) {
                                if (!(event.senderID in cd)) {
                                    cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
                                else if (Math.floor(Date.now() / 1000) < cd[event.senderID]) {
                                    api.sendMessage("Opps you're going to fast! Wait for " + Math.floor((cd[event.senderID] - Math.floor(Date.now() / 1000)) / 60) + " mins and " + (cd[event.senderID] - Math.floor(Date.now() / 1000)) % 60 + " seconds", event.threadID, event.messageID);
return
   }
else {                                  cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
 }data.shift()
  const youtube = await new Innertube();
  const search = await youtube.search(text);
if (search.videos[0] === undefined){api.sendMessage("Error: Invalid request.",event.threadID,event.messageID);}else{api.sendMessage("Connecting to YT Music!", event.threadID,event.messageID);
  const stream = youtube.download(search.videos[0].id, { 
    format: 'mp4',
    quality: 'tiny', 
    type: 'audio',
    audioQuality: 'lowest',
    audioBitrate: '550',
    fps: '30'
      });
    stream.pipe(fs.createWriteStream(`./SharedFiles/music.mp3`));
 
  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  }); 
  stream.on('info', (info) => {
    console.info('[DOWNLOADER]',`Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]','Done!')
    var message = {
          body:("YT Music Downloader\n\n"+search.videos[0].title),
         attachment:[ 
fs.createReadStream(__dirname + "/SharedFiles/music.mp3")]}
           api.sendMessage(message, event.threadID,event.messageID)
  })
}
      } 
                  }
else if (input.startsWith("!YTdlVid")){
  
var text = input;     
text = text.substring(9)
let data = input.split(" ")

if (data.length < 2) {
                                api.sendMessage("⚠️Invalid Use Of Command!\n💡Usage: !dlMusicVid <name of video>", event.threadID);
                                      }else{if (!(vips.includes(event.senderID))) {
                                if (!(event.senderID in cd)) {
                                    cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
                                else if (Math.floor(Date.now() / 1000) < cd[event.senderID]) {
                                    api.sendMessage("Opps you're going to fast! Wait for " + Math.floor((cd[event.senderID] - Math.floor(Date.now() / 1000)) / 60) + " mins and " + (cd[event.senderID] - Math.floor(Date.now() / 1000)) % 60 + " seconds", event.threadID, event.messageID);
return
   }
else {                                  cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
 }data.shift()
  const youtube = await new Innertube();
  const search = await youtube.search(text);
if (search.videos[0] === undefined){api.sendMessage("Error: Invalid request.",event.threadID,event.messageID);}else{api.sendMessage("Connecting to YouTube!", event.threadID,event.messageID);

var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    api.sendMessage("A video has found!\n\nStarting to Download", event.threadID, event.messageID);
    }
  timeleft -= 1;
}, 1000);
  const stream = youtube.download(search.videos[0].id, { 
    format: 'mp4',
    quality: '480p', 
    type: 'videoandaudio',
    bitrate: '2500',
    audioQuality: 'highest',
    loudnessDB: '20',
    audioBitrate: '550', 
    fps: '30'
      });
    stream.pipe(fs.createWriteStream(`./SharedFiles/video.mp4`));
 
  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  }); 
  stream.on('info', (info) => {
    console.info('[DOWNLOADER]',`Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
  });
  stream.on('end', () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.info('[DOWNLOADER]','Done!')
    var message = {
          body:("YT Video Downloader\n\n"+search.videos[0].title),
         attachment:[ 
fs.createReadStream(__dirname + "/SharedFiles/video.mp4")]}
           api.sendMessage(message, event.threadID,event.messageID);
  }); stream.on('error', (err)=> console.error('[ERROR]',err));
}
      } 
                  }
else if (input.startsWith("!LyricSearch")) {var text = input;     
text = text.substring(13)
let data = input.split(" ")
                data.shift()
  const res = await google.search(text+" song lyrics").then(res =>{ if (res.knowledge_panel.type === undefined){
  api.sendMessage("Error: Cannot identify the song title you entered!",event.threadID,event.messageID);
  }else{
api.sendMessage("Title: "+res.knowledge_panel.title+"\n\n"+res.knowledge_panel.type+"\n\nSong Lyrics: "+res.knowledge_panel.lyrics+"\n==================\nLyric Search by Lester\n==================", event.threadID, event.messsageID);}
  })
    }
  
   else if (input.startsWith("!ImgSearch")) {
     var imgtext = input;     
imgtext = imgtext.substring(11)
let data = input.split(" ")
                data.shift()
const client = new GoogleImages('55ffad329ff5f3716', 'AIzaSyC5ojRnS7POz0t19eVwWQ0Ur0L34HZbvok');

client.search(imgtext)
	.then(images => {
    
   const url = images[0].url;
    const url1 = images[1].url;
    const url2 = images[2].url;
    const url3 = images[3].url;
    const url4 = images[4].url;
    const url5 = images[5].url;
       request(url).pipe(fs.createWriteStream("SharedFiles/Img0.png"));  
request(url1).pipe(fs.createWriteStream("SharedFiles/Img1.png"));
request(url2).pipe(fs.createWriteStream("SharedFiles/Img2.png"));
request(url3).pipe(fs.createWriteStream("SharedFiles/Img3.png"));
request(url4).pipe(fs.createWriteStream("SharedFiles/Img4.png"));
request(url5).pipe(fs.createWriteStream("SharedFiles/Img5.png")).on('finish',() => {
  var timeleft = 2;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    api.getUserInfo(event.senderID, (data) =>  {var message = {
          body:("Search Image by \n@LesterNavarra\n==================="+"\nShowing only the first 6 Images of "+imgtext+"\n==================\nNote: Only limited to first 6 Images."),
         attachment:[ fs.createReadStream(__dirname + "/SharedFiles/Img0.png"),
 fs.createReadStream(__dirname + "/SharedFiles/Img1.png"),
fs.createReadStream(__dirname + "/SharedFiles/Img2.png"),
fs.createReadStream(__dirname + "/SharedFiles/Img3.png"),
fs.createReadStream(__dirname + "/SharedFiles/Img4.png"),
fs.createReadStream(__dirname + "/SharedFiles/Img5.png")]}
           api.sendMessage(message, event.threadID,event.messageID,fs.unlinkSync("SharedFiles/Img0.png"),fs.unlinkSync("SharedFiles/Img1.png"),fs.unlinkSync("SharedFiles/Img2.png"),fs.unlinkSync("SharedFiles/Img3.png"),fs.unlinkSync("SharedFiles/Img4.png"),fs.unlinkSync("SharedFiles/Img5.png"));})
  }
  timeleft -= 1;
}, 1000);
                  
})                               
      })      
                }            
/*==================================== Time and Date Function ====================================*/                      
                  else if (input.startsWith("!Date&Time")) {
                    var text = input;
text = text.substring(11)
let data = input.split(" ")
                data.shift()    
let DateAndTime = new Date().toLocaleString('en-US', { 
timeZone: text, hour:'2-digit',
             minute:'2-digit',
year: 'numeric', month: 'numeric', day: 'numeric'
});                 api.sendMessage(DateAndTime, event.threadID, event.messsageID);
                         }
/*==================================== Time and Date Function ====================================*/           
                    else if (input.startsWith("!motivation")) {
                        let rqt = qt();
                        rqt.then((response) => { 
                            api.sendMessage(response.q + "\n- " + response.a, event.threadID, event.messageID);
                        })
                    }
}
 
      
                
                break;
            case "message_unsend":
                if (!vips.includes(event.senderID)) {
                    let d = msgs[event.messageID];


const DateAndTime = new Date().toLocaleString('en-US', { 

  timeZone: 'Asia/Manila'
}); 
                  

                  
                    if (typeof (d) == "object") {
                        api.getUserInfo(event.senderID, (err, data) => {
                            if (err) return console.error(err);
                            else {
                                if (d[0] == "img") {
                                    var file = fs.createWriteStream("SharedFiles/photo.png");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading photo..')
                                            var message = {
                                                body: DateAndTime + "\n\n"+data[event.senderID]['name'] + " Unsend this photo: ",
                                                attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                                            }
                                            api.sendMessage(message, event.threadID,fs.unlinkSync(__dirname+"/SharedFiles/photo.png"));
                                        });
                                    });
                                }
                                else if (d[0] == "gif") {
                                    var file = fs.createWriteStream("SharedFiles/photo.png");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading gif..')
                                            var message = {
                                                body: DateAndTime + "\n\n"+data[event.senderID]['name'] + " Unsend this GIF: ",
                                                attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                                            }
                                            api.sendMessage(message, event.threadID,fs.unlinkSync("SharedFiles/photo.png"));
                                        });
                                    });
                                }
                                else if (d[0] == "sticker") {
                                    var file = fs.createWriteStream("SharedFiles/photo.png");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading sticker..')
                                            var message = {
                                                body: DateAndTime + "\n\n"+data[event.senderID]['name'] + " Unsend this Sticker: ",
                                                attachment: fs.createReadStream(__dirname + '/SharedFiles/photo.png')
                                            }
                                            api.sendMessage(message, event.threadID,fs.unlinkSync("SharedFiles/photo.png"));
                                        });
                                    });
                                }
                                else if (d[0] == "vid") {
                                    var file = fs.createWriteStream("SharedFiles/video.mp4");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading video..')
                                            var message = {
                                                body: DateAndTime + "\n\n"+data[event.senderID]['name'] + " Unsend this video:",
                                                attachment: fs.createReadStream(__dirname + '/SharedFiles/video.mp4')
                                            }
                                            api.sendMessage(message, event.threadID,fs.unlinkSync("SharedFiles/video.mp4"));
                                        });
                                    });
                                }
                                else if (d[0] == "vm") {
                                    var file = fs.createWriteStream("SharedFiles/music.mp3");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading audio..')
                                            var message = {
                                                body: DateAndTime + "\n\n"+data[event.senderID]['name'] + " Unsend this audio:",
                                                attachment: fs.createReadStream(__dirname + '/SharedFiles/music.mp3')
                                            }
                                            api.sendMessage(message, event.threadID,fs.unlinkSync("SharedFiles/music.mp3"));
                                        });
                                    });
                                }
                            }
                        });
                    }
                    else {
                        api.getUserInfo(event.senderID, (err, data) => {
                            if (err) return console.error(err);
                            else {
   console.log(data);                             api.sendMessage(data[event.senderID]['name'] + " unsent this message: \n\n" + msgs[event.messageID] + "\n\nAnti Unsent by:\nPeko-B0T"+"\n\n"+ DateAndTime, event.threadID);                            }
                        });
                    }
                    break;
                }
        }
      
    });
});
