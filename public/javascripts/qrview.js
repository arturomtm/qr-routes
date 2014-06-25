var QRView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.updateAttr.bind(this));
  },
  tagName: "img",
  updateAttr: function(){
    this.attributes = this.model.attributes;
    this.$el.attr(this.model.attributes);
    this.render();
  },
  render: function(){
    return this;
  }
});
