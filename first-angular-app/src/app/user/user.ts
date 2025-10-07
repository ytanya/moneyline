import { Component, Input, Output, EventEmitter,output } from '@angular/core';
// type USER = {
//     id: string;
//     avatar: string;
//     name: string;
//   }
interface USER {
   id: string;
   avatar: string;
   name: string;
  
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!: USER;
  @Output() select = new EventEmitter();
  
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser (){ 
    this.select.emit(this.user.id);
    
  }
}