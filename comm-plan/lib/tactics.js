Tactics = new Meteor.Collection('Tactics');
TacticSchema = new SimpleSchema({
	Tactic: {
		type: String,
		label: 'Tactic',
		optional: false
	}
});
Tactics.attachSchema(TacticSchema);