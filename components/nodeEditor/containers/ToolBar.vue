<template>
  <div class="tool-bar" :style="toolBarStyle">
    <hander
      class="handler"
      mode="horizontal"
    >
    </hander>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'ToolBar',
  components:{

  },
  data(){
    return{
      isExpand:true
    }
  },
  computed:{

  },
  methods:{

  },
  created(){
    let _t = this
  }
}
</script>
