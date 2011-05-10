sc_require('debug/base');
sc_require('debug/utils/json');

Fictum.DynamicResponse = SC.Object.extend({
  value: function(store) {
    return this.get('response')(store);
  }
});
