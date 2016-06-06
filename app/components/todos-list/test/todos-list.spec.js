'use strict';

describe('component: todosList', function() {
  var component, $componentController;

  beforeEach(module('todosList'));

  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;

  }));

  it('should define an array of 3 todos', function() {
    component = $componentController('todosList',
      null
    );
    expect(component.todos.length).toBe(3);
  })
})
