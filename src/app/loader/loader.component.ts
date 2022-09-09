import { NONE_TYPE } from '@angular/compiler';
import { Component, AfterViewInit } from '@angular/core';
declare var anime: any;

var condition = true;

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements AfterViewInit  {

  ngAfterViewInit(): void {
    let end = document.querySelector('.c2');
    let textWrapper = document.querySelector('.c2 .letters');
    let textWrapper2 = document.querySelector('.c2 .letters2');
    textWrapper!.innerHTML = textWrapper!.textContent!.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");
    textWrapper2!.innerHTML = textWrapper2!.textContent!.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.c2 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.c2 .line',
        translateX: [0, document.querySelector('.c2 .letters')!.getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      }).add({
        targets: '.c2 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1500,
        offset: '-=775',
        delay: (el:any, i:any) => 34 * (i+1)
      }).add({
        targets: '.c2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

      anime.timeline({loop: false})
      .add({
        targets: '.c2 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.c2 .line',
        translateX: [0, document.querySelector('.c2 .letters2')!.getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      }).add({
        targets: '.c2 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1500,
        offset: '-=775',
        delay: (el:any, i:any) => 34 * (i+1)
      }).add({
        targets: '.c2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

    setTimeout(function () {
      end!.innerHTML = end!.textContent!.replace(/\S/g, "<span class='c2' style='display:none;'>$&</span>");
      document.getElementById("c2")!.style.zIndex = "1"; 
    }, 4000);
  }
}