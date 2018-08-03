import  messageBoxVue from './messageBox.vue'
export default {
  install(Vue){
    let messageBox = Vue.extend(messageBoxVue);
    let $messageBox = new messageBox();
    document.body.appendChild($messageBox.$mount().$el);
    Vue.prototype.$messageBox = (model => {
      model.show=true;
      $messageBox.model=model;
    });
  }
}
