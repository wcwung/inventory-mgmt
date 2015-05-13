var stockpileServices = angular.module('stockpile.services', []);

stockpileServices.factory('InventoryFactory', ['localStorageService', function (localStorageService) {
  var inventory = [];

  var initializeInventory = function() {
      return [
        { id: 0, name: 'Loubatins', color: 'Red', condition: 'New', price: 899 },
        { id: 1, name: 'Michael Kors Clutch', color: 'Gold', condition: 'Like New', price: 129 },
        { id: 2, name: 'Gucci Belt', color: 'Green', condition: 'Gently Used', price: 249 }
      ];
  };

  var getInventoryItems = function() {
    var items = localStorageService.get('inventory');

    if (items === null) {
      items = initializeInventory();
    }

    return items;
  }

  var addInventoryItem = function() {
    console.log('yelp!');
  }

  return {
    inventory: getInventoryItems
  };
}]);
