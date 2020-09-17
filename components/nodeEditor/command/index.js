import G6 from '@antv/g6'

export default class ModelCommand{
    constructor(model){
      this.model = model;
      //this.undoList = [];
      //this.redoList = [];
    }
    createProject(){
      this.model.editor = new G6.Graph({
        plugins:[
        ],
        fitView:true,
        fitViewPadding:20,
      });
    }
    openProject(){

    }
    saveProject(){

    }
    saveAsProject(){

    }
    closeProject(){

    }
}

