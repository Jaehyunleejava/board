package com.example.demo;

public class ApiUtils {
    public static <T> ApiResult<T> success(String rsCode, T response) {
        return new ApiResult<T>(rsCode, response, null);
    }
    
    public static <T> ApiResult<T> fail(String rsCode, T response, String errMsg) {
        return new ApiResult<T>(rsCode, response, errMsg);
    }
}