
var video = document.querySelector("video");
var buttons=document.querySelectorAll("button");

buttons.forEach((btn,index) => {
  btn.addEventListener("click", () => {
      if (index == 0) {
        video.play(); 
        btn.classList.toggle("backround-two");
        buttons[1].classList.remove("backround-one");
      }
      else{
        video.pause();
        btn.classList.toggle("backround-one");
        buttons[0].classList.remove("backround-two"); 
      }
    });
  });
















// var video = document.querySelector("video");
// var buttons=document.querySelectorAll("button");


// buttons.forEach((btn,index) => {
//   btn.addEventListener("click", () => {
//       if (video.playbackRate == 1) { 
//           alert("stop")
//           video.play()
//       }
//       else if(buttons[1].playbackRate==40){
//              alert("going")
//              video.pause()
//       }
//       // }
//       // else if(video.playbackRate==1){
//       //   btn.classList.toggle("backround-one");
//       //   buttons[0].classList.remove("backround-two"); 
//       // }
//     });
//   });



