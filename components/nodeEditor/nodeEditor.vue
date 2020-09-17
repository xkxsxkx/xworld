<template>
  <div class="nodeEditor">
    <Navigator ref="nav"></Navigator>
    <Sketchpad ref="pad"></Sketchpad>
  </div>
</template>

<script>
//import Vue from 'vue'
import Vuetify from 'vuetify'
import Navigator from '~/components/nodeEditor/containers/Navigator.vue'
import ModelCommand from '~/components/nodeEditor/command/ModelCommand.js'
import Sketchpad from '~/components/nodeEditor/containers/Sketchpad.vue'
const _ = require('lodash')

export default {
  name:'nodeEditor',
  components:{
    Navigator,
    Sketchpad
  },
  data(){
    return{
      editorInfo:{},
      compsList:[],
      defInfo:{
        status:'add'
      },
      editor:null,
      graph:null,
      command:null,
      mode:'edit',
      isFullScreen:false,
      clipboard:{
        data:null,
        count:0
      }
    }
  },
  methods: {
    init(){
      let _t = this;
      _t.command = new ModelCommand(_t);
      setTimeout(()=>{
        _t.$refs.nav.init(_t);
      },10);
      setTimeout(()=>{
        _t.$refs.pad.init(_t);
      },10);
    },
    registerComp(observer){
      let _t = this;
      _t.compsList.push(observer);
    },
    unregisterComp(observer){
      let _t = this;
      const remove = (obj)=>{
        let i = _t.compsList.length;
        while(i--){
          if(_t.compsList[i] === observer){
            return i;
          }
        }
      }
      _t.compsList.splice(remove(observer),1);
    }
  },
  created(){
    let _t = this;
    _t.$nextTick(_t.init());
  }
}
</script>
