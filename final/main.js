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
    //check the state of the sibling(s)
    $(this).siblings().each(function(i, sibling) {
        //if hidden, show, then set state accordingly
        if($(sibling).attr('toggle') === 'hidden') {
            $(sibling).show();
            $(sibling).attr('toggle', 'shown');
        }
        //otherwise, hide and set state accordingly
        else if ($(sibling).attr('toggle') === 'shown') {
            $(sibling).hide();
            $(sibling).attr('toggle', 'hidden');
        }
    });
}).bind(this);

