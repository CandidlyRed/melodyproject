import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morning',
  templateUrl: './morning.component.html',
  styleUrls: ['./morning.component.scss']
})
export class MorningComponent implements OnInit {
  public static audio1: HTMLAudioElement = new Audio();
  public static audio2: HTMLAudioElement = new Audio();
  public static audio3: HTMLAudioElement = new Audio();
  public static audio4: HTMLAudioElement = new Audio();
  public static audio5: HTMLAudioElement = new Audio();
  public static audio6: HTMLAudioElement = new Audio();

  constructor() { 
  }

  ngOnInit(): void {
    MorningComponent.audio1.src = "../assets/1.mp3";
    MorningComponent.audio1.load();
    MorningComponent.audio1.volume = 0;
    MorningComponent.audio1.loop = true;
    MorningComponent.audio2.src = "../assets/1.mp3";
    MorningComponent.audio2.load();
    MorningComponent.audio2.volume = 0;
    MorningComponent.audio2.loop = true;
    MorningComponent.audio3.src = "../assets/1.mp3";
    MorningComponent.audio3.load();
    MorningComponent.audio3.volume = 0;
    MorningComponent.audio3.loop = true;
    MorningComponent.audio4.src = "../assets/1.mp3";
    MorningComponent.audio4.load();
    MorningComponent.audio4.volume = 0;
    MorningComponent.audio4.loop = true;
    MorningComponent.audio5.src = "../assets/1.mp3";
    MorningComponent.audio5.load();
    MorningComponent.audio5.volume = 0;
    MorningComponent.audio5.loop = true;
    MorningComponent.audio6.src = "../assets/1.mp3";
    MorningComponent.audio6.load();
    MorningComponent.audio6.volume = 0;
    MorningComponent.audio6.loop = true;
    MorningComponent.audio1.play(); MorningComponent.audio2.play(); MorningComponent.audio3.play(); MorningComponent.audio4.play(); MorningComponent.audio5.play(); MorningComponent.audio6.play();
  }

  playSound1(){
    if(MorningComponent.audio1.volume == 1){
      MorningComponent.audio1.volume = 0;
      document.getElementById("m1")!.style.background = 'radial-gradient(circle, lightblue, rgb(249, 249, 109))'; 
    }else{
      MorningComponent.audio1.volume = 1;
      document.getElementById("m1")!.style.background = 'lightblue'; 
    }
  }

  playSound2(){
    if(MorningComponent.audio2.volume == 1){
      MorningComponent.audio2.volume = 0;
      document.getElementById("m2")!.style.background = 'radial-gradient(circle, lightblue, rgb(249, 249, 109))'; 
    }else{
      MorningComponent.audio2.volume = 1;
      document.getElementById("m2")!.style.background = 'lightblue'; 
    }
  }

  playSound3(){
    if(MorningComponent.audio3.volume == 1){
      MorningComponent.audio3.volume = 0;
      document.getElementById("m3")!.style.background = 'radial-gradient(circle, lightblue, rgb(249, 249, 109))'; 
    }else{
      MorningComponent.audio3.volume = 1;
      document.getElementById("m3")!.style.background = 'lightblue'; 
    }
  }

  playSound4(){
    if(MorningComponent.audio4.volume == 1){
      MorningComponent.audio4.volume = 0;
      document.getElementById("m4")!.style.background = 'radial-gradient(circle, lightblue, rgb(249, 249, 109))'; 
    }else{
      MorningComponent.audio4.volume = 1;
      document.getElementById("m4")!.style.background = 'lightblue'; 
    }
  }

  playSound5(){
    if(MorningComponent.audio5.volume == 1){
      MorningComponent.audio5.volume = 0;
      document.getElementById("m5")!.style.background = 'radial-gradient(circle, lightblue, rgb(249, 249, 109))'; 
    }else{
      MorningComponent.audio5.volume = 1;
      document.getElementById("m5")!.style.background = 'lightblue'; 
    }
  }

  playSound6(){
    if(MorningComponent.audio6.volume == 1){
      MorningComponent.audio6.volume = 0;
      document.getElementById("m6")!.style.background = 'radial-gradient(circle, lightblue, rgb(249, 249, 109))'; 
    }else{
      MorningComponent.audio6.volume = 1;
      document.getElementById("m6")!.style.background = 'lightblue'; 
    }
  }

  close(){
    MorningComponent.audio1.pause(); MorningComponent.audio2.pause(); MorningComponent.audio3.pause(); MorningComponent.audio4.pause(); MorningComponent.audio5.pause(); MorningComponent.audio6.pause();
  }
}
