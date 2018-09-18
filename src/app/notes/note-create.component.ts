import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NotesService } from './notes.service';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent {
  constructor(public notesService: NotesService) {}

  onAddNote(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.notesService.addNote(form.value.title, form.value.content);
    form.resetForm();
  }
}
