/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.appsdeveloperbloc.app.ws.io.dao;

import com.appsdeveloperbloc.app.ws.shared.dto.UserDTO;

/**
 *
 * @author czalt
 */
public interface DAO {
    void openConnection();
    UserDTO getUserByUserName(String userName);
    void closeConnection();

    UserDTO saveUser(UserDTO user);
}
