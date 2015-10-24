$(function() {
  $(document).on('click', '[data-href]', function() {
    location.href=$(this).data('href');
  })
});