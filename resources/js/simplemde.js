Nova.booting((Vue, router) => {
    Vue.component('index-simplemde', require('./components/IndexField'));
    Vue.component('detail-simplemde', require('./components/DetailField'));
    Vue.component('form-simplemde', require('./components/FormField'));
})
