<template>
  <div class="">
    <button
      :class="[
        btnClass,
        { [`btn-${btnSize}`]: btnSize}
       ]"
      :disabled="isDisable"
    >{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    btnSize: {
      type: String,
      default: ''
    },
    btnClass: {
      type: String,
      default: 'primary'
    },
    btnText: {
      type: String,
      default: '버튼'
    },
    isDisable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.primary {
  width: 200px;
  height: 40px;
  background: #000;
  color: #fff;
}
.secondary {
  width: 200px;
  height: 40px;
  background: blue;
  color: #fff;
}

.btn-sm {
  height: 30px;
}

.btn-md {
  height: 40px;
}

.btn-lg {
  height: 50px;
}
</style>
