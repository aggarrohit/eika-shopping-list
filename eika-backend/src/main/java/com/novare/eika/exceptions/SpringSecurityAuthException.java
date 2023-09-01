package com.novare.eika.exceptions;

import com.novare.eika.models.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class SpringSecurityAuthException implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException /*throws ...*/ {
        response.setStatus(401);
        response.getWriter().write(new ErrorResponse("401","Invalid user credentials").toString());
    }
}
