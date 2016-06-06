'use strict';

(function() {
  angular.module('todoDetail', []).component('todoDetail', {
    templateUrl: 'app/components/todo-detail/todo-detail.html',
    controller: TodoDetailCtrl,
    controllerAs: 'todoDetail'
  });

  function TodoDetailCtrl() {
    var todoDetail = this;

    todoDetail.$routerOnActivate = function(next, previous) {
      todoDetail.todoId = next.params.id;
    }
  }
})();
