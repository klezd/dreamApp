import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Note } from './note.model';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit, OnDestroy {

  notes: Note[] = [];
  private notesSub: Subscription;
  constructor(public notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes();
    // this.notes = this.notesService.getNotes();
    this.notesSub = this.notesService.getNoteUpdateListener()
      .subscribe((notes: Note[]) => {
        this.notes = notes;
      });
  }

  ngOnDestroy() {
    this.notesSub.unsubscribe();
  }
}
