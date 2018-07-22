package com.appsdeveloperbloc.app.ws.ui.entrypoint;

import com.appsdeveloperbloc.app.ws.exceptions.CoudNotCreateRecordException;
import com.appsdeveloperbloc.app.ws.service.UsersService;
import com.appsdeveloperbloc.app.ws.service.impl.UsersServiceImpl;
import com.appsdeveloperbloc.app.ws.shared.dto.UserDTO;
import com.appsdeveloperbloc.app.ws.ui.model.request.CreateUserRequestModel;
import com.appsdeveloperbloc.app.ws.ui.model.response.UserProfileRest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.springframework.beans.BeanUtils;

@Path("/users")
public class UsersEntryPoint {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public UserProfileRest createUser(CreateUserRequestModel requestObject) throws CoudNotCreateRecordException {
        UserProfileRest returnValue = new UserProfileRest();

        //Criando o DTO (objeto de tranferencia de dados)
        UserDTO userDTO = new UserDTO();
        BeanUtils.copyProperties(requestObject, userDTO);

        //Criando novo usuário
        UsersService userService = new UsersServiceImpl();
        UserDTO createdUserProfile = userService.createUser(userDTO);

        //Preparar resposta
        BeanUtils.copyProperties(createdUserProfile, returnValue);

        return returnValue;
    }

    @GET
    @Path("/{id}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})

    public UserProfileRest getUserProfile(@PathParam("id") String id)
    {
        UserProfileRest userProfileRest = null;
        return userProfileRest;
    }
    
}
