import { Component } from '@angular/core';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent {
  note = {content: '', title: ''};
  notes = [];
  noteContent = '';
  noteTitle = '';
  newNote = 'no content';

  onAddNote() {
    this.notes.push(this.note);
    this.note = {content: '', title: ''};
  }
}
