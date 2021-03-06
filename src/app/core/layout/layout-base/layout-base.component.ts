import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-layout-base',
  templateUrl: './layout-base.component.html',
  styleUrls: ['./layout-base.component.scss'],
})
export class LayoutBaseComponent implements OnInit {
  loggedIn = true;
  sideBarOpen = true;

  showToggle: string;
  mode: string;
  openSidenav: boolean;
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

  @ViewChild('sidenav') matSidenav: MatDrawer;

  constructor(private router: Router) {
    console.log(router.url);
    this.loggedIn = router.url == '/sign-in' ? false : true;
  }

  ngOnInit(): void {
    this.getScreenWidth().subscribe((width) => {
      if (width < 830) {
        this.showToggle = 'show';
        this.mode = 'over';
        this.sideBarOpen = false;
        // this.sideBarToggler();
      } else if (width > 830) {
        this.showToggle = 'hide';
        this.mode = 'side';
        this.sideBarOpen = true;
        // this.sideBarToggler();
      }
    });
  }

  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
}
