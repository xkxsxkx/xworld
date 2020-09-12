<template>
  <div class="nodeEditor">
    <Navigator/>
    <v-col>
      <v-row>
        <v-card color="#385F73" dark>
          <v-card-title class="headline">you project</v-card-title>
          <v-card-subtitle>create time</v-card-subtitle>
          <v-card-actions>
            <v-btn text>edit it</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>

  </div>
</template>

<script>
//import Vue from 'vue'
import Vuetify from 'vuetify'
import G6 from '@antv/g6'
import Navigator from '~/components/nodeEditor/components/Navigator.vue'

export default {
  name:'nodeEditor',
  components:{
    Navigator
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
    },
    newProject(){
      let _t = this;
      _t.isDisplayNavi = false;
    },
    openProject(){
      let _t = this;
    }
  }
}
</script>
