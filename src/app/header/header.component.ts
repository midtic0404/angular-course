import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private dsService: DataStorageService){}

  onSave() {
    this.dsService.storeRecipes();
  }

  onFetch() {
    this.dsService.fetchRecipes().subscribe();
  }
}
