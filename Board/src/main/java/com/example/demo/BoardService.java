package com.example.demo;

import java.util.List;

import com.example.demo.model.BoardVO;

public interface BoardService {
	
	//전체 게시글 가져오기
	List<BoardVO> getAll();

	//게시글 1개 가져오기
	BoardVO get(int boardNo);

	//글쓰기
	BoardVO write(BoardVO boardVO) throws Exception;

	//게시글 삭제
	int delete(int boardNo) throws Exception;
	
	//게시글 수정
	int update(BoardVO boardVO) throws Exception;
}
