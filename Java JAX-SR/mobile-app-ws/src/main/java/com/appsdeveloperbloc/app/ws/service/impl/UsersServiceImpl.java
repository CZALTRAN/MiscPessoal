package com.appsdeveloperbloc.app.ws.service.impl;

import com.appsdeveloperbloc.app.ws.exceptions.CoudNotCreateRecordException;
import com.appsdeveloperbloc.app.ws.io.dao.DAO;
import com.appsdeveloperbloc.app.ws.io.dao.impl.FirebirdDAO;
import com.appsdeveloperbloc.app.ws.service.UsersService;
import com.appsdeveloperbloc.app.ws.shared.dto.UserDTO;
import com.appsdeveloperbloc.app.ws.ui.model.response.ErrorMessages;
import com.appsdeveloperbloc.app.ws.utils.UserProfileUtils;

public class UsersServiceImpl implements UsersService {

    private UserProfileUtils userProfileUtils = new UserProfileUtils();
    private DAO database = null;

    public UsersServiceImpl() {
        this.database = new FirebirdDAO();
    }

    public UserDTO createUser(UserDTO user) throws CoudNotCreateRecordException {
        UserDTO returnValue = null;
        //Validação
        this.userProfileUtils.validateRequiredFields(user);
        //Checar se usuário existe
        UserDTO existingUser = this.getUserByUserName(user.getEmail());
        //Criar um objeto entidade
        if (existingUser != null) {
            throw new CoudNotCreateRecordException(ErrorMessages.RECORD_ALREADY_EXIST);
        }
        //Criar id publica do usuário
        String userId = userProfileUtils.generateUserID(30);
        user.setUserID(userId);
        //Criar Salt
        String salt = userProfileUtils.generateSalt(30);
        user.setSalt(salt);
        //Generate Secure Password
        String securePass = userProfileUtils.generateSecurePassword(user.getPassword(), salt);
        user.setEncryptedPassword(securePass);
        //Gravar dado no banco de dados
        returnValue = saveUser(user);
        //Retornar o valor de volta
        return returnValue;
    }

    private UserDTO getUserByUserName(String userName) {
        UserDTO user = null;
        if (userName == null || userName.isEmpty()) {
            return null;
        }

        try {
            this.database.openConnection();
            user = this.database.getUserByUserName(userName);
        } finally {
            this.database.closeConnection();
        }

        return user;
    }

    private UserDTO saveUser(UserDTO user) {
        try {
            this.database.openConnection();
            user = this.database.saveUser(user);
        } finally {
            this.database.closeConnection();
        }

        return user;
    }

}
