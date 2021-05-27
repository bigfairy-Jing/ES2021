<template>
  <div class="app-wrap">
    华为手机就是牛
  </div>
</template>
<script>
export default {
  setup(){
    const testFn = () => {
      console.log('华为手机就是很牛')
    }
    // 关于ES2021 部分
    // let a = 0
    // a ||= 2
    // console.log(a) // 2

    // let a = 0
    // let b;
    // console.log(a??=3, a)
    // console.log(b??=3, b)

    let a = 1
    a &&= 2
    console.log(a) // 2

    const bill = 1_223_144_555;
    console.log(bill)

    const pro1 = new Promise((resolve, reject) => setTimeout((x) => resolve(x), 300, '300'))
    const pro2 = new Promise((resolve, reject) => setTimeout((x) => resolve(x), 200, '200'))
    const pro3 = new Promise((resolve, reject) => setTimeout((x) => resolve(x), 100, '100'))

    Promise.any([pro1, pro2, pro3]).then(v=> console.log(v)).catch(e=>console.log(e))


    return {
      testFn
    }
  }
}
</script>
<style scoped>
.app-wrap {
  color: blue;
}
</style>