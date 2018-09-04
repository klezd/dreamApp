import { Component } from '@angular/core';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent {
  noteContent = '';
  newNote = 'no content';

  onAddNote() {
    this.newNote = this.noteContent;
  }
}
