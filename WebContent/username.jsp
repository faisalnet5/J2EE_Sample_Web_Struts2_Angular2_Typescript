<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Insert title here</title>
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
	
	<!-- Libraries -->
  	<script src="https://github.jspm.io/jmcriffey/bower-traceur-runtime@0.0.87/traceur-runtime.js"></script>
  	<script src="https://jspm.io/system@0.16.js"></script>
  	<script src="bundle/angular2/angular2.dev.js"></script>
  
  	 <!-- Stylesheet -->
  	 <link rel="stylesheet" type="text/css" href="css/styles.css"> 
</head>
<body>
	<script src='js/greeter.js'></script>
	
	<reddit></reddit>
	
	<s:form action="HelloWorld" >
		<s:textfield name="userName" label="User Name" />
		<s:submit />
	</s:form>
	
	<script>
		System.import('js/main');
	</script>
</body>
</html>