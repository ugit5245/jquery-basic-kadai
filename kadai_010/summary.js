$('#change-color').on('click', () => {
 $('#target').css('color', 'red');
});
$('#change-text').on('click', () => {
 $('#target').text('文字を変更');
});
$('#fade-out').on('click', () => {
 $('#target').fadeOut();
});
$('#fade-in').on('click', () => {
 $('#target').fadeIn();
});