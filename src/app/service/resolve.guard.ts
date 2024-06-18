import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EuroService } from "./euro.service";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class ResolveGuard implements Resolve<string> {

    constructor(private _euro:EuroService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._euro.getSpin();
    }
}