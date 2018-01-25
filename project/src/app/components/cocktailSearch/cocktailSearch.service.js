(function() {
    'use strict';
  
    function cocktailSearchService() {
      var service = {};
      service.cocktailList = [];
    
      return service;
    }
    
    function getCocktail() {
      var service = {};
     
    
      return service;
    }
    

    cocktailSearchService.$inject = [];
    
    angular.module('daproject')
        .factory('cocktailSearchService', cocktailSearchService);
  
})();