// .ready() Specify a function to execute when the DOM is fully loaded.
$(document).ready(function() {
  // .one() Attach a handler to an event for the elements. The handler 
  // is executed at most once per element per event type.
  $('.button').one('click', () => console.log('Connection established'));
  // .on() Attach an event handler function for one or more events to 
  // the selected elements.
  $('.button').on('click', transferData);
  setTimeout(function() {
    // .off() Remove an event handler.
    $('.button').off('click');
  }, 10000);
  // .keypress() Bind an event handler to the “keypress”        
  // JavaScript event, or trigger that event on an element.
  $( ".transmitter" ).keypress(function(event) {
    if (event.which === 13) {
      event.preventDefault();
      transferData();
    }
  });
});

function transferData() {
  let $data = $('.transmitter').val();
  if (!$('.transmitter').val().length) return;
  $('.transmitter').val('');
  if ($('.receiver').val().length) {
    $('.receiver').val($('.receiver').val() + '\n' + $data);
  } else {
    $('.receiver').val($data);
  }
  // .focus() Bind an event handler to the “focus” JavaScript 
  // event, or trigger that event on an element.
  $('.transmitter').focus();
}
