function LoginPage() {
	let wrapper = document.createElement('div')
	wrapper.classList.add('form_block')
	wrapper.innerHTML = `
		<ul class="nav nav-underline justify-content-around pb-3 mb-4" style="border-bottom:1px solid #dee2e6">
			<li class="nav-item">
			    <a class="nav-link" href="/register">Регистрация</a>
			</li>
			<li class="nav-item">
			    <a class="nav-link active" href="/login">Авторизация</a>
			</li>
		</ul>
			<div class="form-floating mb-4">
			  <input type="text" class="form-control" placeholder="login" id="input_login">
			  <label for="floatingInput">Логин</label>
			</div>
			<div class="form-floating mb-4">
			  <input type="password" class="form-control" placeholder="password" id="input_password">
			  <label for="floatingPassword">Пароль</label>
			</div>
		  	<div class="col-12">
		  	  <button type="submit" class="btn btn-primary" onclick="login()" id="btn_submit">Войти</button>
		  	</div>
		</div>`
	return wrapper
}

function login() {	
	const input_login = document.querySelector('#input_login');
	const input_password = document.querySelector('#input_password');
	const handler_button = document.querySelector('#btn_submit');

	var	login = input_login.value;
	var password = input_password.value;
	// todo: realise auutorize
}