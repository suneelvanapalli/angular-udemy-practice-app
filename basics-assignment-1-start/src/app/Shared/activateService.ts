import { Injectable } from '@angular/core';

@Injectable()
export class ActivateService {
  public activeUsers: string[] = ['Tom', 'Steve', 'Smith'];
  public InActiveUsers: string[] = ['Harry', 'Ricky', 'Jason'];

    constructor() { }

}
