<template>
  <div class="sketchpad-box">
    <div :id="boxId" class = "graph-container" styple="position:relative;"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
import ControlCommand from '~/components/nodeEditor/command/ControlCommand.js'

export default {
  name:"Sketchpad",
  data() {
    return {
      boxId:"graph-container",
      graph:null,
      Model:null,
      command:null
    }
  },
  props:{
    height:{
      type:Number,
      default:0
    },
    width:{
      type:Number,
      default:0
    },
    data:{
      type:Object,
      default:()=>{}
    }
  },
  created(){
  },
  methods:{
    init(model){
      let _t = this;
      _t.Model = model;
      _t.Model.registerComp(_t);
      _t.command = new ControlCommand(_t);

      const height = _t.height;
      const width = _t.width;
      _t.graph = new G6.Graph({
        container:"graph-container",
        height:height,
        width:width,
        modes:{
          default:[
            "drag-canvas",
            "zoom-convas",
            "hover-node",
            "select-node",
            "hover-edge",
            "keyboard",
            "customer-events",
            "add-menu"
          ],
          mulitSelect:["mulit-select"],
          addEdge:["add-edge"],
          moveNode:["drag-item"]
        }
      })
      _t.graph.on('canvas:mousedown',_t.command._canvasMousedown);
      _t.graph.on('canvas:mouseup',_t.command._canvasMouseup);

      _t.graph.on('node:mousedown',_t.command._nodeMousedown);
      _t.graph.on('node:mouseout',_t.command._nodeOut);
      _t.graph.on('node:mouseover',_t.command._nodeHover);
    }
  }
}
</script>
