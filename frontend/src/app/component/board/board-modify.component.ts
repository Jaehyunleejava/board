import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/board/Post';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-board-modify',
  templateUrl: './board-modify.component.html',
  styleUrls: ['./board-modify.component.css']
})
export class BoardModifyComponent implements OnInit {

  boardNo! : number;
  board = {} as Post;
  boardForm! : FormGroup;

  constructor(
    private boardService : BoardService,
    private route : ActivatedRoute,
    private router : Router,
    private formBuilder : FormBuilder,
  ) { 
    this.boardNo = this.route.snapshot.params['boardNo'];
    this.boardForm = this.formBuilder.group({
      title : new FormControl('', [Validators.required]),
      content : new FormControl('', [Validators.required])
    })
  }

  //폼 필드에 쉽게 접근하기 위해 getter 설정
  get f () {
    return this.boardForm.controls;
  }

  ngOnInit(): void {
    this.boardService.getPost(this.boardNo)
      .then(res => {
        this.board = res;
      })
  }

  submit() {
    this.board.boardNo = this.boardNo;
    this.boardService.modifyPost(this.board)
      .then(res => {
        this.router.navigate(['/board/post/' + this.boardNo]);
      })
  }

}
