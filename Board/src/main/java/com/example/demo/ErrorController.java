package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import lombok.extern.log4j.Log4j2;

@Log4j2
@ControllerAdvice
public class ErrorController {
	public static final String ERRORCODE = "-9999";
	
    //모든 예외를 핸들링하여 ErrorResponse 형식으로 반환한다.
    @SuppressWarnings("rawtypes")
	@ExceptionHandler(Exception.class)
    protected ResponseEntity<ApiResult> handleException(Exception e) {
        log.error("handleException", e);
        
         ApiResult<String> response = ApiUtils.fail(ERRORCODE, null, e.getMessage());
        
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}