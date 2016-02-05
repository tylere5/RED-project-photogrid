$(function () {
  var instaPhotos = '';
  var $photos = $('.photos');

  $('button[name="search"]').on('click', function (event) {
    event.preventDefault();

    var hashtag = $('#hashtag').val();

    $.ajax({
      dataType: 'jsonp',
      method: 'GET',
      url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent?count=12&client_id=71e21c4bf4294a8498860283067eb682',
    })

    .done(function (instaData) {
      console.log(instaData);
      $.each(instaData.data, function (index, value) {
        instaPhotos += '<li><img src=' + value.images.standard_resolution.url + '></li>';
        instaPhotos += '<p><img src=' + value.user.profile_picture + '></p>';
        instaPhotos += '<p>' + value.user.username + '</p>';
        instaPhotos += '<p>' + value.comments.count + '</p>';
        instaPhotos += '<p>' + value.likes.count + '</p>';
      });

      $photos.append(instaPhotos);
    })
    .fail(function () {
      console.log('error');
    });
  });
});
