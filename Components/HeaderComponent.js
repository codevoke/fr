function HeaderComponent() {
	let nav_wrapper = document.createElement('nav')
	let navWrapper = nav_wrapper;
	navWrapper.classList.add("navbar", "bg-body-tertiary", "navbar-expand-lg", "justify-content-between")
	navWrapper.setAttribute("style", "height: 70px;")

	if (localStorage.getItem('auth') !== 'true')
		navWrapper.innerHTML = `<div class="ml-5">
			<a class="navbar-brand" href="/static">
			  <img src="static/logo.png" alt="Logo" width="30" height="30" class="
			  d-inline-block align-text-top">
			  Fix it now
			</a>
		  </div>
		  <div class="mr-3 flex justify-content-between">
			<a class="btn btn-primary m-3" href="/login">Войти</a>
			<a class="btn btn-outline-primary m-3" href="/register">Зарегистрироваться</a>
		  </div>`
	else {
		let username= localStorage.getItem('username')
		let avatar = localStorage.getItem('avatar')

		// todo: realise request login api breakpoint to check updates

		navWrapper.innerHTML = `
<div class="container-fluid ml-5">
	<a class="navbar-brand" href="/static">
		<img src="static/logo.png" alt="Logo" width="30" height="30" class="
		d-inline-block align-text-top">
		Fix it now
	</a>
</div>
<div class="dropdown mr-5">
	<button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> 
		<span style="padding-right: 5px;"> 
			<img src="${avatar}" alt="Bootstrap" width="30" height="30" style="border-radius: 50%;"> 
		</span>
		${username}
	</button>
	<ul class="dropdown-menu">
		<li><a class="dropdown-item" href="#">Профиль</a></li>
		<li><a class="dropdown-item" href="#">Настройки</a></li>
		<li><hr class="dropdown-divider"></li>
		<li><a class="dropdown-item text-danger" href="#">Выйти</a></li>
	</ul>
</div>`
	}
	return nav_wrapper;
}
