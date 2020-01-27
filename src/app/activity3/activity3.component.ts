import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity3',
  templateUrl: './activity3.component.html',
  styleUrls: ['./activity3.component.css']
})
export class Activity3Component implements OnInit {
  public isActive = true;
  isDisabled = true;
  imgFileName = "https://cebu247.com/wp-content/uploads/2018/06/kawasan-waterfalls-photo-cebu.jpg";
  img2 = "https://www.badian.info/wp-content/uploads/2018/11/cropped-badian-logo.png";
  place = "There's no place like BADIAN !";

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    alert("E N J O Y !!!")
 }

}
