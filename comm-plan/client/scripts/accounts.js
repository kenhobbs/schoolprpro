Accounts.ui.config({
    requestPermissions: {},
    requestOfflineToken: {},
    forceApprovalPrompt: {},
    forceEmailLowercase: true,
    forceUsernameLowercase: false,
    forcePasswordLowercase: false,
    extraSignupFields: [
        {
            fieldName: 'firstName',
            fieldLabel: 'First Name',
            inputType: 'text',
            visible: true,
            validate: function (value, errorFunction) {
                if (!value) {
                    errorFunction("First Name is required");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            fieldName: 'lastName',
            fieldLabel: 'Last Name',
            inputType: 'text',
            visible: true,
            validate: function (value, errorFunction) {
                if (!value) {
                    errorFunction("Last Name is required");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            fieldName: 'terms',
            fieldLabel: 'I accept the terms and conditions',
            inputType: 'checkbox',
            visible: true,
            validate: function (value, errorFunction) {
                if (value) {
                    return true;
                } else {
                    errorFunction('Accepting the terms and conditions is required');
                    return false;
                }
            }
        }
    ]
});