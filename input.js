const decodeText = (text, type = "text") => {
	
	if (typeof text == "string") {
		// Remove leading and trailing slashes
		text = text.replace(/^\/|\/$/g, "");
	
		// Transform accented characters to their non-accented version
		text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	
		// Remove .html extension
		text = text.replace(/.html/g, " ");
	
		// Remove +
		text = text.replace(/\+/g, " ");
	
		// Remove %20
		text = text.replace(/%20/g, " ");
	
		// Change dashes to spaces, unless type=url
		if (type == "url") {
			text = text.replace(/ /g, "-");
		} else {
			text = text.replace(/-/g, " ");
		}
	
		// Transform to lowercase
		text = text.toLowerCase();
	
		// Trim whitespace
		text = text.trim();

	} else {
		
		console.error("decodeText()", "text should be string, " + typeof text + " provided")
	}
	
	return text;
}