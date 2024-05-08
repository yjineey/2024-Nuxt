<template>
  <div class="container">
    <h1 class="list-title">담긴 상품 목록</h1>
    <CartList></CartList>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/CartList'

export default {
  // async asyncData({ store }) {
  // 페이지의 데이터가 담긴상태로 진입하겠다
  // await store.dispatch('fetchCarts')
  // },
  //   computed: {
  //     carts() {
  //     //   return this.$store.state.cartItems
  //     },
  //   },
}
</script>
