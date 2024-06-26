import { Component, ElementRef, HostListener, Input, ViewChild, inject } from '@angular/core';
import { PlusIconComponent } from "../../icons/plus-icon/plus-icon.component";
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { BoardService } from '../../services/board.service';

@Component({
    selector: 'app-task-card-list',
    standalone: true,
    templateUrl: './task-card-list.component.html',
    styleUrl: './task-card-list.component.css',
    host: { 'class': 'flex flex-grow' },
    imports: [
        PlusIconComponent,
        FormsModule,
        ReactiveFormsModule,
        XmarkIconComponent
    ]
})
export class TaskCardListComponent {

  @Input({ required: true }) list: any;
  @Input({ required: true }) listIndex: number = -1;
  boardService = inject(BoardService);
  buildTask: boolean = false;

  @ViewChild('taskBuilder') menux!: ElementRef;
  @HostListener('document:mousedown', ['$event'])
  @HostListener('document:keydown.escape', ['$event'])
  onClick(event: Event) {
    if (this.buildTask && !this.menux.nativeElement.contains(event.target)) {
      this.createCancel();
    }
  }

  newTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    description: new FormControl(''),
    labels: new FormControl([])
  });

  setBoardScroll(value: boolean) {
    this.boardService.setScroll(value);
  }

  createTask(taskList: any) {
    taskList.cards.push(this.newTaskForm.getRawValue());
    this.newTaskForm.patchValue({
      title: '',
    });
  }

  createCancel() {
    this.buildTask = false;
    this.newTaskForm.patchValue({
      title: '',
    });
  }

  showTaskBuilder() {
    this.buildTask = true;
    setTimeout(() => {
      let input = document.getElementById(`${this.listIndex}-task-input`);
      input?.focus();      
    });
  }
  
}
