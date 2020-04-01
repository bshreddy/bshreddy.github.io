var MDCButtons = document.querySelectorAll('.mdc-button');

MDCButtons.forEach(function(element, index) {
  mdc.ripple.MDCRipple.attachTo(element);
})