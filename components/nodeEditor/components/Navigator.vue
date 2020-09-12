<template>
  <div class="navigator" id="navigator">
    <v-bottom-navigation v-model="bottomNav">

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

      <v-btn value="recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </div>

</template>

<script>
export default {
  name:'Navigator',
  data(){
    return{
      ShowNewDialog:false
    }
  }
}
</script>
