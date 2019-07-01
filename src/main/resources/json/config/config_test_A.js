var configExtra = {
	testID: 'A',
	testType: 'INPH', //EITHER INPH OR GENERIC
	testtypes : {
		long : [ 'test0', 'test10', 'test1', 'test4', 'test5', 'test6', 'test2', 'test3', 'test9', 'test7', 'test8' ],
		short : []
	},
	test2 : {
		button_show_order : [ 0, 1, 2, 3, 4, 5 ],
		buttons_sequence : {
			1 : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25' ],
			2 : [ '6', '7', '8', '15', '16', '17', '9', '10', '11', '12', '1', '2', '3', '23', '24', '25', '4', '5', '13', '14', '18', '19', '20', '21', '22' ]
		},
	},
	test3 : {
		button_show_order : [ 0, 1, 2, 3, 4,  5 ],
		buttons_sequence : {
			1 : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25' ],
			2 : [ '6', '7', '8', '15', '16', '17', '9', '10', '11', '12', '1', '2', '3', '23', '24', '25', '4', '5', '13', '14', '18', '19', '20', '21', '22' ]
		},
	},
	test6 : {
		// Anders samma test x3 med ord i olika ordning
		words_to_use : [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
		word_sequence1 : [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
		word_sequence2 : [ '6', '3', '0', '4', '1', '2', '8', '5', '7', '9' ],
		word_sequence3 : [ '2', '3', '1', '5', '6', '7', '9', '8', '0', '4' ]
	},
	test8 : {
		words_to_use_as_trick_words : [ '10', '11', '12', '13', '14', '15', '16', '17', '18', '19' ]
	}
}
