/*$(function () {

  $('button[name="search"]').on('click', function (event) {
    event.preventDefault();

    var hashtag = $('input[name="hashtag"]').val();

    $.ajax({
      dataType: 'jsonp',
      method: 'GET',
      url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent?count=12&client_id=71e21c4bf4294a8498860283067eb682',
    })

    .done(function (instaData) {
      $.each(instaData.images, function (index, value) {
        var instaphoto = 'https://scontent.cdninstagram.com/' + value.url + '.jpg';
        $('.photos')
        .append('<img src="' + instaphoto + '"/>');
      })

    .fail(function () {
      console.log('error');
    });
    });
  });
}); */
