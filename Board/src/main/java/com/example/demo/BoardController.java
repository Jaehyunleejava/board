package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.log4j.Log4j2;

@Api(tags= {"1. Board"})
@RestController
@Log4j2
public class BoardController {
	
	@Autowired BoardService boardService;
	
	@ApiOperation(value = "전체 게시글 조회", notes = "모든 게시글을 조회한다")
	@GetMapping("/api/getAll")
	public ApiResult<List<BoardVO>> getAll() {
		List<BoardVO> result = boardService.getAll();
		
		return ApiUtils.success("0000", result);
	}
	
	@ApiOperation(value = "게시글 조회", notes = "특정 게시글을 조회한다")
	@GetMapping("/api/get/{boardNo}")
	public ApiResult<BoardVO> get(@PathVariable int boardNo) throws Exception {
		BoardVO result = boardService.get(boardNo);

		return ApiUtils.success("0000", result);
	}
	
	@ApiOperation(value = "게시글 입력", notes = "게시글 입력 후 입력한 정보데이터를 조회한다")
	@PostMapping("/api/write")
	public ApiResult<BoardVO> write(@RequestBody BoardVO boardVO) throws Exception {
		BoardVO result = boardService.write(boardVO);
		
		return ApiUtils.success("0000", result);
	}
	
	@ApiOperation(value = "게시글 삭제", notes = "특정 게시글을 삭제한다")
	@PostMapping("/api/delete")
	public ApiResult<String> delete(@RequestBody BoardVO boardVO) throws Exception {
		boardService.delete(boardVO.getBoardNo());
		return ApiUtils.success("0000", "");
	}
	
	@ApiOperation(value = "게시글 수정", notes = "특정 게시글을 수정한다")
	@PostMapping("/api/update/{boardNo}")
	public ApiResult<String> update(@PathVariable int boardNo, @RequestBody BoardVO boardVO) throws Exception {
		
		BoardVO param = new BoardVO();
		param.setBoardNo(boardNo);
		param.setTitle(boardVO.getTitle());
		param.setContents(boardVO.getContents());
		boardService.update(param);

		return ApiUtils.success("0000", "");
	}
}
