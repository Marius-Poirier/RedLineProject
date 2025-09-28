import { Component, computed, inject } from '@angular/core';
import {UserStore} from '../user-signal-store'
import { FestivalService } from '../festival-service';
  
@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  userStore = inject(UserStore);
  festivalService = inject(FestivalService);
  currentUser = this.userStore.userName;
  currentFestId = this.userStore.currentFestivalId;

  currentFestName = computed(() => {
    const idValue = this.currentFestId();
    if (idValue == null) {
      return "aucun festival sélectionné";
    } else {
      console.log("id: " + idValue);
      const id = idValue;
      return this.festivalService.findById(id)?.name;
    }
  })}
