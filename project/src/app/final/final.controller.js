(function() {
  'use strict';


  function FinalCtrl($location, searchConfigService) {
      var vm = this;
      
      vm.searchConfigService = searchConfigService;
      vm.input = '';
      vm.affiche = affiche;

    function affiche(){
      vm.searchConfigService.ingredient = vm.input;
  }

}


  FinalCtrl.$inject = ['$location', 'searchConfigService'];


  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);
    
})();