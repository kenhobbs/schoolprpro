Plans = new Meteor.Collection('Plans');
PlanSchema = new SimpleSchema({
    Topic: {
        type: String,
        label: 'Topic',
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
    },
    TopicOther: {
        type: String,
        label: 'Topic Other',
        optional: function () {
            return this.Topic !== 'Other'
        }
    },
    ChallengeOpportunity: {
        type: String,
        label: 'Challenge/Opportunity',
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
    },
    ChallengeOpportunityOther: {
        type: String,
        label: 'Challenge/Opportunity Other',
        optional: function () {
            return this.Opportunity !== 'Other'
        }
    },
    ResearchMethod: {
        type: String,
        label: 'Research Method(s)',
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
    },
    ResearchMethodOther: {
        type: String,
        label: 'Research Method Other',
        optional: function () {
            return this.ResearchMethod !== 'Other'
        }
    },
    SituationAnalysis: {
        type: String,
        label: 'Situation Analysis',
        optional: true
    }
    /*
    Campaigns: {
        type: Array,
        label: 'Campaigns',
        optional: false
    },
    'Campaigns.$': {
        type: Object
    },
    'Campaigns.$.Audience': {
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
    },
    'Campaigns.$.Objective': {
        type: String,
        label: 'Objective',
        optional: false
    },
    'Campaigns.$.Quantity': {
        type: Number,
        label: 'Quantity',
        optional: true
    },
    'Campaigns.$.EvaluationMethod': {
        type: String,
        label: 'Evaluation Method',
        optional: false
    },
    'Campaigns.$.Assignee': {
        type: String,
        label: 'Assigned To',
        optional: true
    },
    'Campaigns.$.Deadline': {
        type: Date,
        label: 'Deadline',
        optional: true
    },
    'Campaigns.$.Budget': {
        type: Number,
        label: 'Budget',
        optional: true
    },
    'Campaigns.$.Tools': {
        type: Array
    },
    'Campaigns.$.Tools.$': {
        type: Object
    },
    'Campaigns.$.Tools.$.Tool': {
        type: String,
        label: 'Tool',
        optional: true,
        allowedValues: [
            'Email',
            'Text Message',
            'Phone Call',
            'Letters sent home',
            'Mailing',
            'Press Release',
            'Website post',
            'Other'
        ]
    },
    'Campaigns.$.Tools.$.Cost': {
        type: Number,
        label: 'Cost',
        optional: true
    }
    */
});
Plans.attachSchema(PlanSchema);