<template>
  <div class="nodeEditor">
    <v-bottom-navigation v-model="bottomNav" v-show="isDisplayNavi">

      <v-dialog v-model="ShowNewDialog " persistent max-width="600px">
        <template v-slot:activator="{on,attrs}">
          <v-btn value="new"
            v-bind="attrs"
            v-on="on"
          >
            <span>New</span>
            <v-icon>mdi-file</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Create Project</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="newProject">OK</v-btn>
            <v-btn color="primary" text @click="ShowNewDialog = false">Cansel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn value="open" @click="openProject">
        <span>open</span>
        <v-icon>mdi-folder-open</v-icon>
      </v-btn>

      <v-btn value="recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on">This text has a tooltip</span>
      </template>
      <span>Tooltip</span>
      </v-tooltip>

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
      isDisplayNavi:true,
      clipboard:{
        data:null,
        count:0
      },
      ShowNewDialog:false
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
