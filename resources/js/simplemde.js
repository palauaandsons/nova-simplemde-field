import IndexField from './components/IndexField';
import DetailField from './components/DetailField';
import FormField from './components/FormField';

Nova.booting((app, store) => {
	app.component('index-nova-simplemde-field', IndexField);
	app.component('detail-nova-simplemde-field', DetailField);
	app.component('form-nova-simplemde-field', FormField);
});
