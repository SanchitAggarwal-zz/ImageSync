$('.returnTopAction').live('click', function() {
   $('html, body').animate({scrollTop: '0'}, 700);
});
$('#gallery-page').live('pageshow', function () { 
		$myPhotoSwipe = $(".gallery a").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });});


		$('#send').live("click", function () {
		    var url = 'createmoment.php';
		    var error = 0;
		    var $contactpage = $(this).closest('.ui-page');
		    var $contactform = $(this).closest('.contact-form');
		    $('.required', $contactform).each(function (i) {
		        if ($(this).val() === '') {
		            error++;
		        }
		    });
		    // each
		    if (error > 0) {
		        alert('Please fill in all the mandatory fields. Mandatory fields are marked with an asterisk *.');
		    } else {
		        var firstname = $contactform.find('input[name="firstname"]').val();
		        var lastname = $contactform.find('input[name="lastname"]').val();
		        var startdate = new Date($contactform.find('input[name="MomentStartDate"]').val());
		        var stopdate = new Date($contactform.find('input[name="MomentStopDate"]').val());
		        var Momentname = $contactform.find('input[name="Momentname"]').val();
		        var imagePath = $contactform.find('input[name="imagePath"]').val();
		        imagePath = /#(.*?)$/.
                var Nofshare = $contactform.find('input[name="Nofshare"]').val();
		        if (stopdate < startdate) { alert('Moment stop date should be after the Moment start date'); }
		        else {
		            //submit the form
		            $.ajax({
		                type: "GET",
		                url: url,
		                data: {
		                    firstname: firstname,
		                    lastname: lastname,
		                    startdate: startdate,
		                    stopdate: stopdate,
		                    Momentname: Momentname,
		                    imagePath: imagePath,
		                    Nofshare: Nofshare
		                },
		                success: function (data) {
		                    if (data == 'success') {
		                        // show thank you
		                        alert('Thank you.  Your Moment has been created.  You can share your images.');
		                        $contactpage.find('.contact-thankyou').show();
		                        $contactpage.find('.contact-form').hide();
		                    } else {
		                        alert('Unable to create moment. Please try again.');
		                    }
		                    alert(data);
		                }
		            });
		            //$.ajax
		        }

		    }
		    return false;
		});
