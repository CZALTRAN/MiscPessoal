/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.appsdeveloperbloc.app.ws.exceptions;

import com.appsdeveloperbloc.app.ws.ui.model.response.ErrorMessages;

/**
 *
 * @author czalt
 */
public class CoudNotCreateRecordException extends Exception {

    private static final long serialVersionUID = -3702388742216163325L;

    public CoudNotCreateRecordException(ErrorMessages errorMessages) {
    }
    
}
