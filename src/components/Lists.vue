<template>
  <div class="lists">
      <el-tabs v-model="show"  @tab-click="handleClick">
        <el-tab-pane label="全部" name="all"></el-tab-pane>
        <el-tab-pane label="收藏" name="favorites"></el-tab-pane>
      </el-tabs>
      <ul class="ul-item">
        <li v-for="item in notes" v-bind:class="{active:activeNote == item}" v-on:click="updateCurNote(item)" href="#">
          {{item.title}}
        </li>
        <p v-show="noList">{{tip_txt}}</p>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:'all',
      noList:true,
      tip_txt:"暂无笔记，请添加"
    }
  },
  computed:{
    notes(){
      if (this.show=='all'){
        if(this.$store.getters.notes.length == 0){ 
          this.noList = true;
          return [];
        }
        else{
          this.noList = false;
          return this.$store.getters.notes;
        }
      }else if(this.show=='favorites'){
        var flist = this.$store.getters.notes.filter(note=>note.favorite);
        if(flist.length == 0){
          this.noList = true;
          this.tip_txt = "暂无收藏，请添加"
          return [];
        }
        else{
          this.noList = false;
          return flist;
        }
      }
    },
    activeNote(){
      return this.$store.getters.curNote;
    }
  },
  methods:{
    updateCurNote(note){
      this.$store.dispatch('updateCurNote',note)
    },
    handleClick(tab, event){
        this.show = tab.name
    }
  }
}
</script>
<style type="text/css" scoped>
.lists{
  background: #efefef;
}
.ul-item{
  text-align: center;
  min-height: 200px;
}
.ul-item li{
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.ul-item li.active{
  background: #20a0ff !important;
}
</style>