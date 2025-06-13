
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
				if(val == 'warm') {
					document.getElementById('warm').style.display = '';
					document.getElementById('hot-exhaust').style.display = 'none';
					document.getElementById('cold').style.display = 'none';
					document.getElementById('chemicalpad-steam').style.display = 'none';
					document.getElementById('pad-dry-steam').style.display = 'none';
					document.getElementById('dry-thermofix').style.display = 'none';
					//document.getElementById('econtrol').style.display = 'none';
					document.getElementById('printing').style.display = 'none';
					//document.getElementById('padstream').style.display = 'none';
					//document.getElementById('cold-exhaust-dyeing-product').style.display = 'none';
					
					$("#hot-exhaust input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#chemicalpad-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#pad-dry-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry-thermofix input[type=radio]").each(function(){
							this.checked = false; 
					});
					/*$("#econtrol input[type=radio]").each(function(){
							this.checked = false; 
					});*/
					$("#printing input[type=radio]").each(function(){
							this.checked = false; 
					});
					/*$("#padstream input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold-exhaust-dyeing-product input[type=radio]").each(function(){
							this.checked = false; 
					});*/
				}
				
				if(val == 'cold') {
					document.getElementById('warm').style.display = 'none';
					document.getElementById('hot-exhaust').style.display = 'none';
					document.getElementById('cold').style.display = '';
					document.getElementById('chemicalpad-steam').style.display = 'none';
					document.getElementById('pad-dry-steam').style.display = 'none';
					document.getElementById('dry-thermofix').style.display = 'none';
					//document.getElementById('econtrol').style.display = 'none';
					document.getElementById('printing').style.display = 'none';
					//document.getElementById('padstream').style.display = 'none';
					//document.getElementById('cold-exhaust-dyeing-product').style.display = 'none';
					
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#hot-exhaust input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#chemicalpad-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#pad-dry-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry-thermofix input[type=radio]").each(function(){
							this.checked = false; 
					});
					/*$("#econtrol input[type=radio]").each(function(){
							this.checked = false; 
					});*/
					$("#printing input[type=radio]").each(function(){
							this.checked = false; 
					});
					/*$("#padstream input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold-exhaust-dyeing-product input[type=radio]").each(function(){
							this.checked = false; 
					});*/
				}
				
				if(val == 'chemicalpad-steam') {
					document.getElementById('warm').style.display = 'none';
					document.getElementById('hot-exhaust').style.display = 'none';
					document.getElementById('cold').style.display = 'none';
					document.getElementById('chemicalpad-steam').style.display = '';
					document.getElementById('pad-dry-steam').style.display = 'none';
					document.getElementById('dry-thermofix').style.display = 'none';
					//document.getElementById('econtrol').style.display = 'none';
					document.getElementById('printing').style.display = 'none';
					//document.getElementById('padstream').style.display = 'none';
					//document.getElementById('cold-exhaust-dyeing-product').style.display = 'none';
					
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#hot-exhaust input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#pad-dry-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry-thermofix input[type=radio]").each(function(){
							this.checked = false; 
					});
					/*$("#econtrol input[type=radio]").each(function(){
							this.checked = false; 
					});*/
					$("#printing input[type=radio]").each(function(){
							this.checked = false; 
					});
					/*$("#padstream input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold-exhaust-dyeing-product input[type=radio]").each(function(){
							this.checked = false; 
					});*/
				}
				if(val == 'pad-dry-steam') {
					document.getElementById('cold').style.display = 'none';
					document.getElementById('warm').style.display = 'none';
					document.getElementById('chemicalpad-steam').style.display = 'none';
					document.getElementById('pad-dry-steam').style.display = '';
					document.getElementById('dry-thermofix').style.display = 'none';
					document.getElementById('econtrol').style.display = 'none';
					document.getElementById('printing').style.display = 'none';
					document.getElementById('hot-exhaust').style.display = 'none';
					document.getElementById('padstream').style.display = 'none';
					document.getElementById('cold-exhaust-dyeing-product').style.display = 'none';
					
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#chemicalpad-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#dry-thermofix input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#econtrol input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#printing input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#hot-exhaust input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#padstream input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold-exhaust-dyeing-product input[type=radio]").each(function(){
							this.checked = false; 
					});
				}
				if(val == 'dry-thermofix') {
					document.getElementById('cold').style.display = 'none';
					document.getElementById('warm').style.display = 'none';
					document.getElementById('chemicalpad-steam').style.display = 'none';
					document.getElementById('pad-dry-steam').style.display = 'none';
					document.getElementById('dry-thermofix').style.display = '';
					document.getElementById('econtrol').style.display = 'none';
					document.getElementById('printing').style.display = 'none';
					document.getElementById('hot-exhaust').style.display = 'none';
					document.getElementById('padstream').style.display = 'none';
					document.getElementById('cold-exhaust-dyeing-product').style.display = 'none';
					
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#pad-dry-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#econtrol input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#printing input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#hot-exhaust input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#padstream input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold-exhaust-dyeing-product input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#chemicalpad-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
				}
				if(val == 'econtrol') {
					document.getElementById('cold').style.display = 'none';
					document.getElementById('warm').style.display = 'none';
					document.getElementById('chemicalpad-steam').style.display = 'none';
					document.getElementById('pad-dry-steam').style.display = 'none';
					document.getElementById('dry-thermofix').style.display = 'none';
					document.getElementById('econtrol').style.display = '';
					document.getElementById('printing').style.display = 'none';
					document.getElementById('hot-exhaust').style.display = 'none';
					document.getElementById('padstream').style.display = 'none';
					document.getElementById('cold-exhaust-dyeing-product').style.display = 'none';
					
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#pad-dry-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry-thermofix input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#printing input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#hot-exhaust input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#padstream input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold-exhaust-dyeing-product input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#chemicalpad-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
				}
				if(val == 'printing-method') {
					document.getElementById('cold').style.display = 'none';
					document.getElementById('warm').style.display = 'none';
					document.getElementById('chemicalpad-steam').style.display = 'none';
					document.getElementById('pad-dry-steam').style.display = 'none';
					document.getElementById('dry-thermofix').style.display = 'none';
					document.getElementById('econtrol').style.display = 'none';
					document.getElementById('printing').style.display = '';
					document.getElementById('hot-exhaust').style.display = 'none';
					document.getElementById('padstream').style.display = 'none';
					document.getElementById('cold-exhaust-dyeing-product').style.display = 'none';
					
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#pad-dry-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry-thermofix input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#econtrol input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#hot-exhaust input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#padstream input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold-exhaust-dyeing-product input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#chemicalpad-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
				}
				if(val == 'hot-exhaust-dyeing') {
					document.getElementById('cold').style.display = 'none';
					document.getElementById('warm').style.display = 'none';
					document.getElementById('chemicalpad-steam').style.display = 'none';
					document.getElementById('pad-dry-steam').style.display = 'none';
					document.getElementById('dry-thermofix').style.display = 'none';
					document.getElementById('econtrol').style.display = 'none';
					document.getElementById('printing').style.display = 'none';
					document.getElementById('hot-exhaust').style.display = '';
					document.getElementById('padstream').style.display = 'none';
					document.getElementById('cold-exhaust-dyeing-product').style.display = 'none';
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#pad-dry-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry-thermofix input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#econtrol input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#printing input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#padstream input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold-exhaust-dyeing-product input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#chemicalpad-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
				}
				if(val == 'cold-exhaust-dyeing') {
					document.getElementById('cold').style.display = 'none';
					document.getElementById('warm').style.display = 'none';
					document.getElementById('chemicalpad-steam').style.display = 'none';
					document.getElementById('pad-dry-steam').style.display = 'none';
					document.getElementById('dry-thermofix').style.display = 'none';
					document.getElementById('econtrol').style.display = 'none';
					document.getElementById('printing').style.display = 'none';
					document.getElementById('hot-exhaust').style.display = 'none';
					document.getElementById('padstream').style.display = 'none';
					document.getElementById('cold-exhaust-dyeing-product').style.display = '';
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#pad-dry-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry-thermofix input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#econtrol input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#printing input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#padstream input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#chemicalpad-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
				}
				if(val == 'pad-steam') {
					document.getElementById('cold').style.display = 'none';
					document.getElementById('warm').style.display = 'none';
					document.getElementById('chemicalpad-steam').style.display = 'none';
					document.getElementById('pad-dry-steam').style.display = 'none';
					document.getElementById('dry-thermofix').style.display = 'none';
					document.getElementById('econtrol').style.display = 'none';
					document.getElementById('printing').style.display = 'none';
					document.getElementById('hot-exhaust').style.display = 'none';
					document.getElementById('padstream').style.display = '';
					document.getElementById('cold-exhaust-dyeing-product').style.display = 'none';
					$("#warm input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold input[type=radio]").each(function(){
							this.checked = false; 
					});
					
					$("#pad-dry-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#dry-thermofix input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#econtrol input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#printing input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#hot-exhaust input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#cold-exhaust-dyeing-product input[type=radio]").each(function(){
							this.checked = false; 
					});
					$("#chemicalpad-steam input[type=radio]").each(function(){
							this.checked = false; 
					});
					
				}
				if(document.getElementById('default-step3').style.display == 'none') {
					document.getElementById('default-step3').style.display = '';
					document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
					document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
					document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
					document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
					document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
					document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
					document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
					document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
					document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
					document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
					document.getElementById('hot-exhaust-dyeing-jakofix-he').style.display = 'none';
					document.getElementById('hot-exhaust-dyeing-jakofix-supra-hr').style.display = 'none';
					document.getElementById('cold-pad-batch-dyeing-jakazol-hq').style.display = 'none';
					document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
					document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
					document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
					document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
					document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
					document.getElementById('pad-dry-chemical-pad-steam-jakazol-hq').style.display = 'none';
					document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
					document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
					document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
					document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
					document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
					document.getElementById('pad-dry-steam-jakazol-hq').style.display = 'none';
					document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
					document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
					document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
					document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
					document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
					document.getElementById('pad-dry-thermofix-jakazol-hq').style.display = 'none';
					document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = 'none';
					document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = 'none';
					document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = 'none';
					document.getElementById('pad-dry-thermofix-jakazol-sf').style.display = 'none';
					//document.getElementById('econtrol-method-jakofix-c').style.display = 'none';
					//document.getElementById('econtrol-method-jakazol-ds').style.display = 'none';
					//document.getElementById('econtrol-method-jakazol-hlf').style.display = 'none';
					//document.getElementById('econtrol-method-jakazol-vs').style.display = 'none';
					//document.getElementById('econtrol-method-jakazol-ce').style.display = 'none';
					//document.getElementById('econtrol-method-jakazol-ld').style.display = 'none';
					//document.getElementById('econtrol-method-jakazol-ld').style.display = 'none';
					//document.getElementById('econtrol-method-jakofix-p').style.display = 'none';
					document.getElementById('printing-method-jakofix-p').style.display = 'none';
					//document.getElementById('printing-method-jakazol-commodity-vs').style.display = 'none';
					//document.getElementById('hot-exhaust-dyeing-jakofix-supra-hr').style.display = 'none';
					//document.getElementById('hot-exhaust-dyeing-jakofix-he').style.display = 'none';
					//document.getElementById('pad-steam-jakazol-vs').style.display = 'none';
					//document.getElementById('pad-steam-jakofix-me').style.display = 'none';
					//document.getElementById('cold-exhaust-dyeing-jakofix-c-process').style.display = 'none';
					$("#step_2")
						.animate({
							paddingBottom: "15px"
						})
						.css({
							"background-image": ""
						});

					$("#step_3").css({
									opacity: 0.3
								});

				}
				
			};
			
		});
		
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
			
			$("#step_2").css({
				opacity: 1.0
			});
			$("#step_2 legend").css({
				opacity: 1.0 // For dumb Internet Explorer
			});
		};
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
			if(val == 'warm-jakazol-sq')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
			}
			if(val == 'warm-jakazol-hq')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
			}
			if(val == 'warm-jakazol-ld')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
			}
			
			if(val == 'warm-jakazol-ce')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
			}
			if(val == 'warm-jakazol-ds')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
			}
			if(val == 'warm-jakazol-vs')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
			}
			if(val == 'warm-jakofix-me')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
			}
			if(val == 'warm-jakazol-hlf')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
			}
			if(val == 'warm-jakazol-wlt')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = '';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = 'none';
			}
			
			if(val == 'warm-jakazol-sf')
			{
				document.getElementById('warm-exhaust-dyeing-jakazol-sq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakofix-me').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-hlf').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-wlt').style.display = 'none';
				document.getElementById('warm-exhaust-dyeing-jakazol-sf').style.display = '';
			}
			
			
			if(val == 'hot-exhaust-jakofix-he')
			{
				document.getElementById('hot-exhaust-dyeing-jakofix-he').style.display = '';
				document.getElementById('hot-exhaust-dyeing-jakofix-supra-hr').style.display = 'none';
			}
			if(val == 'hot-exhaust-jakofix-supra-hr')
			{
				document.getElementById('hot-exhaust-dyeing-jakofix-he').style.display = 'none';
				document.getElementById('hot-exhaust-dyeing-jakofix-supra-hr').style.display = '';
			}
			
			if(val == 'cold-jakazol-hq')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-hq').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'cold-jakazol-ld')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
			}
			if(val == 'cold-jakazol-ce')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
			}
			if(val == 'cold-jakazol-ds')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'cold-jakazol-vs')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = '';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = 'none';
			}
			if(val == 'cold-jakazol-hlf')
			{
				document.getElementById('cold-pad-batch-dyeing-jakazol-hq').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ld').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ce').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-ds').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-vs').style.display = 'none';
				document.getElementById('cold-pad-batch-dyeing-jakazol-hlf').style.display = '';
				
			}
			if(val == 'chemicalpad-steam-jakazol-hq')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hq').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
			}
			if(val == 'chemicalpad-steam-jakazol-ld')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
			}
			if(val == 'chemicalpad-steam-jakazol-ce')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
			}
			if(val == 'chemicalpad-steam-jakazol-ds')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
			}
			if(val == 'chemicalpad-steam-jakazol-vs')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = '';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = 'none';
			}
			if(val == 'chemicalpad-steam-jakazol-hlf')
			{
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-chemical-pad-steam-jakazol-hlf').style.display = '';
			}
			if(val == 'pad-dry-steam-jakazol-hq')
			{
				document.getElementById('pad-dry-steam-jakazol-hq').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-ld')
			{
				document.getElementById('pad-dry-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-ce')
			{
				document.getElementById('pad-dry-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-ds')
			{
				document.getElementById('pad-dry-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-vs')
			{
				document.getElementById('pad-dry-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = '';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = 'none';
				
			}
			if(val == 'pad-dry-steam-jakazol-hlf')
			{
				document.getElementById('pad-dry-steam-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ld').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-vs').style.display = 'none';
				document.getElementById('pad-dry-steam-jakazol-hlf').style.display = '';
			}
			
			if(val == 'dry-thermofix-jakazol-hq')
			{
				document.getElementById('pad-dry-thermofix-jakazol-hq').style.display = '';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-sf').style.display = 'none';
			}
			
			if(val == 'dry-thermofix-jakazol-ce')
			{
				document.getElementById('pad-dry-thermofix-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = '';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-sf').style.display = 'none';
				
				
			}
			if(val == 'dry-thermofix-jakazol-ds')
			{
				document.getElementById('pad-dry-thermofix-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = '';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-sf').style.display = 'none';
				
				
			}
			if(val == 'dry-thermofix-jakazol-hlf')
			{
				document.getElementById('pad-dry-thermofix-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = '';
				document.getElementById('pad-dry-thermofix-jakazol-sf').style.display = 'none';
				
				
			}
			if(val == 'dry-thermofix-jakazol-sf')
			{
				document.getElementById('pad-dry-thermofix-jakazol-hq').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ce').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-ds').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-hlf').style.display = 'none';
				document.getElementById('pad-dry-thermofix-jakazol-sf').style.display = '';
				
				
			}
			
			/*if(val == 'econtrol-jakofix-p')
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
				
			}*/
			
			if(val == 'printing-jakofix-p') {
				document.getElementById('printing-method-jakofix-p').style.display = '';
				//document.getElementById('printing-method-jakazol-commodity-vs').style.display = 'none';
			}
			/*if(val == 'printing-jakazol–commodity-vs') {
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
			}*/
			
			
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
	document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
	document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
			document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		//document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		//document.getElementById('pad-stream').style.display = 'none';
		//document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	
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
//		document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = '';
		//document.getElementById('pad-stream').style.display = 'none';
		//document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';
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
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = '';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		//document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		//document.getElementById('pad-stream').style.display = 'none';
		//document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';
		

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
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = '';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		//document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		//document.getElementById('pad-stream').style.display = 'none';
		//document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

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
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = '';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		//document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		//document.getElementById('pad-stream').style.display = 'none';
		//document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	});
	stepTwoTest(val);
	});
	
	/*$("input[name=padstream-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		//document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		//document.getElementById('pad-stream').style.display = '';
		//document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';
		
	});
	stepTwoTest(val);
	});*/
	
	$("input[name=dry-thermofix-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = '';
		//document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = 'none';
		//document.getElementById('pad-stream').style.display = 'none';
		//document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	});
	stepTwoTest(val);
	});
	
	/*$("input[name=econtrol-product]").click(function(){	
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
	});*/
	
	
	$("input[name=printing-product]").click(function(){	
var val = '';
	$("#step_2 input[type=radio]").each(function(){
			if (this.checked == true ) {
				$.stepTwoComplete_one = "complete"; 
				val = $(this).val();
			}
		document.getElementById('product-warm-exhaust-dyeing').style.display = 'none';
		document.getElementById('hot-exhaust-dyeing-product').style.display = 'none';
		document.getElementById('product-cold-pad-batch-dyeing').style.display = 'none';
		document.getElementById('product-pad-dry-chemical-pad-stream').style.display = 'none';
		document.getElementById('pad-dry-stream').style.display = 'none';
		document.getElementById('products-pad-dry-thermofix').style.display = 'none';
		//document.getElementById('econtrol-product-list').style.display = 'none';
		document.getElementById('printing-method-product').style.display = '';
		//document.getElementById('pad-stream').style.display = 'none';
		//document.getElementById('cold-exhaust-dyeing-process').style.display = 'none';

	});
	stepTwoTest(val);
	});
	
	
	
	/*$("input[name=cold-exhaust-product]").click(function(){	
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
	});*/
});