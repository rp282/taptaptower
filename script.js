let loginWithFacebook = _ => _

function fbSDKLoaded() {
	FB.getLoginStatus(response => {
		if (response.status == "not_authorized") {
			loginWithFacebook = _ => {
				FB.login(response => {
					console.log(response)
				})
			}
		}
	});
}
