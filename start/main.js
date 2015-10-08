//run immediately on load
$(function() {
    //first, find all section headings' div siblings
    $('h2.heading').siblings('div.inner').each(function(i, sibling) {
        //save the state of the toggle as 'shown'
        $(sibling).attr('toggle', 'shown');
    });
});

//onclick: hide/show div sibling
$('h2.heading.inner').click(function() {

}).bind(this);

