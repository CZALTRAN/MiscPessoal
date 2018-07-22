package com.czaltran.libraryteste;

import java.util.Date;

public class GetDateLibrary {

    public String readDateNow() {
        Date dt = new Date();
        return "LibraryTeste 5 - " + dt.toString();
    }
}
