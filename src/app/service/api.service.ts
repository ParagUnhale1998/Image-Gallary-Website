import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private  apiKey:string = 'dUEMqtUpfpYpvyZvb0ra8Ds7u8tYOTPcUPckAlaXiuusL1efKoRqArXS'
  searchName:any= null
  perPage:number = 15;
  page:number = 1
  imagesArray!: any[];
  constructor(private http:HttpClient) { 

  }
  
  getImage(page: number): Observable<any> {
     if(this.searchName){
      const apiUrl = `https://api.pexels.com/v1/search?query=${this.searchName}&page=${page}&per_page=${this.perPage}`;
    const headers = new HttpHeaders().set('Authorization', this.apiKey);
    return this.http.get(apiUrl, { headers });
     }
     else{
      const apiURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=${this.perPage}`;

      const headers = new HttpHeaders().set('Authorization', this.apiKey);
      
      return this.http.get(apiURL, { headers });
     }
    
  }
  
  loadMoreImages(currentPage: number): Observable<any> {
    if(this.searchName){
      const apiUrl = `https://api.pexels.com/v1/search?query=${this.searchName}&page=${currentPage}&per_page=${this.perPage}`;
    const headers = new HttpHeaders().set('Authorization', this.apiKey);
    return this.http.get(apiUrl, { headers });
     }else{
      const apiURL = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${this.perPage}`;
    
      const headers = new HttpHeaders().set('Authorization', this.apiKey);
      
      return this.http.get(apiURL, { headers });
     }
  
   
  }
 
 

  downloadImage(url: string): void {
    this.http.get(url, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      console.log(URL.createObjectURL(blob)) // for cheking url
      link.download = this.getFileNameFromUrl(url);
      console.log(url) // for change final url
      link.click();
    });
  }
  
  private getFileNameFromUrl(url: string): string {
    console.log(url) // for checking url 
    const parts = url.split('?'); // use / slash for original quality
    console.log(parts) // for checking parts 
    console.log(parts[parts.length - 1])// for checking parts elemtns that return extection 
    return parts[parts.length - 1];
  }
 
}
