function renderSmartInput(phone) { 
    var re = /((\(\d{2}\) ?)|(\d{2}-))?\d{4}-\d{4}/;
    return re.test(phone);
}

$(document).ready(function(){
	$("#test_field").mask("(99) 9999-9999");

	$('#button_holder button').click(function(){
		if(!renderSmartInput($('#test_field').val())){
			$('#success').hide();
			$('#error').show();
			$('#test_field').css('borderBottom', '2px solid #ff1b1d');
			return false;
		}
		else{
			$('#error').hide();
			$('#success').show();
			$('#email_submit .message').show();
			$('#email_submission').css('border', 'none');
			$('#test_field').css('borderBottom', '2px solid #71c30d');
		}
		return false;
	});
});