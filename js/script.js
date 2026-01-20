$(function () {

  /* ========= About（モバイルのみ slick）========= */
  function initAboutSlider() {
    const $target = $('.gallery-about');

    if (window.innerWidth <= 768) {
      if (!$target.hasClass('slick-initialized')) {
        $target.slick({
          dots: true,
          arrows: false,
          infinite: false
        });
      }
    } else {
      if ($target.hasClass('slick-initialized')) {
        $target.slick('unslick');
      }
    }
  }

  initAboutSlider();
  $(window).on('resize', initAboutSlider);


  /* ========= Works モーダル ========= */
  const $modal = $('#modal');
  const $modalSlider = $('.modal-slider');

  $('.js-modal-img').on('click', function () {

    $modalSlider.empty();

    $(this).closest('.gallery').find('img').each(function () {
      $modalSlider.append(
        `<div><img src="${this.src}" style="width:100%"></div>`
      );
    });

    $modalSlider.slick({
      dots: true,
      arrows: true,
      infinite: false
    });

    $modal.addClass('active');
  });

  function closeModal() {
    if ($modalSlider.hasClass('slick-initialized')) {
      $modalSlider.slick('unslick');
    }
    $modal.removeClass('active');
  }

  $('.modal-bg, .modal-close').on('click', closeModal);

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

});

