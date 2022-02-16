package com.example.demo.model.response;

public enum ResponseCode {

	SUCCESS("0000")		//성공
	,ERROR("-9999");	//error코드

	private final String code;
	
	ResponseCode(String string) {
		this.code = string;
	}
	
	public String getCode() {
		return code;
	}
}
