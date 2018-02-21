$(document).ready(function(){

var countdown_date  = new Date('2018-03-03 12:00:00');
var cd = new Countdown({
    cont: document.querySelector('#countdown-timer'),
    endDate: countdown_date.getTime(),
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
