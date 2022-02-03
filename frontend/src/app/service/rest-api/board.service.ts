// board.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/model/board/Post';
import { ApiResponseList } from 'src/app/model/common/ApiResponseList';
import { ApiValidationService } from './common/api-validation.service';
import { ApiResponseSingle } from 'src/app/model/common/ApiResponseSingle';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient,
    private apiValidationService : ApiValidationService ) {}

  private getBoardsUrl = '/api/getAll';
  private writeBoardUrl = '/api/write';
  private getBoardUrl = '/api/get';
  private modifyBoardUrl = 'api/update';
  private deleteBoardUrl = 'api/delete';

  //게시물 전체 조회
  getPosts(): Promise<Post[]> {
    const getPostsUrl = this.getBoardsUrl;
    return this.http.get<ApiResponseList>(getPostsUrl)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(res => {
        return res?.response as Post[];
      })
      .catch(response => {
        alert('[(BackEnd)게시판 조회 중 오류 발생]\n' + response.error.errorMsg);   
        return Promise.reject(response.error.errorMsg);
      });
  }

  //게시물 1개 조회
  getPost(boardNo: number): Promise<Post> {
    const getPostUrl = this.getBoardUrl + '/' + boardNo;
    return this.http.get<ApiResponseSingle>(getPostUrl)
      .toPromise()
      .then(this.apiValidationService.validateResponse)
      .then(res => {
        return res.response as Post;
      })
      .catch(response => {
        alert('[(BackEnd)게시글 조회 중 오류 발생]\n' + response.error.errorMsg);   
        return Promise.reject(response.error.errorMsg);
      });
  }


    // 게시글 작성
    addPost(title: string, content: string): Promise<Post> {
      //json 으로 통신
      const headers = { 'content-type': 'application/json'} 
      const postUrl = this.writeBoardUrl;
      const params = {
        title : title,
        contents : content,
        creatorId : '관리자'
      };
      return this.http.post<ApiResponseSingle>(postUrl, JSON.stringify(params), {'headers' : headers})
        .toPromise()
        .then(this.apiValidationService.validateResponse)
        .then(res => {
          return res.response as Post;
        })
        .catch(response => {
          alert('[(BackEnd)게시글 등록 중 오류 발생]\n' + response.error.errorMsg);   
          return Promise.reject(response.error.errorMsg);
        });
    }

    // 게시글 수정
    modifyPost(post: Post): Promise<Post> {
      //json 으로 통신
      const headers = { 'content-type': 'application/json'};
      const postUrl = this.modifyBoardUrl + '/' + post.boardNo;
      return this.http.post<ApiResponseSingle>(postUrl, JSON.stringify(post), {'headers' : headers})
        .toPromise()
        .then(this.apiValidationService.validateResponse)
        .then(res => {
          return res.response as Post;
        })
        .catch(response => {
          alert('[(BackEnd)게시글 수정 중 오류 발생]\n' + response.error.errorMsg);   
          return Promise.reject(response.error.errorMsg);
        });
    }

    // 게시글 삭제
    deletePost(post: Post): Promise<Post> {
      //json 으로 통신
      const headers = { 'content-type': 'application/json'};
      const postUrl = this.deleteBoardUrl;
      return this.http.post<ApiResponseSingle>(postUrl, JSON.stringify(post), {'headers' : headers})
        .toPromise()
        .then(this.apiValidationService.validateResponse)
        .then(res => {
          return res.response as Post;
        })
        .catch(response => {
          alert('[(BackEnd)게시글 삭제 중 오류 발생]\n' + response.errorMsg);   
          return Promise.reject(response.errorMsg);
        });
    }
}