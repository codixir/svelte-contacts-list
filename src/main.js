import App from './App.svelte';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;