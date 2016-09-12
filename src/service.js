module.exports = authService;

/** @ngInject */
function authService() {
    var service={
		 registration:registration
	 }
   function registration(user){
     console.log("servie",user);
   }
    retutn service;
}
