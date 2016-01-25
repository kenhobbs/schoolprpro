ChallengesOpportunities = new Meteor.Collection('ChallengesOpportunities');
ChallengeOpportunitySchema = new SimpleSchema({
	ChallengeOpportunity: {
		type: String,
		label: 'Challenge/Opportunity',
		optional: false
	}
});
ChallengesOpportunities.attachSchema(ChallengeOpportunitySchema);