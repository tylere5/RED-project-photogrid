$(function () {
  var instaPhotos = '';
  var $photos = $('.photos');
  var $error = $('.error-message');

  $('#search-button').on('click', function (event) {
    event.preventDefault();

    $(document).bind('ajaxSend', function () {
      $('.loader').show();
    }).bind('ajaxComplete', function () {
      $('.loader').hide();
    });

    var hashtag = $('#hashtag').val();

    $('.container').css('height', '8rem').addClass('header-scroll');

    $.ajax({
      dataType: 'jsonp',
      method: 'GET',
      url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent?count=12&client_id=71e21c4bf4294a8498860283067eb682',
    })

    .done(function (instaData) {
      $.each(instaData.data, function (index, value) {
        instaPhotos += '<li><div class="instaItem"><a href="' + value.link + '" target="_blank"><img src=' + value.images.standard_resolution.url + '></a>' +
                       '<div class="user-info"><div class="profile-photo"><img src=' + value.user.profile_picture + '></div>' +
                       '<div class="user-social"><div class="social-inner"><p>' + value.user.username + '</p>' +
                       '<i class="fa comments-icon"></i>' + value.comments.count +
                       '<i class="fa heart-icon"></i>' + value.likes.count + '</div></div></div></div></li>';
      });

      $photos.empty().append(instaPhotos);
      instaPhotos = '';
    })

    .fail(function (instaData) {
      $error.append('Oops, something went wrong. Please try again.');
    });
  });
});
