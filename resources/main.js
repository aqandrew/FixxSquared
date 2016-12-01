function submitContactInfo() {
	if (validateContactInfo()) {
		var contactInfo = $('#update-contact-info-form').serialize();
		console.log('contactInfo: ', contactInfo);
		// TODO include this user's MySQL ID so we can find them in the db
		//$.post('php/updateContactInfo.php', contactInfo);	// TODO
	}
}

function validateContactInfo() {
	var contactInfo = $('#update-contact-info-form').serializeArray();
	console.log('contactInfo: ', contactInfo);
	
	var email = contactInfo.filter(function (serial) { return serial.name == 'updateEmail' }).value;
	var resHall = contactInfo.filter(function (serial) { return serial.name == 'updateResHall' }).value;
	var room = contactInfo.filter(function (serial) { return serial.name == 'updateRoom' }).value;
	
	if (validateEmail(email)) {
		return true;
	}
	else {
		alert('Please enter a valid email address.');
		document.getElementsByName('updateEmail')[0].focus();
	}
	
	return false;
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function filterTicketsByHall(hall) {
	// TODO filter tickets by hall
	
	$('.res-hall-filter').text(hall)
		.append(' <span class="caret"></span>');
}