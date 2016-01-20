window.onload = function main() {
  var timezones = document.querySelectorAll('.timezone');

  var getCalendarOffset = function getCalendarOffset(timezone) {
    var localTime = moment.tz(moment().format('YYYY-MM-DD, HH:mm:ss'), 'America/Los_Angeles');
    
    return moment.tz(timezone).calendar(localTime, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'YYYY-MM-DD'
    });
  }

  var updateTimes = function updateTimes() {
    for (var timezone of timezones) {
      timezone.getElementsByClassName('timezone__time')[0].textContent = moment.tz(timezone.dataset.timezone).format('HH:mm:ss z');
      timezone.getElementsByClassName('timezone__offset')[0].textContent = getCalendarOffset(timezone.dataset.timezone);
    }
  }

  setInterval(updateTimes, 500);
};