import { Component } from '@angular/core';
import { IFlash } from './flash.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editing = false;
  editingId: number;

  flashs:IFlash[] = [
    {
    question: 'Question 1',
    answer: 'Answer 1',
    show: false,
    id:this.getRandomNumber()
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
    show: false,
    id:this.getRandomNumber()
  },
  {
    question:'Question 3',
    answer: 'Answer 3',
    show: false,
    id:this.getRandomNumber()
  }
]

  getRandomNumber(){
    return Math.floor(Math.random() * 10000)
  }

  trackByFlashId(index,flash){
    return flash.id
  }

  handleToggleCard(id: number) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.show = !flash.show;
  }
  // handleDelete(id: number) {
  //   const flashId = this.flashs.indexOf(flash => flash.id ===
  //     id);
  //   this.flashs.splice(flashId, 1)
  // }


  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;
    // TODO: We will add editing logic after adding the form
  }

}
