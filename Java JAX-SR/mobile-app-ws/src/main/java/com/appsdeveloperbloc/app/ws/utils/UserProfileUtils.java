package com.appsdeveloperbloc.app.ws.utils;

import com.appsdeveloperbloc.app.ws.exceptions.MissingRequiredFieldException;
import com.appsdeveloperbloc.app.ws.shared.dto.UserDTO;
import com.appsdeveloperbloc.app.ws.ui.model.response.ErrorMessages;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.Base64;
import java.util.Random;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

public class UserProfileUtils {

    private final Random RANDOM = new SecureRandom();
    private final String ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    private final int ITERATIONS = 10000;
    private final int KEY_LENGTH = 256;

    public String generateUUID() {
        String ret = UUID.randomUUID().toString().replaceAll("-", "");
        return ret;
    }

    public String generateUserID(int lenght) {
        return this.generateRandomString(lenght);
    }

    public String generateSalt(int lenght) {
        return this.generateRandomString(lenght);
    }

    public String generateSecurePassword(String password, String salt) {
        String returnValue = null;
        byte[] securePassword = hash(password.toCharArray(), salt.getBytes());
        returnValue = Base64.getEncoder().encodeToString(securePassword);
        return returnValue;
    }

    private String generateRandomString(int lenght) {
        StringBuilder returnValue = new StringBuilder(lenght);
        for (int i = 0; i < lenght; i++) {
            returnValue.append(ALPHABET.charAt(RANDOM.nextInt(ALPHABET.length())));
        }
        return new String(returnValue);
    }

    public void validateRequiredFields(UserDTO userDTO) throws MissingRequiredFieldException {
        if (userDTO.getFirstName() == null || userDTO.getFirstName().isEmpty()
                || userDTO.getLastName() == null || userDTO.getLastName().isEmpty()
                || userDTO.getEmail() == null || userDTO.getEmail().isEmpty()
                || userDTO.getPassword() == null || userDTO.getPassword().isEmpty()) {
            throw new MissingRequiredFieldException(ErrorMessages.MISSING_REQUIRED_FIELD.getErrorMessage());
        }
    }

    private byte[] hash(char[] password, byte[] salt) {
        PBEKeySpec spec = new PBEKeySpec(password, salt, ITERATIONS, KEY_LENGTH);
        Arrays.fill(password, Character.MIN_VALUE);
        try {
            SecretKeyFactory skf = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            return skf.generateSecret(spec).getEncoded();
        } catch (NoSuchAlgorithmException ex) {
            throw new AssertionError("Erro ao criar hash: " + ex);
        } catch (InvalidKeySpecException ex) {
            throw new AssertionError("Erro ao criar hash: " + ex); 
        }finally{
            spec.clearPassword();
        }
    }

}
