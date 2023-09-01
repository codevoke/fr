const HeaderHandler = HeaderComponent;

const headerSelector = '#header';
const contentSelector = '#content';

const start_url = '/dashboard';

const render = new RenderEngine(
	HeaderHandler,
	headerSelector,
	contentSelector,
	start_url
);

const LendingPageHandler = LendingPage;
const LoginPageHandler = LoginPage;
const RegisterPageHandler = RegisterPage;
const MainPageHandler = MainPage;

render.addUrl("/", LendingPageHandler);
render.addUrl("/login", LoginPageHandler);
render.addUrl("/register", RegisterPageHandler);
render.addUrl('/dashboard', MainPageHandler);

render.start();