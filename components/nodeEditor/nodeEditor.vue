<template>
  <div class="nodeEditor">
    <v-bottom-navigation v-model="bottomNav">
      <v-btn value="recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
//import Vue from 'vue'
import Vuetify from 'vuetify'
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
