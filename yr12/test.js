function loadshell()
{
	var folder = document.getElementById("shell").getAttribute("data-hash");
	var fname = document.getElementById("shell").getAttribute("data-filename");

	document.getElementsByTagName("shell")[0].innerHTML = "<script type=\"application\/javascript\" src=\"https:\/\/script.google.com\/macros\/s\/AKfycbyUUReOeIpiiIJWWMaKORJYURDTso_cm5RNuNu0W0oVKBPfNtdk\/exec?serve="+folder+"&filename="+fname+"&prefix=shell\"\"><\/script>"
}
function shell(myobject)
{
	document.getElementsByTagName("shell")[0].innerHTML = myobject.bodycontent; 
}