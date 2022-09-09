import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noon',
  templateUrl: './noon.component.html',
  styleUrls: ['./noon.component.scss']
})
export class NoonComponent implements OnInit {
  public static audio1: HTMLAudioElement = new Audio();
  public static audio2: HTMLAudioElement = new Audio();
  public static audio3: HTMLAudioElement = new Audio();
  public static audio4: HTMLAudioElement = new Audio();
  public static audio5: HTMLAudioElement = new Audio();
  public static audio6: HTMLAudioElement = new Audio();
  public static audio7: HTMLAudioElement = new Audio();
  public static audio8: HTMLAudioElement = new Audio();
  public static audio9: HTMLAudioElement = new Audio();

  constructor() { 
  }

  ngOnInit(): void {
    NoonComponent.audio1.src = "../assets/1.mp3";
    NoonComponent.audio1.load();
    NoonComponent.audio1.volume = 0;
    NoonComponent.audio1.loop = true;
    NoonComponent.audio2.src = "../assets/1.mp3";
    NoonComponent.audio2.load();
    NoonComponent.audio2.volume = 0;
    NoonComponent.audio2.loop = true;
    NoonComponent.audio3.src = "../assets/1.mp3";
    NoonComponent.audio3.load();
    NoonComponent.audio3.volume = 0;
    NoonComponent.audio3.loop = true;
    NoonComponent.audio4.src = "../assets/1.mp3";
    NoonComponent.audio4.load();
    NoonComponent.audio4.volume = 0;
    NoonComponent.audio4.loop = true;
    NoonComponent.audio5.src = "../assets/1.mp3";
    NoonComponent.audio5.load();
    NoonComponent.audio5.volume = 0;
    NoonComponent.audio5.loop = true;
    NoonComponent.audio6.src = "../assets/1.mp3";
    NoonComponent.audio6.load();
    NoonComponent.audio6.volume = 0;
    NoonComponent.audio6.loop = true;
    NoonComponent.audio7.src = "../assets/1.mp3";
    NoonComponent.audio7.load();
    NoonComponent.audio7.volume = 0;
    NoonComponent.audio7.loop = true;
    NoonComponent.audio8.src = "../assets/1.mp3";
    NoonComponent.audio8.load();
    NoonComponent.audio8.volume = 0;
    NoonComponent.audio8.loop = true;
    NoonComponent.audio9.src = "../assets/1.mp3";
    NoonComponent.audio9.load();
    NoonComponent.audio9.volume = 0;
    NoonComponent.audio9.loop = true;
    NoonComponent.audio1.play(); NoonComponent.audio2.play(); NoonComponent.audio3.play(); NoonComponent.audio4.play(); NoonComponent.audio5.play(); NoonComponent.audio6.play(); NoonComponent.audio7.play(); NoonComponent.audio8.play(); NoonComponent.audio9.play();
  }

  playSound1(){
    if(NoonComponent.audio1.volume == 1){
      NoonComponent.audio1.volume = 0;
      document.getElementById("m1")!.style.background = 'radial-gradient(circle, orange, rgb(249, 249, 109))'; 
    }else{
      NoonComponent.audio1.volume = 1;
      document.getElementById("m1")!.style.background = 'orange'; 
    }
  }

  playSound2(){
    if(NoonComponent.audio2.volume == 1){
      NoonComponent.audio2.volume = 0;
      document.getElementById("m2")!.style.background = 'radial-gradient(circle, orange, rgb(249, 249, 109))'; 
    }else{
      NoonComponent.audio2.volume = 1;
      document.getElementById("m2")!.style.background = 'orange'; 
    }
  }

  playSound3(){
    if(NoonComponent.audio3.volume == 1){
      NoonComponent.audio3.volume = 0;
      document.getElementById("m3")!.style.background = 'radial-gradient(circle, orange, rgb(249, 249, 109))'; 
    }else{
      NoonComponent.audio3.volume = 1;
      document.getElementById("m3")!.style.background = 'orange'; 
    }
  }

  playSound4(){
    if(NoonComponent.audio4.volume == 1){
      NoonComponent.audio4.volume = 0;
      document.getElementById("m4")!.style.background = 'radial-gradient(circle, orange, rgb(249, 249, 109))'; 
    }else{
      NoonComponent.audio4.volume = 1;
      document.getElementById("m4")!.style.background = 'orange'; 
    }
  }

  playSound5(){
    if(NoonComponent.audio5.volume == 1){
      NoonComponent.audio5.volume = 0;
      document.getElementById("m5")!.style.background = 'radial-gradient(circle, orange, rgb(249, 249, 109))'; 
    }else{
      NoonComponent.audio5.volume = 1;
      document.getElementById("m5")!.style.background = 'orange'; 
    }
  }

  playSound6(){
    if(NoonComponent.audio6.volume == 1){
      NoonComponent.audio6.volume = 0;
      document.getElementById("m6")!.style.background = 'radial-gradient(circle, orange, rgb(249, 249, 109))'; 
    }else{
      NoonComponent.audio6.volume = 1;
      document.getElementById("m6")!.style.background = 'orange'; 
    }
  }

  playSound7(){
    if(NoonComponent.audio7.volume == 1){
      NoonComponent.audio7.volume = 0;
      document.getElementById("m7")!.style.background = 'radial-gradient(circle, orange, rgb(249, 249, 109))'; 
    }else{
      NoonComponent.audio7.volume = 1;
      document.getElementById("m7")!.style.background = 'orange'; 
    }
  }

  playSound8(){
    if(NoonComponent.audio8.volume == 1){
      NoonComponent.audio8.volume = 0;
      document.getElementById("m8")!.style.background = 'radial-gradient(circle, orange, rgb(249, 249, 109))'; 
    }else{
      NoonComponent.audio8.volume = 1;
      document.getElementById("m8")!.style.background = 'orange'; 
    }
  }

  playSound9(){
    if(NoonComponent.audio9.volume == 1){
      NoonComponent.audio9.volume = 0;
      document.getElementById("m9")!.style.background = 'radial-gradient(circle, orange, rgb(249, 249, 109))'; 
    }else{
      NoonComponent.audio9.volume = 1;
      document.getElementById("m9")!.style.background = 'orange'; 
    }
  }

  close(){
    NoonComponent.audio1.pause(); NoonComponent.audio2.pause(); NoonComponent.audio3.pause(); NoonComponent.audio4.pause(); NoonComponent.audio5.pause(); NoonComponent.audio6.pause(); NoonComponent.audio7.pause(); NoonComponent.audio8.pause(); NoonComponent.audio9.pause();
  }
}
