/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.appsdeveloperbloc.app.ws.exceptions;

/**
 *
 * @author czalt
 */
public class NoRecordFoundException extends RuntimeException {

    private static final long serialVersionUID = 8656568610640736245L;

    public NoRecordFoundException(String message) {
        super(message);
    }

}
