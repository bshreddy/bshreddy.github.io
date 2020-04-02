var MDCButtons = document.querySelectorAll('.mdc-button');

MDCButtons.forEach(function(element, index) {
  mdc.ripple.MDCRipple.attachTo(element);
})

var MDCIconButtons = document.querySelectorAll('.mdc-icon-button');

MDCIconButtons.forEach(function(element, index) {
  new mdc.ripple.MDCRipple(document.querySelector('.mdc-icon-button')).unbounded = true;
})