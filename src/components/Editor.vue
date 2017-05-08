<template>
  <div>
  <el-input class="inp" v-model="curNoteTitle" placeholder="请输入名称" v-on:input="editNoteTitle"></el-input>
  <textarea v-model:value="curNoteContent"  placeholder="请输入内容" v-on:input="editNoteContent" class="form-control"></textarea>
  </div>
</template>

<script>
export default {
  computed:{
    curNoteTitle(){
      return this.$store.getters.curNote.title ;
    },
    curNoteContent(){
      var txt = this.$store.getters.curNote.content ;
      return txt;
    }
  },
  methods:{
      editNoteContent(e){
          this.$store.dispatch('editNoteContent',e.target.value)
      },
      editNoteTitle(val){
          if(val == '')
            return ;
          this.$store.dispatch('editNoteTitle',val)
      }
  }
}
</script>
<style type="text/css">  
.inp{
  margin:5px 10px;
}
textarea {
  margin:0px 10px;
      min-height: 209px;
    font-size: 14px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

</style>