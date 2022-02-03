export interface Post {
  boardNo: number;
  title: string;
  contents: string;
  hitCnt: string;
  createTime: Date;
  creatorId : string;
  updateTime: Date;
  updaterId : string;
  deletedYN : string;
}