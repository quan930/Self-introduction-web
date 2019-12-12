window.onload=function () {
    new Vue({
        el: '#app',
        data:{
            main:false,
            items: [],
            name:"LI Hanze from Anshan Liaoning China",
            more:false,
        },
        methods:{
            show:function () {
                this.main = !this.main;
                new WOW().init();
            },
            showMore:function () {
                this.more = !this.more
            }
        },
        mounted: function () {
            for(let i=0;i<this.name.length;i++) {
                setTimeout(function(item,items) {
                    items.push(item)
                }, (i + 1) * 250,this.name.charAt(i),this.items);
            }
            console.log(this.items)
        },
        directives: {
            scroll: {
                inserted(el) {
                    el.scrollIntoView()
                }
            }
        }
    })
}