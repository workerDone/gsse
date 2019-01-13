import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    roundLengths: true,
    autoplay: 4000,
    speed: 1000,
    // breakpoints: {
    //   600: {
    //     nextButton: '',
    //     prevButton: '',
    //   }
    // }
};
  num: boolean = true;
  constructor() {}

  ngOnInit() {}

  get screen(): string {
    const {innerWidth, innerHeight} = window.self;

    this.num = +innerWidth > 600;

    return (innerHeight - ( this.num ? 64 : 56)) + 'px';
  }
}
