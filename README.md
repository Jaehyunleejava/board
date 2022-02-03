# board
게시판 실습(Angular + Springboot + Mybatis)

<h2>[IDE]</h2>

backend : sts<br>
frontend: vscode

<h2>[sw]</h2>

MYSQL<br>
Swagger(Rest Api Documentation)

<h2>[Info]</h2>

<h3>1. mysql 설치</h3>
<h3>2. 테이블 생성</h3> 
  
  ```
  -- 데이터베이스생성 및 한글설정
  create database mybatis_db default character set utf8mb4 default collate utf8mb4_general_ci;

  -- 어떠한 호스트로 접속해도 접속가능하도록 
  create user 'root'@'%' identified by '1234';

  -- 계정 모든 권한 부여
  grant all on mybatis_db.* to 'root'@'%';

  -- 데이터베이스 접속
  use mybatis_db;

  CREATE TABLE t_board (
      board_idx INT AUTO_INCREMENT COMMENT '글 번호',
      title VARCHAR(300) NOT NULL COMMENT '제목',
      contents TEXT NOT NULL COMMENT '내용',
      hit_cnt SMALLINT(10) DEFAULT 0 NOT NULL COMMENT '조회수',
      created_datetime DATETIME NOT NULL COMMENT '작성시간',
      creator_id VARCHAR(50) NOT NULL COMMENT '작성자',
      updated_datetime DATETIME DEFAULT NULL COMMENT '수정시간',
      updater_id VARCHAR(50) DEFAULT NULL COMMENT '수정자',
      deleted_yn CHAR(1) DEFAULT 'N' NOT NULL COMMENT '삭제여부',
      PRIMARY KEY(board_idx)
  );
  ```
  <h3>3. Angular 설치</h3>
   1. node 설치 <br>
   2. Angular cli 설치
   
  <h3>4. 서버 정보</h3>
  
    [프론트엔드]
    서버시작: npm start(cmd)
    url: localhost:4200

    [벡엔드]
    서버시작: sts에서
    url: localhost:8080

    [swagger-ui]
    url : localhost:8080/swagger-ui.html
