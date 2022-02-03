package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.log4j.Log4j2;


@Log4j2
@Service
public class BoardSeviceImpl implements BoardService{

	@Autowired 
	private BoardMapper boardMapper;

	@Override
	public List<BoardVO> getAll() {
		return boardMapper.getAll();
	}
	
	@Override
	public BoardVO get(int boardNo) {
		return boardMapper.get(boardNo);
	}
	
	@Transactional
	@Override
	public BoardVO write(BoardVO boardVO) throws Exception {
		int rowCount = boardMapper.write(boardVO);
		int newBoardNo = boardVO.getBoardNo();
		BoardVO newBoard;
		if(rowCount == 1) {
			newBoard = boardMapper.get(newBoardNo);
		} else {
			throw new Exception();
		}
		
		return newBoard;
	}
	
	@Override
	public int delete(int boardNo) throws Exception {
		int flag = boardMapper.delete(boardNo);
		if(flag == 1) {
			return flag;
		} else {
			throw new Exception();
		}
	}
	
	@Override
	public int update(BoardVO boardVO) throws Exception {
		int flag = boardMapper.update(boardVO);
		if(flag == 1) {
			return flag;
		} else {
			throw new Exception();
		}
	}
}
