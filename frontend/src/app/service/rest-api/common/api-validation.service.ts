import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiValidationService {
  public validateResponse(response: any): Promise<any> {
    if(response.rs_code == "0000") 
      return Promise.resolve(response);
    else{
      return Promise.reject(response);
    } 
      
  }
}