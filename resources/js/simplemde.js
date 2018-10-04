Nova.booting((Vue, router) => {
    Vue.component('index-markdown', require('./components/IndexField'));
    Vue.component('detail-markdown', require('./components/DetailField'));
    Vue.component('form-markdown', require('./components/FormField'));
})
