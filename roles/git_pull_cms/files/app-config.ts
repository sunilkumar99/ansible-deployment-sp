import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
  private profile = 'prod';
  private apiProtocol = 'http:';
  private apiHttpsProtocol = 'https:';
  private apiPort = '9090';
  private apiHostName = 'localhost';//'192.169.31.223';
  private baseApiPath;

  constructor() {
    if (this.profile === 'dev') {
      this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + ':' + this.apiPort + '/';
    } else {
      this.baseApiPath = this.apiHttpsProtocol + '//lreport.techgig.com/';
    }
  }
  get baseAnalyticsApiPath() {
    return this.baseApiPath;
  }
}
