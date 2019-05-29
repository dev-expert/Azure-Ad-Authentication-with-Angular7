/// <reference path="../../../node_modules/@types/adal/index.d.ts" />

import { Injectable } from '@angular/core';
import 'expose-loader?AuthenticationContext!../../../node_modules/adal-angular/lib/adal.js';

let createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

@Injectable()

export class AdalService {
   azureAdConfig = {
    tenant: 'tenant id from azure portal',
    clientId: 'application id from azure portal',
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin + '/'
  };
  private context: adal.AuthenticationContext;

  constructor() {
    this.context = new createAuthContextFn(this.azureAdConfig);
  }


  login() {
    this.context.login();
  }

  logout() {
    this.context.logOut();
  }

  handleCallback() {
    this.context.handleWindowCallback();
  }

  acquireToken(resource, callback) {
    return this.context.acquireToken(resource, callback);
  }

  public getCachedToken(resource?) {
    if (resource) {
      return this.context.getCachedToken(resource);
    }
    return this.context.getCachedToken(this.azureAdConfig.clientId);
  }

  public get userInfo() {
    return this.context.getCachedUser();
  }

  public get getCachedUser() {
    return this.context.getCachedUser();
  }

  public get isAuthenticated() {
    return this.userInfo && this.getCachedToken();
  }



}
