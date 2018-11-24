Skip to content
Features
Business
Explore
Marketplace
Pricing

Search

Sign in or Sign up
 Watch 254  Star 6,540  Fork 1,365 davatron5000/FitText.js
 Code  Issues 7  Pull requests 21  Projects 0  Insights
Dismiss
Join GitHub today
GitHub is home to over 28 million developers working together to host and review code, manage projects, and build software together.

Sign up
Branch: master Find file Copy path FitText.js/jquery.fittext.js
c5dc80f  on Jan 29, 2014
@neilmonroe neilmonroe Update jquery.fittext.js
5 contributors @davatron5000 @Boldewyn @tsvensen @neilmonroe @darcyclarke
RawBlameHistory     
44 lines (32 sloc)  1.05 KB
/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
Press h to open a hovercard with more details.