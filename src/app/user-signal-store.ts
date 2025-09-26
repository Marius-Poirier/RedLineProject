import { computed, effect, Injectable } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { withEffects } from '@ngrx/signals/events';
import {UserDto} from './user-dto'
import { AppStateInterface } from './app-state-interface';

const initialState: AppStateInterface = {
  currentUser: null,
  currentFestivalId: null
}

export const UserStore = signalStore(
  withState<AppStateInterface>(initialState),
  withComputed(({ currentUser }) => ({
    isLoggedIn: computed(() => currentUser != null),
    userName: computed(() =>
      currentUser != null && currentUser.name ? currentUser.name : 'invité'
    )
  })),
  withMethods((store) => {
    effect(() => {
      const id = store.currentFestivalId();
      id ? localStorage.setItem('currentFestivalId', id.toString())
        : localStorage.removeItem('currentFestivalId');
    });

    return {
      setFestival(id: number | null) {
        patchState(store, patchSetFestival(id));
      },
      setUser(user: UserDto | null) {
        patchState(store, patchSetUser(user));
      }
    };
  })
);

function patchSetFestival(id: number | null) {
  return (state: AppStateInterface) => ({
    ...state,
    currentFestivalId: id
  });
}

function patchSetUser(user: UserDto | null) {
  return (state: AppStateInterface) => ({
    ...state,
    currentUser: user
  });
}