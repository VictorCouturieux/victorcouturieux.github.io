jQuery(document).ready(function($) {

	var my_nav = $('.navbar-sticky'); 
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = my_nav.offset().top;

	// JavaScript to show and hide the modal and update the modal image
	var modal = document.getElementById('modal');
	var modalImage = document.getElementById('modal-image');
	var closeModalButton = document.getElementById('close');

	// Function to show the modal
	function openModal(imageSrc) {
	  modalImage.src = imageSrc;
	  modal.style.display = 'block';
	}

	// Function to close the modal
	function closeModal() {
	  modal.style.display = 'none';
	}

	// Add click event listeners to each clickable image
	var clickableImages = document.getElementsByClassName('clickable-image');
	for (var i = 0; i < clickableImages.length; i++) {
	  clickableImages[i].addEventListener('click', function() {
	    var imageSrc = this.getAttribute('data-image');
	    openModal(imageSrc);
	    my_nav.removeClass( 'navbar' );
	  });
	}

	// Add click event listener to close modal button
	closeModalButton.addEventListener('click', function() {
	  closeModal();
	  my_nav.addClass( 'navbar' );
	});

	// Close the modal when the user clicks outside of it
	window.addEventListener('click', function(event) {
	  if (event.target == modal) {
	    closeModal();
	    my_nav.addClass( 'navbar' );
	  }
	});

/*
	var my_nav = $('.navbar-sticky'); 
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = my_nav.offset().top;
	
	// img resizable
	// JavaScript to open and close the modal when you click the specific image
	clickableImages[i].addEventListener('click', function() {
		//document.getElementById('modal').src = this.getAttribute('data-image');
		document.getElementById('modal').style.display = 'block';
		my_nav.removeClass( 'navbar' );
	});

	document.getElementById('close').addEventListener('click', function() {
	  document.getElementById('modal').style.display = 'none';
	  my_nav.addClass( 'navbar' );
	});

	// Close the modal when the user clicks outside of it
	window.addEventListener('click', function(event) {
	  var modal = document.getElementById('modal');
	  if (event.target == modal) {
	    modal.style.display = 'none';
	    my_nav.addClass( 'navbar' );
	  }
	});

*/
	/////////////
	/*
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			my_nav.addClass( 'stick' );
		} else {
			my_nav.removeClass( 'stick' );
		}   
	};

	var initio_parallax_animation = function() { 
		$('.parallax').each( function(i, obj) {
			var speed = $(this).attr('parallax-speed');
			if( speed ) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css( 'background-position', 'center ' + background_pos );
			}
		});
	}

	// run our function on load
	//sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
		 initio_parallax_animation();
	});*/




});