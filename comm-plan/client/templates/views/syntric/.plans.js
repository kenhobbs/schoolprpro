Template.plans.helpers({
    plans: function(){
        return Plans.find();
    }
});

Template.plans.events({
   'click .plan-row': function(event){
       // event refers to the click event object
       // this refers to the collection document object, so this._id is the selected object id
       // var id = this._id;
       // console.log(id);
       // console.log(Plans.findOne(id));
       // Router.go('plan', this);
       //console.log(Plans.findOne({_id: this._id}));
       /*
       data: function(){
           return Plans.findOne({_id: this.params._id});
       }
       Router.go('plan');
       */
   }
});

Template.plans.onCreated(function () {
});

Template.plans.onRendered(function () {
});

Template.plans.onDestroyed(function () {
});

