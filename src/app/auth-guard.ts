import { Injectable } from '@angular/core'
import { CanActivateChild, Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivateChild {
    constructor(private router: Router) {}

    canActivateChild() {
        const allowed = Math.random() > 0.5 // simulated true/false
        if (allowed) { 
            return true 
        } else { // indicate next navigation
            return this.router.createUrlTree(['']) // no navigate inside navigation
        }
    }
}