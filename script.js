
let sec =0
let min =0
let hr = 0
let interval

function start(){

 interval =  setInterval(counter, 1000)

}

function pause(){

    clearInterval(interval)
    
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00'
}

function counter(){

    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
document.getElementById('watch').innerText=hr+':'+ min +':' +sec
}