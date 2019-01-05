jQuery(document).ready(function($) {

  // Accordion Toggle
  var iconOpen = 'icon-minus', iconClose = 'icon-plus';

  $(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function(e) {
    var $target = $(e.target)
    $target.siblings('.accordion-heading')
      .find('em').toggleClass(iconOpen + ' ' + iconClose);
    if (e.type == 'show')
      $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    if (e.type == 'hide')
      $(this).find('.accordion-toggle').not($target).removeClass('active');
  });

  // DM Top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('.dmtop').css({
        bottom: "25px"
      });
    } else {
      $('.dmtop').css({
        bottom: "-100px"
      });
    }
  });

  $('.dmtop').click(function() {
    $('html, body').animate({
      scrollTop: '0px'
    }, 800);
    return false;
  });

  // Menu
  $(".panel a").click(function(e) {
    e.preventDefault();
    var style = $(this).attr("class");
    $(".jetmenu").removeAttr("class").addClass("jetmenu").addClass(style);
  });
  $().jetmenu();

  // Facts
  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 50 is increment */

    $this.html(++current);
    if (current > $this.data('count')) {
      $this.html($this.data('count'));
    } else {
      setTimeout(function() {
        count($this)
      }, 50);
    }
  }

  $(".stat-count").each(function() {
    $(this).data('count', parseInt($(this).html(), 10));
    $(this).html('0');
    count($(this));
  });


  function getColumnNumber() {
    var winWidth = $(window).width(),
      columnNumber = 2;
  }

  function setColumns() {
    var winWidth = $(window).width(),
      columnNumber = getColumnNumber(),
      itemWidth = Math.floor(winWidth / columnNumber);

    $container.find('.market-item').each(function() {
      $(this).css({
        width: itemWidth + 'px'
      });
    });
  }


});
