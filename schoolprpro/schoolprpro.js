Resolutions = new Mongo.Collection("resolutions");

if (Meteor.isClient) {
  Template.body.helpers({
    resolutions: function() {
        return Resolutions.find();
    }
  });
  Template.body.events({
     "submit .new-resolution": function(event) {
         console.log(event);
         var title = event.target.title.value;
         Resolutions.insert({title: title, createdAt: new Date()});
         event.target.title.value = ""; // set input to blank - must reference from event not local var
         return false; // so the form doesn't submit and page refresh
     }
  });
  Template.resolution.events({
      "click .toggle-checked": function() {
        Resolutions.update(this._id, {$set: {checked: !this.checked}});
      },
      "click .delete": function(event) {
          console.log(event); // don't need event here!  but i'm inspecting it anyway
          console.log(this); // inspecting this...
          Resolutions.remove(this._id); // the handler knows that "this" is the current record
      }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
