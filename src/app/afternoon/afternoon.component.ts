import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afternoon',
  templateUrl: './afternoon.component.html',
  styleUrls: ['./afternoon.component.scss']
})
export class AfternoonComponent implements OnInit {
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
    AfternoonComponent.audio1.src = "../assets/Afternoon1.mp3";
    AfternoonComponent.audio1.load();
    AfternoonComponent.audio1.volume = 0;
    AfternoonComponent.audio1.loop = true;
    AfternoonComponent.audio2.src = "../assets/Afternoon2.mp3";
    AfternoonComponent.audio2.load();
    AfternoonComponent.audio2.volume = 0;
    AfternoonComponent.audio2.loop = true;
    AfternoonComponent.audio3.src = "../assets/Afternoon3.mp3";
    AfternoonComponent.audio3.load();
    AfternoonComponent.audio3.volume = 0;
    AfternoonComponent.audio3.loop = true;
    AfternoonComponent.audio4.src = "../assets/Afternoon4.mp3";
    AfternoonComponent.audio4.load();
    AfternoonComponent.audio4.volume = 0;
    AfternoonComponent.audio4.loop = true;
    AfternoonComponent.audio5.src = "../assets/Afternoon5.mp3";
    AfternoonComponent.audio5.load();
    AfternoonComponent.audio5.volume = 0;
    AfternoonComponent.audio5.loop = true;
    AfternoonComponent.audio6.src = "../assets/Afternoon6.mp3";
    AfternoonComponent.audio6.load();
    AfternoonComponent.audio6.volume = 0;
    AfternoonComponent.audio6.loop = true;
    AfternoonComponent.audio7.src = "../assets/Afternoon7.mp3";
    AfternoonComponent.audio7.load();
    AfternoonComponent.audio7.volume = 0;
    AfternoonComponent.audio7.loop = true;
    AfternoonComponent.audio8.src = "../assets/Afternoon8.mp3";
    AfternoonComponent.audio8.load();
    AfternoonComponent.audio8.volume = 0;
    AfternoonComponent.audio8.loop = true;
    AfternoonComponent.audio9.src = "../assets/Afternoon9.mp3";
    AfternoonComponent.audio9.load();
    AfternoonComponent.audio9.volume = 0;
    AfternoonComponent.audio9.loop = true;
    AfternoonComponent.audio1.play(); AfternoonComponent.audio2.play(); AfternoonComponent.audio3.play(); AfternoonComponent.audio4.play(); AfternoonComponent.audio5.play(); AfternoonComponent.audio6.play(); AfternoonComponent.audio7.play(); AfternoonComponent.audio8.play(); AfternoonComponent.audio9.play();
  }

  playSound1(){
    if(AfternoonComponent.audio1.volume == 1){
      AfternoonComponent.audio1.volume = 0;
      document.getElementById("m1")!.style.background = 'radial-gradient(circle, crimson, rgb(249, 249, 109))'; 
    }else{
      AfternoonComponent.audio1.volume = 1;
      document.getElementById("m1")!.style.background = 'crimson'; 
    }
  }

  playSound2(){
    if(AfternoonComponent.audio2.volume == 1){
      AfternoonComponent.audio2.volume = 0;
      document.getElementById("m2")!.style.background = 'radial-gradient(circle, crimson, rgb(249, 249, 109))'; 
    }else{
      AfternoonComponent.audio2.volume = 1;
      document.getElementById("m2")!.style.background = 'crimson'; 
    }
  }

  playSound3(){
    if(AfternoonComponent.audio3.volume == 1){
      AfternoonComponent.audio3.volume = 0;
      document.getElementById("m3")!.style.background = 'radial-gradient(circle, crimson, rgb(249, 249, 109))'; 
    }else{
      AfternoonComponent.audio3.volume = 1;
      document.getElementById("m3")!.style.background = 'crimson'; 
    }
  }

  playSound4(){
    if(AfternoonComponent.audio4.volume == 1){
      AfternoonComponent.audio4.volume = 0;
      document.getElementById("m4")!.style.background = 'radial-gradient(circle, crimson, rgb(249, 249, 109))'; 
    }else{
      AfternoonComponent.audio4.volume = 1;
      document.getElementById("m4")!.style.background = 'crimson'; 
    }
  }

  playSound5(){
    if(AfternoonComponent.audio5.volume == 1){
      AfternoonComponent.audio5.volume = 0;
      document.getElementById("m5")!.style.background = 'radial-gradient(circle, crimson, rgb(249, 249, 109))'; 
    }else{
      AfternoonComponent.audio5.volume = 1;
      document.getElementById("m5")!.style.background = 'crimson'; 
    }
  }

  playSound6(){
    if(AfternoonComponent.audio6.volume == 1){
      AfternoonComponent.audio6.volume = 0;
      document.getElementById("m6")!.style.background = 'radial-gradient(circle, crimson, rgb(249, 249, 109))'; 
    }else{
      AfternoonComponent.audio6.volume = 1;
      document.getElementById("m6")!.style.background = 'crimson'; 
    }
  }

  playSound7(){
    if(AfternoonComponent.audio7.volume == 1){
      AfternoonComponent.audio7.volume = 0;
      document.getElementById("m7")!.style.background = 'radial-gradient(circle, crimson, rgb(249, 249, 109))'; 
    }else{
      AfternoonComponent.audio7.volume = 1;
      document.getElementById("m7")!.style.background = 'crimson'; 
    }
  }

  playSound8(){
    if(AfternoonComponent.audio8.volume == 1){
      AfternoonComponent.audio8.volume = 0;
      document.getElementById("m8")!.style.background = 'radial-gradient(circle, crimson, rgb(249, 249, 109))'; 
    }else{
      AfternoonComponent.audio8.volume = 1;
      document.getElementById("m8")!.style.background = 'crimson'; 
    }
  }

  playSound9(){
    if(AfternoonComponent.audio9.volume == 1){
      AfternoonComponent.audio9.volume = 0;
      document.getElementById("m9")!.style.background = 'radial-gradient(circle, crimson, rgb(249, 249, 109))'; 
    }else{
      AfternoonComponent.audio9.volume = 1;
      document.getElementById("m9")!.style.background = 'crimson'; 
    }
  }

  close(){
    AfternoonComponent.audio1.pause(); AfternoonComponent.audio2.pause(); AfternoonComponent.audio3.pause(); AfternoonComponent.audio4.pause(); AfternoonComponent.audio5.pause(); AfternoonComponent.audio6.pause(); AfternoonComponent.audio7.pause(); AfternoonComponent.audio8.pause(); AfternoonComponent.audio9.pause();
  }
}
