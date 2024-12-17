import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-testimonial-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-three.component.html',
  styleUrl: './testimonial-three.component.scss'
})
export class TestimonialThreeComponent {

  // thumb nav data
  slider_thumb_nav = [
    '/assets/img/users/user-1.png',
    '/assets/img/users/user-3.png',
    '/assets/img/users/user-2.png',
    '/assets/img/users/user-4.png',
  ];
  // testimonial_data
  testimonial_data = [
    {
      desc: "“ I love how quick and seamless the ordering process is. I placed an order during a busy night, and everything arrived fresh and on time. Highly recommend this app to all pizza lovers!",
      name: "Divine M. Reyes",
      designation: "User",
    },
    {
      desc: "“ This app lets me choose everything—from pizza size to toppings. It’s so convenient to have all the menu options in one place. No more calling to ask for special requests! ”",
      name: "Carla G. Fallar",
      designation: "User",
    },
    {
      desc: "“ Dandas Pizza has always been my go-to pizza place, and now with the app, I can enjoy my favorites without any hassle. Great job on making ordering so convenient! ”",
      name: "Merry M. Rago",
      designation: "User",
    },
    {
      desc: "“  This app shows good programming fundamentals. The order system works well, and it’s clear the developer put effort into making the process smooth. There’s room to grow, but it’s a great start! ”",
      name: " Rafh Dainniel L. Hitosis",
      designation: "Programmer",
    },
  ];

  ngOnInit(){
    const swiper = new Swiper(".testimonial__slider-nav", {
      spaceBetween: 0,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
     new Swiper(".testimonial__slider-active-2", {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
      navigation: {
        nextEl: ".testimonial-2-button-next",
        prevEl: ".testimonial-2-button-prev"
      },
      autoplay: {
        delay: 8000,
      }
    });
  }
}
