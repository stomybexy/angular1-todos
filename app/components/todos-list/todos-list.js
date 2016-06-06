'use strict';

(function() {
  angular.module('todosList', []).component('todosList', {
    templateUrl: 'app/components/todos-list/todos-list.html',
    controller: TodosListCtrl,
    controllerAs: 'todosList'
  });

  function TodosListCtrl() {

    this.todos = [{
      id: 1,
      name: 'Awesome todo'
    }, {
      id: 2,
      name: 'Awesome Angular'
    }, {
      id: 3,
      name: 'Angular 2'
    }]
  }
})();
