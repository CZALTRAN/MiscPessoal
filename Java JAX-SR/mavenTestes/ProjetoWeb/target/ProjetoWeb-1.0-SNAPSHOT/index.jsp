<%@page import="com.czaltran.libraryteste.GetDateLibrary"%>
<%@page import="com.czaltran.projetoweb.GetDateLocal"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>


<%
    GetDateLocal getDateLocal = new GetDateLocal();
    GetDateLibrary getDateLib = new GetDateLibrary();
%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <h2><%=getDateLocal.readDateNow()%></h2>
        <h2><%=getDateLib.readDateNow()%></h2>
            
    </body>
</html>
