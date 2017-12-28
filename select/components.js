Vue.component("custom-input",{
    props:["title"],
    template:`<div class="select-input" @click="focus">
                <input type="text" v-model="title">
            </div>`,
    methods:{
        focus(){
            this.$emit("changecustom");
        }
    }
});
Vue.component("custom-list",{
    props:["status","datas"],
    template:`<ul class="select-list" v-show="status==true">
                <li v-for="item in datas" @click="click(item.title)">
                    {{item.title}}
                </li>
            </ul>`,
    methods:{
        click(val){
            this.$emit("changecustom",val);
        }
    }
});