import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midnight',
  templateUrl: './midnight.component.html',
  styleUrls: ['./midnight.component.scss']
})
export class MidnightComponent implements OnInit {
  public static audio1: HTMLAudioElement = new Audio();
  public static audio2: HTMLAudioElement = new Audio();
  public static audio3: HTMLAudioElement = new Audio();
  public static audio4: HTMLAudioElement = new Audio();
  public static audio5: HTMLAudioElement = new Audio();
  public static audio6: HTMLAudioElement = new Audio();

  constructor() { 
  }

  ngOnInit(): void {
    MidnightComponent.audio1.src = "../assets/Midnight1.mp3";
    MidnightComponent.audio1.load();
    MidnightComponent.audio1.volume = 0;
    MidnightComponent.audio1.loop = true;
    MidnightComponent.audio2.src = "../assets/Midnight2.mp3";
    MidnightComponent.audio2.load();
    MidnightComponent.audio2.volume = 0;
    MidnightComponent.audio2.loop = true;
    MidnightComponent.audio3.src = "../assets/Midnight3.mp3";
    MidnightComponent.audio3.load();
    MidnightComponent.audio3.volume = 0;
    MidnightComponent.audio3.loop = true;
    MidnightComponent.audio4.src = "../assets/Midnight4.mp3";
    MidnightComponent.audio4.load();
    MidnightComponent.audio4.volume = 0;
    MidnightComponent.audio4.loop = true;
    MidnightComponent.audio5.src = "../assets/Midnight5.mp3";
    MidnightComponent.audio5.load();
    MidnightComponent.audio5.volume = 0;
    MidnightComponent.audio5.loop = true;
    MidnightComponent.audio1.play(); MidnightComponent.audio2.play(); MidnightComponent.audio3.play(); MidnightComponent.audio4.play(); MidnightComponent.audio5.play();
  }

  playSound1(){
    if(MidnightComponent.audio1.volume == 1){
      MidnightComponent.audio1.volume = 0;
      document.getElementById("m1")!.style.background = 'radial-gradient(circle, purple, rgb(249, 249, 109))'; 
    }else{
      MidnightComponent.audio1.volume = 1;
      document.getElementById("m1")!.style.background = 'purple'; 
    }
  }

  playSound2(){
    if(MidnightComponent.audio2.volume == 1){
      MidnightComponent.audio2.volume = 0;
      document.getElementById("m2")!.style.background = 'radial-gradient(circle, purple, rgb(249, 249, 109))'; 
    }else{
      MidnightComponent.audio2.volume = 1;
      document.getElementById("m2")!.style.background = 'purple'; 
    }
  }

  playSound3(){
    if(MidnightComponent.audio3.volume == 1){
      MidnightComponent.audio3.volume = 0;
      document.getElementById("m3")!.style.background = 'radial-gradient(circle, purple, rgb(249, 249, 109))'; 
    }else{
      MidnightComponent.audio3.volume = 1;
      document.getElementById("m3")!.style.background = 'purple'; 
    }
  }

  playSound4(){
    if(MidnightComponent.audio4.volume == 1){
      MidnightComponent.audio4.volume = 0;
      document.getElementById("m4")!.style.background = 'radial-gradient(circle, purple, rgb(249, 249, 109))'; 
    }else{
      MidnightComponent.audio4.volume = 1;
      document.getElementById("m4")!.style.background = 'purple'; 
    }
  }

  playSound5(){
    if(MidnightComponent.audio5.volume == 1){
      MidnightComponent.audio5.volume = 0;
      document.getElementById("m5")!.style.background = 'radial-gradient(circle, purple, rgb(249, 249, 109))'; 
    }else{
      MidnightComponent.audio5.volume = 1;
      document.getElementById("m5")!.style.background = 'purple'; 
    }
  }

  close(){
    MidnightComponent.audio1.pause(); MidnightComponent.audio2.pause(); MidnightComponent.audio3.pause(); MidnightComponent.audio4.pause(); MidnightComponent.audio5.pause();
  }
}
