// go on https://webapps.fas.harvard.edu/course_evaluation_reports/fas/list?
// and run this in your dev console

// open all dropdowns
$('.course-block-head').click();

// select all course anchors
courses = $('.course');

// get list of hrefs, these include course ids
hrefs = courses.find('a').map(function(){
    return $(this).attr('href')
  }).toArray();

// get ids (string)
course_ids = hrefs.map(function(h){
    return h.split("=")[1]
  });
