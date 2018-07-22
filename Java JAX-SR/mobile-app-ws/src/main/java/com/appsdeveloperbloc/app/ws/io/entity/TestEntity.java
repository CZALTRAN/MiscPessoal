package com.appsdeveloperbloc.app.ws.io.entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity(name = "Teste")
@SequenceGenerator(name = "GenTest", sequenceName = "GenTest", allocationSize = 1)
public class TestEntity implements Serializable {

    private static final long serialVersionUID = 7320003420444278294L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GenTest")
    private long id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

 

}
