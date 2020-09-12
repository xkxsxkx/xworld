<template>
  <div class="context-menu"
    v-show="isShow"
    :style="contextMenuStyple">
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import config from '../config'

export default {
  name:'ContextMenu',
  components:{

  },
  data(){
    return{
      isShow:false,

    }
  }
}
</script>
