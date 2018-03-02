$(document).ready(function(){

var endDate = new Date("2018-03-01T23:59:59-08:00")
var now = new Date();
if (endDate > now) {
    var cd = new Countdown({
        cont: document.querySelector('#countdown-timer'),
        endDate: endDate.getTime(),
        outputTranslation: {
            year: 'Years',
            week: 'Weeks',
            day: 'Days',
            hour: 'Hours',
            minute: 'Minutes',
            second: 'Seconds',
        },
        endCallback: null,
        outputFormat: 'day|hour|minute|second',
    });
    cd.start();

    // close floating container
    $(document).on('click', '.floating-btn-container .modal-close-btn', function() {
      $('.floating-btn-container').fadeOut('fast');
    })

    $(document).on('click', '.w-dropdown', function() {
      $(this).find('.w-dropdown-list').toggle('fast');
    })
} else {
    $('.timer-title').text('Token sale in progress');
}
});
