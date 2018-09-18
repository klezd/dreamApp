import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Note } from './note.model';

@Injectable({providedIn: 'root'})
export class NotesService {
  private notes: Note[] = [];
  private notesUpdated = new Subject<Note[]>();

  constructor( private http: HttpClient) {}

  getNotes() {
    // return [...this.notes];
    this.http.get<{message: string, notes: Note[]}>('http://localhost:3000/api/notes')
      .subscribe((noteData) => {
        this.notes = noteData.notes;
        this.notesUpdated.next([...this.notes]);
      });
  }

  getNoteUpdateListener() {
    return this.notesUpdated.asObservable();
  }

  addNote(title: string, content: string) {
    const note: Note = {id: null, title: title, content: content};
    this.http
      .post<{ message: string }>('http://localhost:3000/api/notes', note)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.notes.push(note);
        this.notesUpdated.next([...this.notes]);
      });
    /*  const note: Note = {id: null, title: title, content: content};
    this.notes.push(note);
    this.notesUpdated.next([...this.notes]);*/
  }
}
