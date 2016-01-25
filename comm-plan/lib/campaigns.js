Campaigns = new Meteor.Collection('Campaigns');
CampaignSchema = new SimpleSchema({
    Title: {
        type: String,
        label: 'Title',
        optional: false
    },
    ChallengeOpportunity: {
        type: ChallengeOpportunitySchema
    },
    /*ChallengeOpportunity: {
        type: String,
        label: 'Challenge or Opportunity',
        optional: false,
        allowedValues: [
            'Marketing schools',
            'Closing schools',
            'Increasing participation in an event or process',
            'Increasing reach of social media',
            'Dealing with crisis in confidence of leadership',
            'Healing relationship between leadership and associations',
            'Changing school boundaries, grade levels, focus or type',
            'Other'
        ]
    },*/
    ChallengeOpportunityOther: {
        type: String,
        label: 'Challenge/Opportunity Other',
        optional: true
    },
    ResearchMethod: {
      type: ResearchMethodSchema
    },
    /*ResearchMethod: {
        type: String,
        label: 'Research Method',
        optional: true,
        allowedValues: [
            'School visit to interview audiences',
            'Review of data collected by others',
            'Surveys created for this issue or questions added to other surveys already being done',
            'Interview stakeholders involved in the issue, including internal like other departments',
            'Review of how other organizations have handled a similar issue',
            'Advisory panel input from stakeholders associated with the issue',
            'Public forum input',
            'Tracking attendance at events',
            'Website analytics',
            'Email opens, links clicked, forwards, likes',
            'Other'
        ]
    },*/
    ResearchMethodOther: {
        type: String,
        label: 'Research Method Other',
        optional: true
    },
    Objectives: {
        type: Array,
        label: 'Objectives',
        optional: false
    },
    'Objectives.$': {
        type: Object,
        label: 'Objective'
    },
    'Objectives.$.Audience': {
        type: [AudienceSchema],
        minCount: 1
    },
    /*'Objectives.$.Audience': {
        type: String,
        label: 'Audience',
        optional: false,
        allowedValues: [
            'Students',
            'Families',
            'Certificated staff',
            'Classified staff',
            'School board members',
            'Local businesses',
            'Media representatives',
            'Area voters',
            'District leaders',
            'District retirees',
            'District alumni',
            'Other'
        ]
    },*/
    'Objectives.$.Action': {
        type: String,
        label: 'Action',
        optional: false,
        allowedValues: [
            'Increase',
            'Decrease',
            'Baseline',
            'Record effort'
        ]
    },
    'Objectives.$.Target': {
        type: String,
        label: 'Target',
        optional: false,
        allowedValues: [
            'Behavior',
            'Attitude',
            'Action',
            'Knowledge'
        ]
    },
    'Objectives.$.Quantity': {
        type: Number,
        label: 'Quantity',
        optional: true
    },
    'Objectives.$.EvaluationMethod': {
        type: String,
        label: 'Evaluation Method',
        optional: false
    },
    'Objectives.$.Tactics': {
        type: Array,
        label: 'Tactics'
     },
    'Objectives.$.Tactics.$': {
        type: Object,
        label: 'Tactic'
    },
    'Objectives.$.Tactics.$.Tactic': {
        type: [TacticSchema],
        label: 'Tactic',
        optional: false,
        minCount: 1
    },
    /*'Objectives.$.Tactics.$.Tactic': {
        type: String,
        label: 'Tactic',
        optional: false,
        allowedValues: [
            'Emails',
            'Phone calls',
            'Text messages',
            'Press release',
            'Mailing',
            'Student take-home',
            'Other'
        ]
    },*/
    'Objectives.$.Tactics.$.TacticOther': {
        type: String,
        label: 'Tactic Other',
        optional: true
    },
    'Objectives.$.Tactics.$.AssignedTo': {
        type: String,
        label: 'Assigned To',
        optional: true
    },
    'Objectives.$.Tactics.$.Budget': {
        type: Number,
        label: 'Budget',
        optional: true
    },
    'Objectives.$.Tactics.$.Deadline': {
        type: Date,
        label: 'Deadline',
        optional: true
    },
    'Objectives.$.Tactics.$.Tool': {
        type: String,
        label: 'Tool',
        optional: true,
        allowedValues: [
            'MailChimp',
            'Robo dialer',
            'Printed material'
        ]
    },
    'Objectives.$.Tactics.$.EvaluationMethod': {
        type: String,
        label: 'Evaluation Method',
        optional: false
    }
});
Campaigns.attachSchema(CampaignSchema);