package com.appsdeveloperbloc.app.ws.io.dao.impl;

import com.appsdeveloperbloc.app.ws.io.dao.DAO;
import com.appsdeveloperbloc.app.ws.io.entity.UserEntity;
import com.appsdeveloperbloc.app.ws.shared.dto.UserDTO;
import com.appsdeveloperbloc.app.ws.utils.HibernateUtils;
import java.util.List;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.BeanUtils;

public class FirebirdDAO implements DAO {

    private Session session;

    public void openConnection() {
        SessionFactory sessionFactory = HibernateUtils.getSessionFactory();
        this.session = sessionFactory.openSession();
    }

    public UserDTO getUserByUserName(String userName) {
        UserDTO userDto = null;

        CriteriaBuilder cb = session.getCriteriaBuilder();

        CriteriaQuery<UserEntity> criteria = cb.createQuery(UserEntity.class);
        Root<UserEntity> profileRoot = criteria.from(UserEntity.class);
        criteria.select(profileRoot);
        criteria.where(cb.equal(profileRoot.get("email"), userName));

        Query<UserEntity> query = session.createQuery(criteria);
        List<UserEntity> resultList = query.getResultList();
        if (resultList != null && resultList.size() > 0) {
            UserEntity userEntity = resultList.get(0);
            userDto = new UserDTO();
            BeanUtils.copyProperties(userEntity, userDto);
        }
        return userDto;
    }

    public void closeConnection() {
        if (this.session != null) {
            this.session.close();
            this.session = null;
        }
    }

    public UserDTO saveUser(UserDTO user) {
        UserDTO returnValue = null;
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(user, userEntity);
        
        session.beginTransaction();
        session.save(userEntity);
        session.getTransaction().commit();
        
        returnValue = new UserDTO();
        BeanUtils.copyProperties(userEntity, returnValue);
        
        return returnValue;
    }

}
