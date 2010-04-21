/*
 * Event Filter [VERSION] - Test Suite
 * [DATE]
 * Corey Hart http://www.codenothing.com
 */ 
jQuery(function($){
	// Create events with empty functions attached for demo
	$('div.test-div:even').click(function(){});
	$('div.test-div:odd').focus(function(){});
	$('div.test-div:eq(2)').bind('myevent', function(){});
	$('div.test-div:eq(3)').bind('myevent.namespace1', function(){});
	$('div.test-div:eq(4)').bind('myevent.namespace1', function(){});
	$('div.test-div:eq(5)').bind('myevent.namespace2', function(){});
	$('div.test-div:eq(8)').bind('myevent2', function(){});

	// Small comparison function
	function check( arr ) {
		var i = -1, l = arr.length;

		for ( ; ++i < l; ) {
			if ( ! $('div.test-div').eq( arr[i] ).hasClass('focus') ) {
				return false;
			}
		}

		// Make sure the number of elements found match the number of suggested elements
		return $('div.test-div.focus').length === l;
	}

	$.each( testarr, function( i, parts ){
		var filter = parts[0], compare = parts[1], match = [], pass;

		// Run test by attaching classes to each element
		console.warn( $('div.test-div').removeClass('focus').filter(':Event(' + filter + ')').addClass('focus') );

		// Find comparrison
		pass = check( compare );

		// Build the matched array
		$('div.test-div').each(function( i, val ){
			if ( $(this).hasClass('focus') ) {
				match.push(i);
			}
		});

		// Display Results
		$('table').append([
			"<tr>",
			"<td>" + filter + "</td>",
			"<td>" + compare + "</td>",
			"<td>" + match + "</td>",
			"<td>" + ( pass ? "<b style='color:green;'>PASS<b>" : "<b style='color:red;'>FAIL</b>" ) + "</td>",
			"</tr>"
		].join(''));
	});
});
