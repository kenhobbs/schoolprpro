ResearchMethods = new Meteor.Collection('ResearchMethods');
ResearchMethodSchema = new SimpleSchema({
	ResearchMethod: {
		type: String,
		label: 'Research Method',
		optional: false
	}
});
ResearchMethods.attachSchema(ResearchMethodSchema);