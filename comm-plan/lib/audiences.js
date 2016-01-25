Audiences = new Meteor.Collection('Audiences');
AudienceSchema = new SimpleSchema({
	Audience: {
		type: String,
		label: 'Audience',
		optional: false
	}
});
Audiences.attachSchema(AudienceSchema);