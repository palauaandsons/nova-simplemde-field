Nova.booting((Vue, router, store) => {
  Vue.component('index-nova-simplemde-field', require('./components/IndexField'))
  Vue.component('detail-nova-simplemde-field', require('./components/DetailField'))
  Vue.component('form-nova-simplemde-field', require('./components/FormField'))
})
