new Vue({
    el:"#root",
    data:{
        datas:[
            {
                title:"111111",
                id:1,
            },
            {
                title:"222222",
                id:2,
            },
            {
                title:"333333",
                id:3,
            },
            {
                title:"444444",
                id:4,
            }
        ],
        status:false,
        title:""
    },
    methods:{
        aa(){
            this.status=true;
        },
        bb(val){
            this.title=val;
            this.status=false;
        }
    }
});