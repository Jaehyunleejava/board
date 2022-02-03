import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardModifyComponent } from './component/board/board-modify.component';
import { BoardViewComponent } from './component/board/board-view.component';
import { BoardWriteComponent } from './component/board/board-write.component';
import { BoardComponent } from './component/board/board.component';
import { HomeComponent } from './component/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch : 'full' 
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'board/post',
    component: BoardWriteComponent
  },
  {
    path: 'board/post/:boardNo',
    component: BoardViewComponent
  },
  {
    path: 'board/post/modify/:boardNo',
    component : BoardModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
