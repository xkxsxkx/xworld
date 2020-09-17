<template>
  <div class="navigator" id="navigator">
    <v-bottom-navigation>

      <v-dialog v-model="ShowNewDialog " persistent max-width="599px">
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
                <v-col cols="11">
                  <v-text-field label="Project name" required></v-text-field>
                </v-col>
                <v-col cols="11">
                  <v-text-field label="Project path" required></v-text-field>
                </v-col>
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

      <v-divider inset vertical></v-divider>

      <v-btn value="open" @click="openProject">
        <span>open</span>
        <v-icon>mdi-folder-open</v-icon>
      </v-btn>

      <v-divider inset vertical></v-divider>

      <v-btn value="recent" @click="isDisplay=!isDisplay">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

    </v-bottom-navigation>

      <v-col >
        <v-row v-for="file in recentFiles" :key="file.title" v-bind:date="file.date">
          <transition name="fade">
            <v-card color="#385F73" dark  v-if="isDisplay">
              <v-card-title class="headline">{{file.title}}</v-card-title>
              <v-card-subtitle>{{file.date}}</v-card-subtitle>
              <v-card-actions>
                <v-btn text>edit it</v-btn>
              </v-card-actions>
            </v-card>
          </transition>
        </v-row>
      </v-col>
  </div>


</template>

<script>
export default {
  name:'Navigator',
  data(){
    return{
      ShowNewDialog:false,
      isDisplay:false,
      Model:null,
      recentFiles:[
        //{
          //id : '0',
          //title:'none',
          //date:'none'
        //}
      ]
    }
  },
  methods:{
    init(model){
      let _t = this;
      _t.Model = model;
      _t.Model.registerComp(this);
    },
    Display(){
      let _t = this;
      _t.isDisplay = true;
    },
    Disappear(){
      let _t = this;
      _t.isDisplay = false;
    },
    newProject(){
      let _t = this;
      _t.Disappear();
      _t.Model.command.createProject();
    },
    openProject(){
      let _t = this;
      _t.Model.command.openProject();
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity : 0;
}
</style>
