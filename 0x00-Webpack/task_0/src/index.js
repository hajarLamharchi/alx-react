import $ from 'jquery';

$(document).ready(function() {
    const firstParagraph = $('<p>Holberton Dashboard</p>');
    const secondParagraph = $('<p>Dashboard data for the students</p>');
    const thirdParagraph = $('<p>Copyright - Holberton School</p>');

    $('body').append(firstParagraph);
    $('body').append(secondParagraph);
    $('body').append(thirdParagraph);
});