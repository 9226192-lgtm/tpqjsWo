function setup() 
{ createCanvas(600, 400); noLoop(); }
 function draw() 
{ background('#F0F0F0'); noStroke(); 
// 뒷머리 
fill(0); rectMode(CENTER); 
rect(300, 230, 120, 260, 40); 
// 얼굴 
fill('#FFE0BD'); 
ellipse(300, 180, 90, 110);
 // 귀
 fill('#FFE0BD');
 ellipse(255, 180, 20, 28);
 ellipse(345, 180, 20, 28); 
// 목 
fill('#FFE0BD');
 rect(300, 240, 24, 40, 6); 
// 얼굴 아래쪽 중심에 연결 
// 옷
 fill('#689ACD');
 quad(255, 255, 345, 255, 380, 400, 220, 400);
 //앞머리
 fill(0); 
arc(300, 155, 120, 70, PI, TWO_PI); 
// 눈
 noStroke(); 
fill(255);
 ellipse(280, 175, 26, 26); 
ellipse(320, 175, 26, 26); 
// 눈동자
 fill(0);
 ellipse(280, 175, 8, 8); 
ellipse(320, 175, 8, 8); 
// 쌍커풀풀 
noFill(); 
stroke(80); 
strokeWeight(1);
 arc(280, 170, 30, 10, PI, TWO_PI);
 // 왼쪽 쌍꺼풀
 arc(320, 170, 30, 10, PI, TWO_PI); 
// 오른쪽 쌍꺼풀
 // 속눈썹 
stroke(0); 
strokeWeight(1.8);
 // 왼쪽
 line(272, 163, 275, 167);
 line(280, 161, 280, 167); 
line(288, 163, 285, 167); 
// 오른쪽
 line(312, 163, 315, 167);
 line(320, 161, 320, 167);
 line(328, 163, 325, 167); 
// 코 
stroke(0);
 strokeWeight(1.5); 
line(300, 182, 300, 195);
 noStroke(); 
// 입
 noFill();
 stroke('#C94C4C'); 
strokeWeight(2); 
arc(300, 205, 36, 20, 0, PI); 
//선글라 
fill('#2F2F3D'); 
stroke(0);
 strokeWeight(1.5); 
ellipse(275, 140, 40, 22); 
ellipse(325, 140, 40, 22);
 line(295, 140, 305, 140); 
}
