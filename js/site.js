$(document).ready(function(){

var cd = new Countdown({
    cont: document.querySelector('#countdown-timer'),
    endDate: {
        year: 2018,
        month: 3,
        day: 3,
        hour: 12,
        minute: 0,
        second: 0,
    },
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
});
