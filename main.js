window.onload = function main() {
  var documentBody = document.body;
  var header = document.querySelector('.header');
  var timezones = document.querySelectorAll('.timezone');
  var themeSelector = document.querySelector('#theme-selector');

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
  };

  var updateTimes = function updateTimes() {
    for (var i = 0, length = timezones.length; i < length; i++) {
      var timezone = timezones[i];

      timezone.getElementsByClassName('timezone__time')[0].textContent = moment.tz(timezone.dataset.timezone).format('HH:mm:ss z');
      timezone.getElementsByClassName('timezone__offset')[0].textContent = getCalendarOffset(timezone.dataset.timezone);
    }
  };

  var toggleHeaderShadow = function () {
    if (documentBody.scrollTop === 0) {
      header.classList.remove('scrolling');
    } else {
      header.classList.add('scrolling');
    }
  };

  setInterval(updateTimes, 500);

  themeSelector.onchange = function switchTheme() {
    var body = document.querySelector('body');

    body.dataset.theme = this.value;
  };

  document.onscroll = toggleHeaderShadow;
};
