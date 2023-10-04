import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() dataEvent = new EventEmitter<any>();

  constructor(private apiservice: ApiService) {}

  searchPhotos(searchValue: any): any {
    if (searchValue === '') {
      return (this.apiservice.searchName = null);
    } else {
      this.apiservice.page = 1;
      this.apiservice.searchName = searchValue;
      console.log(searchValue);

      console.log(this.apiservice.page, this.apiservice.searchName);
      this.apiservice.getImage(this.apiservice.page).subscribe({
        next: (data: any) => {
          console.log(data);

          this.dataEvent.emit(data.photos);
          this.apiservice.imagesArray = data.photos;
        },
        error: (error: any) => {
          // Handle any errors
          console.error(error);
        },
      });
    }
  }
}
