/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.appsdeveloperbloc.app.ws.exceptions;

import com.appsdeveloperbloc.app.ws.ui.model.response.ErrorMessage;
import com.appsdeveloperbloc.app.ws.ui.model.response.ErrorMessages;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author czalt
 */
@Provider
public class CoudNotCreateRecordExceptionMapper implements ExceptionMapper<CoudNotCreateRecordException>{

    public Response toResponse(CoudNotCreateRecordException exception) {
        ErrorMessage errorMessage = new ErrorMessage(
                exception.getMessage(), ErrorMessages.RECORD_ALREADY_EXIST.name(),"http://google.com.br" );
        return Response.status(Response.Status.BAD_REQUEST).entity(errorMessage).build();    }
    
}
