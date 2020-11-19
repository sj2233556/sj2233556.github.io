function sleep(delay) {
  //잠자게 하는 소스
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

(function(){
  /* 바로 실행되는 기능*/
if(navigator.language == "ko-KR"){
  //한국어 감지!
  document.title = document.querySelector('meta[name="koreanTitie"]').content;
}}());