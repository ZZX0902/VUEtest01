/*var data={
    name:"张兆翔",
}
*/


Vue.component("greeting", {
    template: '<p><button v-on:click="changename">改名</button>，{{name}}:大家好，给大家介绍一下的女朋友，@游佳</p>',
    data: function () {
        return {
            name: "张兆翔"
            //return data;
        }
    },
    methods: {
    changename: function () {
        this.name = "zzx";
    }
 }

})



var one = new Vue({
    el: "#vueapp-one",

})
var two = new Vue({
    el: "#vueapp-two",

});
