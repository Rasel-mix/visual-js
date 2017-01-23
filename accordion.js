(function($, window) {
  $.fn.accordion = function() {
    return this.each(function() {

      var $this             = $(this),
          accordionsData    = $this.find('>' +  '.' + accordionsOptions.dataClass),
          accordionsItems   = $this.find('>' +  '.' + accordionsOptions.itemClass);

      accordionsItems.on('click.accordion', onLinkClick);

      function onLinkClick(event) {
        event.preventDefault();
        var checkItemsElement = $(this).next(); // убираем анимацию для каждого клика

        if ($(this).hasClass(accordionsOptions.openClass)) {
           $(this).removeClass(accordionsOptions.openClass);
           checkItemsElement.stop().slideUp(accordionsOptions.speedUp);
        } else {
          accordionsData.slideUp(accordionsOptions.speedUp);
          accordionsItems.removeClass(accordionsOptions.openClass);
          $(this).addClass(accordionsOptions.openClass);
          checkItemsElement.stop().slideDown(accordionsOptions.speedDown);
        }
      }
    });
  }
})(jQuery, window);

$(function() {
  $('.accordion').accordion(
    accordionsOptions = {
      itemClass: 'accordion-item',
      dataClass: 'accordion-data',
      openClass: 'open',
      speedUp: 500,
      speedDown: 500
    }
  );
});
