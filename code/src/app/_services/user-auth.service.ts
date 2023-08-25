import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserAuthService {
    constructor() { }

    public setRoles(roles: []) {
        localStorage.setItem('roles', JSON.stringify(roles));
    }

    public getRoles(): [] {
        return JSON.parse(localStorage.getItem('roles') || '{}');
    }

    public setToken(jwtToken: string) {
        localStorage.setItem('jwtToken', jwtToken);
    }

    public getToken() {
        return localStorage.getItem('jwtToken');
    }

    public setUserData(data: any) {
        localStorage.setItem('userData', JSON.stringify(data));
    }

    public getUserData() {
        return JSON.parse(localStorage.getItem('userData') || "{}");
    }

    public clear() {
        localStorage.clear();
    }

    public isLoggedIn() {
        return this.getRoles() && this.getToken();
    }
}
