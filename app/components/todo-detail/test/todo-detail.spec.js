'use strict';

describe('component: todoDetail', function() {
  var component, $componentController;

  beforeEach(module('todoDetail'));

  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;

  }));

  it('should set todoId from the route param', function() {
    component = $componentController('todoDetail',
      null
    );
    var next = {
      params: {
        id: 1
      }
    }
    component.$routerOnActivate(next);
    expect(component.todoId).toBe(1);
  })
})
