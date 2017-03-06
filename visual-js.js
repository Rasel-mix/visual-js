(function($, window) {
  
  //accordion
  
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
  
  // tabs
  
//   $.fn.myTabs = function() {
//     return this.each(function() {
//       var $this       = $(this),
//         tabsLinks   = $this.find('.tabs-links li'),
//         tabsBlocks  = $this.find('.tabs-blocks .tabs-block'),
//         activeClass = 'active';

//       tabsLinks.on('click.myTabs', onLinkClick);

//       function onLinkClick(event) {
//         var target = $(event.target).closest('li'),
//           index  = target.index();

//         tabsLinks.removeClass(activeClass);
//         target.addClass(activeClass);

//         tabsBlocks
//           .removeClass(activeClass)
//           .eq(index)
//           .addClass(activeClass);
//       }

//     });
//   }

})(jQuery, window);
