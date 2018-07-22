package com.appsdeveloperbloc.app.ws.utils;

import java.util.logging.Level;
import java.util.logging.Logger;
import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtils {

    private static final SessionFactory sessionFactory;

    static {
        Configuration conf = new Configuration();
        conf.configure();
        try {
            sessionFactory = new Configuration().configure().buildSessionFactory();

        } catch (HibernateException e) {
            System.err.println("Criação de contexto falhou!" + e);
            Logger.getLogger(HibernateUtils.class.getName()).log(Level.SEVERE, null, e);

            throw new ExceptionInInitializerError(e);
        };
    }

    public static SessionFactory getSessionFactory() {
        return HibernateUtils.sessionFactory;

    }
}
