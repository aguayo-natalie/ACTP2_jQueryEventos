
$(function() {

	var nombreAutor = ''
	var nombre = ''
	var seguidores = ''
	var likes = ''
	var siguiendo = ''
	var imagenAutor = ''
	var imagen = ''
	

	// 02 (Delegar para que funcionen los elementos generados dinamicamente)
	$('.cards').on('click', '.card', function(e){
		e.preventDefault();
		$(this).toggleClass('card--open');
	});


	// 03 (Delegar para que funcionen los elementos generados dinamicamente)
	$('.cards').on('click', '.card__like', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('card__like--red');

	// a (agregar o quitar likes)	
		var target = $(this).parent().find('.social__element').eq(1).children('.social__number')
		var likes = parseInt( target.text() )

	    if ($(this).hasClass('card__like--red')) {
	      likes++
	    } else {
	      likes--
	    }

	    target.text(likes)

	});


	// 04 (Delegar para que funcionen los elementos generados dinamicamente)
	$('.cards').on('click', '.card__follow-btn', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('card__follow-btn--following');
	
	// a (cambiar de seguir a siguiendo y que se vea reflejado en el numero)
		var target = $(this).parent().siblings('.social').find('.social__number').eq(2)
		var follow = parseInt(target.text())

		if($(this).hasClass('card__follow-btn--following')){
			$(this).text('Siguiendo');
			follow += 1
		} else {
			$(this).text('Seguir');
			follow -= 1
			}

		target.text (follow);
	});


	// 05
	$('#image').on('change', function(){
		var cambio = $(this).val();
		imagen = 'assets/images/squared/'+cambio
		$('.create__image').children().attr('src','assets/images/squared/'+cambio)
	});


	// 06
	$('#author').on('change', function(){
		var autor = $(this).val();
		imagenAutor = 'assets/images/profiles/'+autor
		$('.create__profile').children().attr('src','assets/images/profiles/'+autor);
		nombreAutor = $('#author').children(':selected').text();
	});


	/* 07 y 08 juntos

	$('.create__form').on('submit', function(e){
		e.preventDefault();
		var _this = $(this);
		var name = _this.find('[name="name"]').val()
		var autor = _this.find('[name="author"]').val()
		var autorNombre = _this.find('[name="autor"]').children(':selected').text()
		var imagen = _this.find('[name="image"]').val()
		var seguidores = _this.find('[name="followers"]').val()
		var likes = _this.find('[name="likes"]').val()
		var siguiendo = _this.find('[name="following"]').val()

	$('.cards').append(`<li class="card">
      <div class="card__highlight">
        <img class="card__img" src="${imagen}" alt="">
      </div>
      <div class="card__content">
        <div class="card__profile-container">
          <img class="card__profile" src="${imagenAutor}" alt="">
        </div>
        <a class="card__like" href="#">
          <i class="fas fa-heart"></i>
        </a>
        <div class="card__title">
          <h2>${nombre}</h2>
        </div>
        <div class="card__author">
          <h3 class="card__author-name">${nombreAutor}</h3>
        </div>
        <div class="card__hidden">
          <ul class="social">
            <li class="social__element">
              <div class="social__number">${seguidores}</div>
              <div class="social__text">Followers</di v>
            </li>
            <li class="social__element">
              <div class="social__number">${likes}</div>
              <div class="social__text">Likes</div>
            </li>
            <li class="social__element">
              <div class="social__number">${siguiendo}</div>
              <div class="social__text">Following</div>
            </li>
          </ul>
          <div class="card__follow">
            <button class="card__follow-btn">Seguir</button>
          </div>
        </div>
      </div>
    </li>`)
	});
	*/


	// 07
	$('#name').on('change', function(){
		nombre = $(this).val();
	});

	$('#followers').on('change', function(){
		seguidores = $(this).val();
	});

	$('#likes').on('change', function(){
		likes = $(this).val();
	});

	$('#following').on('change', function(){
		siguiendo = $(this).val();
	});


	// 08
	$('.create__submit').on('click', function(e){
		e.preventDefault();
		var nuevaTarjeta = 
	`<li class="card">
      <div class="card__highlight">
        <img class="card__img" src="${imagen}" alt="">
      </div>
      <div class="card__content">
        <div class="card__profile-container">
          <img class="card__profile" src="${imagenAutor}" alt="">
        </div>
        <a class="card__like" href="#">
          <i class="fas fa-heart"></i>
        </a>
        <div class="card__title">
          <h2>${nombre}</h2>
        </div>
        <div class="card__author">
          <h3 class="card__author-name">${nombreAutor}</h3>
        </div>
        <div class="card__hidden">
          <ul class="social">
            <li class="social__element">
              <div class="social__number">${seguidores}</div>
              <div class="social__text">Followers</di v>
            </li>
            <li class="social__element">
              <div class="social__number">${likes}</div>
              <div class="social__text">Likes</div>
            </li>
            <li class="social__element">
              <div class="social__number">${siguiendo}</div>
              <div class="social__text">Following</div>
            </li>
          </ul>
          <div class="card__follow">
            <button class="card__follow-btn">Seguir</button>
          </div>
        </div>
      </div>
    </li>`

    // 09
    $('.cards').append(nuevaTarjeta);
	$("#image").val("uk.png");
	$("#author").val("uk.png");
	$('.create__image').children().attr('src','assets/images/squared/uk.png')
	$('.create__profile').children().attr('src','assets/images/profiles/uk.png')
	$("#name").val("");
	$("#followers").val("");
	$("#likes").val("");
	$("#following").val("");

	});

	


	

});

	
































