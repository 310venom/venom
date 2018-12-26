// tab
module.exports = function () {
  'use strict'

  $('.js-tab-item').on('click', function () {
    if ($(this).hasClass('is-active')) {
      return false
    }
    $('.js-tab-item').removeClass('is-active')
    $(this).addClass('is-active')
    const genre = $(this).data('genre')
    $('.js-tab-cont').hide()
    $('.js-tab-cont[data-genre=' + genre + ']').fadeIn(500)
  })
}
