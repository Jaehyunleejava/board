import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/board/Post';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent implements OnInit {

  boardNo! : number;
  board! : Post;

  constructor(
    private boardService : BoardService,
    private route : ActivatedRoute
  ) 
  {
    this.boardNo = this.route.snapshot.params['boardNo'];
  }

  ngOnInit(): void {
    this.boardService.getPost(this.boardNo)
      .then(res => {
        this.board = res;
      })
  }

}
