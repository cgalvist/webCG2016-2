var app=angular.module("app",["ngMaterial"]);app.controller("toolbarCtrl",["$scope","ServiceUsers",function(e,r){e.prueba="prueba CGT";var n=r.getUsers();n.then(function(r){e.users=r},function(e){console.log("Failed: "+e)})}]),app.service("ServiceUsers",["$http","$q",function(e,r){this.getUsers=function(){var n=r.defer();return e.get("data.json").success(function(e){n.resolve(e)}).error(function(e){n.reject(e)}),n.promise}}]);