<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    components:{
    }
  }
</script>

<style scoped>

  #tab-bar{
    display: flex;
    background-color: #f4f4f4;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
