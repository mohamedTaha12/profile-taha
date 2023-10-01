import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(
    // private dialog: MatDialog
  ) {

  }
  ngOnInit(): void {

  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
  // openCV(): void {
  //   const dialogRef = this.dialog.open(CvComponent, {
  //     width: "400px"
  //   });
  // }
}
