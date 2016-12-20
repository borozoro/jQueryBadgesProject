$(function() {
	$.ajax({
		url: 'https://www.codeschool.com/users/rijrij.json',
		dataType: 'jsonp',
		success: function (response) {
			var courses = response.courses.completed;
			renderBadges(courses);
		}
	});

	function renderBadges(courses) {
		var $badges = $('#badges');
		courses.forEach(function (course) {

			var $div = $('<div></div>', {
				'class': 'course'
			}).appendTo($badges);

			$('<h3></h3>', {
				text: course.title
			}).appendTo($div);

			$('<img></img>', {
				src: course.badge
			}).appendTo($div);

			$('<a></a>', {
				'class': 'btn btn-primary',
				href: course.url,
				target: '_blank',
				text: 'See Course'
			}).appendTo($div);

		});
	}
});
