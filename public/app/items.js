app.controller('ItemsCtrl', function($scope, Item, ngProgress, toaster) {

$scope.item = new Item();

var refresh = function() {
  $scope.items = Item.query(); 
  $scope.item ="";
}
refresh();

$scope.add = function(item) {
  Item.save(item,function(item){
    refresh();
  });
};

$scope.update = function(item) {
  item.$update(function(){
    refresh();
  });
};

$scope.remove = function(item) {
  item.$delete(function(){
    refresh();
  });
};

$scope.edit = function(id) {
  $scope.item = Item.get({ id: id });
};  


$scope.deselect = function() {
  $scope.item = "";
}

})