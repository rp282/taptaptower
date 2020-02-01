function fbSDKLoaded() {
	FB.getLoginStatus(response => {
		if (response.status == "not_authorized") {
			loginWithFacebook = _ => {
				console.log('test');
				FB.login(response => {
					console.log(response)
				})
			}
		}
	});
}
