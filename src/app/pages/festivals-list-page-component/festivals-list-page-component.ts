import { Component } from '@angular/core';
import {FestivalList} from '../../festival-list/festival-list';
import {Header} from '../../header/header'
import {Sidebar} from '../../sidebar/sidebar'

@Component({
  selector: 'app-festivals-list-page-component',
  imports: [FestivalList,Header,Sidebar],
  templateUrl: './festivals-list-page-component.html',
  styleUrl: './festivals-list-page-component.css'
})
export class FestivalsListPageComponent {

}
