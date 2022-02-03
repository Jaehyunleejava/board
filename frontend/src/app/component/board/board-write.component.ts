import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-board-write',
  templateUrl: './board-write.component.html',
  styleUrls: ['./board-write.component.css']
})
export class BoardWriteComponent implements OnInit {

  postForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder : FormBuilder,
    private boardService: BoardService
  ) { 
    this.postForm = this.formBuilder.group({
      title : new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.postForm.controls;
  }

  submit(){
    if(this.postForm.valid) {
      this.boardService.addPost(this.postForm.value.title, this.postForm.value.content)
        .then(response => {
          this.router.navigate(['/board/post/' +response.boardNo]);
        });
    }
  }
  ngOnInit(): void {
  }

}
