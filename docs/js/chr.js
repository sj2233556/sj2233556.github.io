function chrRspT(al) {
  let vp = document.getElementById("chrv");
  switch (al.title) {
    case "이마":
      //alert("쓰다듬는거 좋아...♡");
      vp.src = ("./voices/h2.mp3#t=1.1,3.3");
      vp.play();
      vp.onpause = function() { vp.src = null; };
      break;
    case "볼R":
    case "볼L":
      alert("볼에 뭐 묻었었어?");
      break;
    case "입":
      alert("유저의 손맛 기억해버릴거 같아...");
      break;
  }
}

function chrReady() {
  alert("마음대로 해줘...")
}