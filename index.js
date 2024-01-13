console.log("Welcome to Spotify");

//initialize the variables
let songIndex=0;
let audioElement=new Audio('1.mp3')
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Tu hie haqeeqat",filePath:"1.mp3",coverPath:"cover/downlaod.jpg"},
    {songName:"Deewana kar raha hai",filePath:"2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Zara sa dil mein",filePath:"3.mp3",coverPath:"cover/3.jpg"},
    {songName:"Haan tu Hain",filePath:"4.mp3",coverPath:"cover/4.jpg"},
    {songName:"Phir Mohobbat",filePath:"5.mp3",coverPath:"cover/5.jpg"},
    {songName:"Teri yaadon mein",filePath:"6.mp3",coverPath:"cover/6.jpg"},
    {songName:"Tu hi meri shab hai",filePath:"7.mp3",coverPath:"cover/7.jpg"},
    {songName:"Ek din teri raahon meh",filePath:"8.mp3",coverPath:"cover/8.jpg"},
    {songName:"Pee loon",filePath:"9.mp3",coverPath:"cover/9.jpg"},
    {songName:"Aadat",filePath:"10.mp3",coverPath:"cover/10.jpg"},

]




//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})


myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;

})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`song/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex--;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = songs.length - 1;
    } else {
        songIndex++;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});