module.exports = {
  template: require('./signup.html'),
  // The controller that handles our component logic
    controller: function ($window,$state) {
      this.user = {
        			firstname: '',
              lastname:'',
              dob:'',
        			mobile: '',
        			email:'',
        			password:''
      };
      this.confirmPwd ='';
      this.emailReg =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       /*validation error msgs*/
     this.invalidFirstName ='Please enter first name';
     this.invalidLastName ='Please enter last name';
     this.invalidDOB ='Please enter date of birth';
     this.invalidMobile ='Please enter mobile number';
     this.reqEmail ='Please enter email';
     this.invalidEmail ='Please enter valid email';
     this.invalidPwd ='Please enter password';
     this.invalidConfirmPwd ='Please confirm password';
     //this.invalidFormSubmittion ="Please enter valid Details";

        this.register = function(user){
             var users = JSON.parse($window.sessionStorage.getItem("users") || '[]');
             console.log("users",users);
             if(users.length == 0){
                users.push(user);
             }
             angular.forEach(users, function(item) {
               if(item.mobile !== user.mobile){
                 users.push(user);
               }
               else {
                 return;
                console.log("already exists");
               }
            });
             $window.sessionStorage.setItem("users", JSON.stringify(users));
        }
  }
};
