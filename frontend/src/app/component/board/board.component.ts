// board.component.ts
import { assertPlatform, Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  // posts: Post[] = [
  //   {'boardNo':3, 'title': '슈퍼맨이 요리를 한다.', 'creatorId': '슈퍼맨', 'contents': '슈퍼맨이 최고다', 'createDate': new Date(), 'updateTime': new Date(), 'hitCnt': "1", "deletedYN": "N", "updaterId": "영수"},
  //   {'boardNo':2, 'title': '배트맨이 요리를 한다.', 'creatorId': '배트맨', 'contents': '배트맨이 최고다', 'createDate': new Date(), 'updateTime': new Date(), 'hitCnt': "1", "deletedYN": "N", "updaterId": "영수"},
  //   {'boardNo':1, 'title': '아이언맨이 요리를 한다.', 'creatorId': '아이언맨', 'contents': '아이언맨이 최고다', 'createDate': new Date(), 'updateTime': new Date(), 'hitCnt': "1", "deletedYN": "N", "updaterId": "영수"}
  // ];
  posts: Post[] = [];
  headerColumns: string[] = ['boardNo', 'title', 'contents', 'creatorId', 'createTime', 'modify'];
  boardName!: string;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getPosts().then(response => {
      this.posts = response; 
    });
  }

  delete(post:Post) {
    if(confirm("삭제하시겠습니까?")) {
      this.boardService.deletePost(post)
        .then(res => {
          window.location.reload();
        })
    }
  }
}