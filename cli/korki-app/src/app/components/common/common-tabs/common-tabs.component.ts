import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-common-tabs',
  templateUrl: './common-tabs.component.html',
  styleUrls: ['./common-tabs.component.scss'],
})
export class CommonTabsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  goToCreateStudent() {
    this.router.navigate(['createStudent'], { relativeTo: this.route });
  }
  directToListOfUsers() {
    this.router.navigate(['listOfUsers'], { relativeTo: this.route });
  }
}
