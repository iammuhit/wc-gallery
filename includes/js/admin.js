(function ($) {
	"use strict";

	var media = wp.media;

	// Wrap the render() function to append controls.
	media.view.Settings.Gallery = media.view.Settings.Gallery.extend({
		render: function() {
			var $el = this.$el;

			media.view.Settings.prototype.render.apply( this, arguments );

			// Append the layout template and update the settings.
			$el.append( media.template( 'wc-gallery-settings' ) );
			media.gallery.defaults.display = 'masonry'; // lil hack that lets media know there's a layout attribute.
			media.gallery.defaults.size = 'thumbnail'; // lil hack that lets media know there's a layout attribute.
			media.gallery.defaults.targetsize = 'large'; // lil hack that lets media know there's a layout attribute.
			media.gallery.defaults.captions = 'show'; // lil hack that lets media know there's a layout attribute.
			media.gallery.defaults.customlink = false; // lil hack that lets media know there's a layout attribute.
			media.gallery.defaults.bottomspace = 'default'; // lil hack that lets media know there's a layout attribute.
			media.gallery.defaults.hidecontrols = false; // lil hack that lets media know there's a layout attribute.
			media.gallery.defaults.class = ''; // lil hack that lets media know there's a layout attribute.
			this.update.apply( this, ['display'] );
			this.update.apply( this, ['size'] );
			this.update.apply( this, ['targetsize'] );
			this.update.apply( this, ['captions'] );
			this.update.apply( this, ['customlink'] );
			this.update.apply( this, ['bottomspace'] );
			this.update.apply( this, ['hidecontrols'] );
			this.update.apply( this, ['class'] );

			return this;
		}
	});
})(jQuery);
