<template>
    <div class="tab-control">
        <div v-for="(item,index) in name" :v-for='index' 
         class="tab-control-item" @click="itemclick(index)"
         :class="{active: index === currentIndex}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    data(){
        return{
            currentIndex:0,
            goods:{
                'fashion':{page:0,list:[]},
                'classic':{page:0,list:[]},
                'music':{page:0,list:[]},
            }
        }
    },
    props:{
        name:{
            type:Array,
            dafault(){
                return []
            }
        }
    },
    methods:{
       itemclick(index){
           this.currentIndex = index;
           this.$emit('tabClick',index)
       }
    },
    created(){
        
    },
    
}
</script>
<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        line-height: 45px;
        height: 35px;
        background-color:whitesmoke;
    }
    .tab-control-item{
        flex: 1;
        font-size: 15px;
        cursor: pointer;
    }
    .active{
        color: var(--color-high-text);
        
    }
    .active span{
        border-bottom:3px solid red ;
    }
</style>
