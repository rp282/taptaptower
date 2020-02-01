function fbSDKLoaded() {
	FB.getLoginStatus(response => {
		if (response.status == "not_authorized") {
			FB.login(response => {
				console.log(response)
			})
		}
	});
}

function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}
