import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  links = [
    { title: 'Feed', fragment: 'posts' },
    { title: 'Create post', fragment: 'create' }
  ];

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
