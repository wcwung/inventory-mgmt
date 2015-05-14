/*==========  Inventory Controller  ==========*/

angular.module('stockpile.inventory', [])
.controller('InventoryCtrl', InventoryController);


function InventoryController(InventoryFactory, $filter) {
  var self = this;
  // Retrieves inventory data from factory
  self.clothing = InventoryFactory.inventory();
  self.newEntry = {};
  self.addInventoryItem = function(item) {
    alert(self.newEntry);
  };
}
