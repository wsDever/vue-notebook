<template>
  <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1" @click="addOne">添加</el-menu-item>
    <el-menu-item index="2" @click="toggleFavorite" v-bind:class="{starred:curNote.favorite}">收藏</el-menu-item>
    <el-menu-item index="3" @click="deleteNote">删除</el-menu-item>
  </el-menu>

</template>

<script>
export default {
  name: '',
  computed:{
    curNote(){
      return this.$store.getters.curNote;
    }
  },
  methods:{
    addOne(){
      this.$store.dispatch('addNote');
    },
    toggleFavorite(){
      this.$store.dispatch("toggleFavorite");
    },
    deleteNote(){
      this.$store.dispatch("deleteNote");
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.starred {
  color: #F7AE4F;
}
</style>
