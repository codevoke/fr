function RegisterPage() {
    let wrapper = document.createElement('div')
    wrapper.classList.add('form_block')
    wrapper.innerHTML = `
		<ul class="nav nav-underline justify-content-around pb-3 mb-3" style="border-bottom:1px solid #dee2e6">
			<li class="nav-item">
			    <a class="nav-link active" href="/register">Регистрация</a>
			</li>
			<li class="nav-item">
			    <a class="nav-link" href="/login">Авторизация</a>
			</li>
		</ul>
		<div class="form">
			<div class="form-floating mb-2">
			  <input type="text" class="form-control form-control-sm" placeholder="username" id="input_username">
			  <label for="floatingInput">Имя пользователя</label>
			  <div id="passwordHelpBlock" class="form-text">
				Отображаемое имя пользователя
			  </div>	
			</div>
			<div class="form-floating mb-2">
			  <input type="text" class="form-control form-control-sm" placeholder="login" id="input_login">
			  <label for="floatingInput">Логин</label>
			  <div id="passwordHelpBlock" class="form-text">
				Логин должен быть 6-20 символов в длину и не должен включать в себя пробелы.
			  </div>	
			</div>
			<div class="form-floating mb-3">
			  <input type="password" class="form-control form-control-sm" placeholder="password" id="input_password">
			  <label for="floatingPassword">Пароль</label>
			  <div class="form-text">Пароль должен состоять из символов a-z, A-Z, 0-9 длинной 8-20 символов</div>
			</div>
			<select class="form-select mb-3" id="select_role">
			  <option selected disabled>Выберите тип аккаунта</option>
			  <option value="worker">Техник</option>
			  <option value="teacher">Учитель</option>
			</select>
			<div class="col-12">
		  	  <button type="submit" class="btn btn-primary" onclick="register();" id="btn_submit">Зарегестрироваться</button>
		  	</div>
		</div>`
    return wrapper
}

function register() {
    const input_username = document.querySelector('#input_username');
    const input_login = document.querySelector('#input_login');
    const input_password = document.querySelector('#input_password');
    const select_role = document.querySelector('#select_role');
    const handler_button = document.querySelector('#btn_submit');

    handler_button.addEventListener('click', () => {
        let username = input_username.value;
        let login = input_login.value;
        let password = input_password.value;
        let role = select_role.value;
        // todo: field validation
        // todo: realize register
    })
}