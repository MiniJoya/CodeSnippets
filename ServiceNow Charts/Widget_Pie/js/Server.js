(function() {
	/* populate the 'data' object */
	/* e.g., data.table = $sp.getValue('table'); */

	var count;
	var GA = new GlideAggregate('incident');
	GA.addQuery('state', 1);
	GA.addAggregate('COUNT');
	GA.query();
	count = 0;
	while (GA.next()) {
		count = GA.getAggregate('COUNT');
	}

	data.count = count;

	var count2;
	var GA2 = new GlideAggregate('incident');
	GA2.addQuery('state', 2);
	GA2.addAggregate('COUNT');
	GA2.query();
	count2 = 0;
	while (GA2.next()) {
		count2 = GA2.getAggregate('COUNT');
	}

	data.count2 = count2;

	var count3;
	var GA3 = new GlideAggregate('incident');
	GA3.addQuery('state', 3);
	GA3.addAggregate('COUNT');
	GA3.query();
	count3 = 0;
	while (GA3.next()) {
		count3 = GA3.getAggregate('COUNT');
	}

	data.count3 = count3;


})();