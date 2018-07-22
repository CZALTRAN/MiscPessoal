package com.appsdeveloperbloc.app.ws.service;

import com.appsdeveloperbloc.app.ws.exceptions.CoudNotCreateRecordException;
import com.appsdeveloperbloc.app.ws.shared.dto.UserDTO;

public interface UsersService {
    UserDTO createUser(UserDTO userDTO) throws CoudNotCreateRecordException;
}
