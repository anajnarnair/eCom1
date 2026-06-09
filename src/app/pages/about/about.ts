import { Component } from '@angular/core';
import { Form } from "../../ui/form/form";
import { Card } from "../../ui/card/card";
import { Wcard } from "../../ui/wcard/wcard";
import { Accordian } from "../../ui/accordian/accordian";
import { Carousel } from "../../ui/carousel/carousel";

@Component({
  selector: 'app-about',
  imports: [Form, Card, Wcard, Accordian, Carousel],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
