package com.example.demo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiResult<T>{
    private final String rs_code;
    private final T response;
    private final String errorMsg;
    public ApiResult(String rs_code, T response, String errorMsg) {
        this.rs_code = rs_code;
        this.response = response;
        this.errorMsg = errorMsg;
    }
}
