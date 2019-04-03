// $("body").on("change", ".filter", function (e) {
// e.preventDefault();
//
// console.log("Hello, world!");
//
// const $this_filter = $(this);
//
// const state_type = $this_filter.val();
//
// console.log("State" + state_type);
//
// $(".state").removeClass("active");
//
// $("." + state_type).addClass("active");
//
// console.log("Hello, world!");
//
// });

//GET WHAT IS SELECTED:
$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	let person_template = _.template($("#person_template").html()), //outside to save processing and need to rebuild that variable each time. Could be inside the bind, but wastes processing.
		option_template = _.template($("#select_template").html());

	_.each(data, function (person) {
		$("#character").append(option_template({ state: person.state }));
	});

	$('#enter').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		// DO STUFF...
		persons_name = $("#character").val();
		result = _.find(data, { state: persons_name });

		console.log(result);

		$("#favorites").html(person_template({ person: result }));
	});



}); // closes document ready