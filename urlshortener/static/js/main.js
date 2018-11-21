$(document).ready(function(){
  var form = $('#url-form');
  var input = $('#original-url');
  var yourLinks = $('#your-links');

  form.submit(function(e) {
    e.preventDefault();
    var originalUrl = input.val();
    $.get('/new/' + originalUrl, function(res) {
      yourLinks.append(
        '<div class="card margin-bottom" style="width: 100%">' +
          '<div class="card-body">' +
            '<p>Original link: <a href="' + originalUrl + '">' + originalUrl + '</a></p>' +
            '<p style="margin-bottom: 0">Short link: <a href="' + res.short_url + '">' + res.short_url + '</a></p>' +
          '</div>' +
        '</div>'
      )
      form.trigger('reset');
    }).fail(function(res) {
      console.log(res.responseJSON.error);
    });
  })
});
