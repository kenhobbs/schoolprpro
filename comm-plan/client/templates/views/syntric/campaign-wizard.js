Template.campaignWizard.rendered = function() {
    if ( ! $.fn.validate || ! $.fn.steps ) {
        console.log('campaignWizard not ready');
        return;
    }

    // FORM EXAMPLE
    var form = $("#campaignWizardForm");
    form.validate({
        errorPlacement: function errorPlacement(error, element) { element.before(error); },
        /*rules: {
            confirm: {
                equalTo: "#password"
            }
        }*/
    });
    form.children("div").steps({
        headerTag: "h4",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert("Submitted!");

            // Submit form
            $(this).submit();
        }
    });

    // VERTICAL
    // -----------------------------------

    $("#example-vertical").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical"
    });
}
