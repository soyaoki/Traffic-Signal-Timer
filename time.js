function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

// 現在の日時
var d = new Date();

// 基準の日時
var d_base = new Date(2017,0,15,22,30);

// 差分を計算
var diff = d.getTime() - d_base.getTime();

// 2分10秒で割ったあまり
var remainder = diff%((2*60+10)*1000);

// 音声再生
var audio = new Audio();
audio.src = "regulation.mp3";
audio.loop = true;
audio.autoplay = true;
audio.preload = "auto";
audio.currentTime = 0;
audio.play();  // 再生

// 表示
print(d.toString());
print(d.getTime() + " ms");
print(diff + " ms");
print(remainder);

if(remainder<24000){
  print("Go NOW.");
  document.write('<img src="blue.png"/>');
}else{
  print("The time to go is not NOW.");
  document.write('<img src="red.png"/>');
}

document.write("</p>");
