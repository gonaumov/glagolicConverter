$(document).on("click", "input#convertInput", function(event){
	function handleConvert() {
		this.empty();
		$("<h1/>", {
			text: $.convertCyrillicToGlagolitic($("#inputString").val())
		}).appendTo(this);
		this.show("slow");
	}
	
	var outString = $("#outputString");
	if ( outString.is(":visible") ) {
		outString.hide("slow", function() {
		  handleConvert.apply(outString);
		});
	} else {
		handleConvert.apply(outString);
	}
});
