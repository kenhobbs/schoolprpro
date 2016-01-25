Template.registerHelper('formatDOB', function(date){
    return moment(date).format('M/D/YYYY');
});