window.onload = function main() {
  var timezones = document.querySelectorAll('.timezone');
  var themeSelector = document.querySelector('#theme');

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
    for (var i = 0, length = timezones.length; i < length; i++) {
      var timezone = timezones[i];

      timezone.getElementsByClassName('timezone__time')[0].textContent = moment.tz(timezone.dataset.timezone).format('HH:mm:ss z');
      timezone.getElementsByClassName('timezone__offset')[0].textContent = getCalendarOffset(timezone.dataset.timezone);
    }
  }

  setInterval(updateTimes, 500);

  themeSelector.onchange = function switchTheme() {
    var body = document.querySelector('body');

    body.dataset.theme = this.value;
  }
};
