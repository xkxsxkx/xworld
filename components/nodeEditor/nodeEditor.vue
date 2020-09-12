<template>
  <div class="nodeEditor">
  </div>
</template>

<script>
//import Vue from 'vue'
import G6 from '@antv/g6'

export default {
  name:'nodeEditor',
  components:{

  },
  data(){
    return{
      editorInfo:{},
      defInfo:{
        status:'add'
      },
      editor:null,
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
      _t.editor = new G6.Graph({
        plugins:[
        ],
        fitView:true,
        fitViewPadding:20,
      });
    }
  }
}
</script>
