module.exports = {
  template: require('./login.html'),
  // The controller that handles our component logic
    controller: function ($state,$window) {
      this.credentials = {
          username: '',
          password: ''
        };
    this.loginSuccess = false;
    this.loginFail    = false;
    this.invalidUser  = 'Please enter mobile number';
    this.invalidPwd   = 'Please enter password';
    this.login = function(credentials){
            var users = JSON.parse($window.sessionStorage.getItem("users"));
            if(credentials.username != undefined || credentials.password != undefined){
              angular.forEach(users, function(item) {
                if(item.mobile == credentials.username && item.password == credentials.password){
                  $state.go("home");
                }
                else {
                 console.log("please enter valid details");
                }
             });
           }else{
             console.log("please enter credentials");
           }
	};
  }
};
