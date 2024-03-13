import ytdl from 'ytdl-core'
import fs from 'fs'

export const download = (videoId) => {
    const videoURl = "https://www.youtube.com/shorts/" + videoId
    console.log('realizando o download do video:', videoId)

    ytdl(videoURl, {quality: "lowestaudio", filter: "audioonly"}).on("info", (info) => {
        const seconds = info.formats[0].approxDurationMs / 1000
        
        if (seconds > 60){
            throw new Error('Esse video é maior que 60 segundos.')
        } 
    }).on("end", () => {
        console.log('Download do video finalizado')
    }).on("error", (error) => {
        console.log('Não foi possível fazer o download do video. Detalhes do erro:', error)
    }).pipe(fs.createWriteStream('./tmp/audio.mp4'))
}