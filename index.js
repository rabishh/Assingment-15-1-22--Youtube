let video=document.querySelector(".video");
let arr=["./video/Waterfall - 37088.mp4" , "./video/Sea - 13704.mp4" , "./video/Hong Kong - 2849.mp4" , "./video/Couple - 77929.mp4" , "./video/Dog - 84757.mp4" , "./video/Fog - 41340.mp4" , "./video/Lion - 2021.mp4" , "./video/Sheep - 57647.mp4" ,"./video/skeleton_-_84705 (Original).mp4" , "./video/Dog - 84757.mp4" , "./video/Sheep - 57647.mp4" , "./video/Hong Kong - 2849.mp4"];
function videos(){
    arr.forEach((event)=>{
       let vid= document.createElement("video");
        // vid.setAttribute('src ', "event");
        vid.src=event;
        vid.controls=true;
        video.append(vid);
        console.log(event);
    })
}
videos();
window.onscroll=function(ev){
    const {scrollHeight , scrollTop , clientHeight}=document.documentElement;
     if(scrollTop+clientHeight>=scrollHeight){
         console.log("i m bottom");
         videos();
         // infinte();
     }
 };