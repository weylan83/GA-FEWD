$(document).ready(function(){	
	/*********** PUT THINGS HERE ****************/
	
	/* 1. STRING PRACTICE - RETURN 5TH */
	$('#return5th_submit').click(function(){
		var input = ($('#return5th_input').val());
		var char_return = input.charAt(4);
		$('#return5th_display').html(char_return);
	});

	/* 2. STRING PRACTICE - RETURN 2ND TO LAST CHAR */
	$('#returnLast_submit').click(function(){
		var input = ($('#returnLast_input').val());
		var char_return = input.charAt(input.length - 2);
		$('#returnLast_display').html(char_return);
	});


	/* 3. VARIABLES - OUTPUT HELLO WORLD */
	var temp = ('Hello World')
	$('#helloworld_submit').click(function(){
		$('#helloworld_display').html(temp);
	});

	/* 4. VARIABLES - NAME AND GREET */
	$('#greet1_submit').click(function(){
		var name = ($('#greet1_input').val());
		$('#greet1_display').html('Hello ' + name + ', welcome to the website!');
	});

	/* 5. CONDITIONALS - ONLY IF ALICE, BOB, MY NAME */
	$('#greet2_submit').click(function(){
		var name = ($('#greet2_input').val());
		if (name == 'Alice') {
			$('#greet2_display').html('Hello ' + name + ', welcome to the website!');
		} else if (name == 'Bob') {
			$('#greet2_display').html('Hello ' + name + ', welcome to the website!');
		} else if (name == 'Weylan') {
			$('#greet2_display').html('Hello ' + name + ', welcome to the website!');
		} else {
			$('#greet2_display').html('Wrong Bitch!');
		}
 	});

 	/* 6. CONDITIONALS - 2 INTEGERS AND DISPLAY LARGER*/
 	$('#integerMax_submit').click(function(){
 		var input1 = ($('#integerMax_input1').val());
 		var input2 = ($('#integerMax_input2').val());
 		if (input1 > input2) {
 			$('#integerMax_display').html(input1);
 		} else {
 			$('#integerMax_display').html(input2);
 		}
 	});

 	/* 7. LOOPS - FACTORIAL OF A NUMBER */
	$('#factoral_submit').click(function(){
		var n = Number($('#factoral_input').val());
		var result = 1;
		for (var i = 1; i <= n; i++) {
			result = result * i;
		}
		$('#factoral_display').html(result);
	});

	/* 8. LOOPS - CONSTRUCT PATTERN */
	$('#star_submit').click(function(){
		var stars = '';
		for (var i = 0; i < 5; i++)
		{
		  for (var n = 0; n < i + 1; n++)
		  {
		    stars += '*';
		  }
		  stars += '<br>';
		}
		$('#star_display').html(stars);
	});

	/* 9. LOOPS - FOOBAR - NOT DONE
	$('#foobar_submit').click(function(){
		for (var i = 1; i <= 50; i++) {
			if (i % 3 && i % 5) {
				document.write(i);	
			} else if (i % == 0) {
					document.write('foo')
				}
			else if (i % 5 == 0) {
					document.write('bar')
				}
			}
			document.write('<br>')
		}

	}); */

	
	/*** STOP PUTTING THINGS HERE *****/	
});	
