import { Component, inject, computed } from '@angular/core';
import {UserStore} from '../user-signal-store'
import {FestivalService} from '../festival-service'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  userStore = inject(UserStore)
  festivalService = inject(FestivalService)
  currentUser = this.userStore.userName 
  currentFestId = this.userStore.currentFestivalId
  
  currentFestName = computed(() => {
    const idValue = this.currentFestId();
    if (idValue == null) {
      return "aucun festival sélectionné";
    } else {
      console.log("id: " + idValue);
      const id = idValue;
      return this.festivalService.findById(id)?.name;
    }
  })

  firstFestival(){
    const firstId = this.festivalService.getFirstId();
    this.userStore.setFestival(firstId === undefined ? null : firstId);
  }
  
  nextFestival() {
    const currentId = this.festivalService.getNextId(this.currentFestId()!);
    this.userStore.setFestival(currentId == null ? null : currentId);
  }
}