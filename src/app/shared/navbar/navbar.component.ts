import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive: number = 1
  isNavShow: boolean = false
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  navigateTo(id: number, route: string) {
    console.log(id)
    this.isActive = id
    this.isNavShow = false
    this.router.navigate([route])
  }
  openMenue() {
    this.isNavShow = !this.isNavShow
  }
}
