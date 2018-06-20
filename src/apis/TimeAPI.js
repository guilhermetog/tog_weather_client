const GOOGLE_API= "AIzaSyBJ3JR4k3nNtvyMpSqetyVxSXMycseWuMc"

export const getCurrentTime =  (lat, long, timestamp) =>{
    return new Promise((resolve, reject)=>
    fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${long}&timestamp=${timestamp}&key=${GOOGLE_API}`)
    .then((response)=>{
        if(response.status !== 200) return false
        return response.json()
    })
    .then((data)=>{
        resolve(Math.floor((timestamp + data.dstOffset + data.rawOffset)*1000))
    }))
}
