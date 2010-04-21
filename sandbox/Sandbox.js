/*
 * Event Filter [VERSION] - Test Suite
 * [DATE]
 * Corey Hart http://www.codenothing.com
 */ 
var Sandbox = {
	// Number of test elements that should be added for speed comparison
	elems: 0,

	/**
	 * To add another entry of testing, just follow the format below
	 *
	 * [ 'string to test within the :Event() filter', [array of elements that should match] ]
	 */ 
	env: [
		[ 'click', [0, 2, 4, 6, 8] ],
		[ 'focus', [1, 3, 5, 7] ],
		[ 'myevent', [2, 3, 4, 5, 6] ],
		[ 'myevent2', [8] ],
		[ '.namespace1', [3, 4, 6] ],
		[ '.namespace2', [5, 6] ],
		[ 'myevent.namespace1', [3, 4, 6] ],
		[ 'myevent.namespace2', [5, 6] ],
		[ '.namespace1.namespace2', [6] ],
		[ 'myevent.namespace1.namespace2', [6] ],
		[ '!click', [1, 3, 5, 7] ],
		[ '!focus', [0, 2, 4, 6, 8] ],
		[ '!myevent', [0, 1, 7, 8] ],
		[ '!.namespace1', [0, 1, 2, 5, 7, 8] ],
		[ '!.namespace2', [0, 1, 2, 3, 4, 7, 8] ],


		// Last element Sanity Check
		[ 'Sanity Check', [] ]
	]
};
