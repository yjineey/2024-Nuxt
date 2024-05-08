<template>
  <div class="list-wrapper">
    <ul>
      <li
        v-for="cart in $store.state.cartItems"
        :key="cart.id"
        class="list-item"
      >
        <img class="thumbnail" :src="cart.imageUrl" :alt="cart.name" />
        <div class="description">
          <p>{{ cart.name }}</p>
          <span>{{ cart.price }}</span>
          C
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// Nuxt 비동기 데이터 호출 방법
// 1. asyncData (pages에서만 사용 가능)
// 2.fetch (pages 외에도 사용 가능, 일반 컴포넌트에서 접근)
// ssr > 인스턴스 생성 > this 접근 (비동기에서 this 사용 불가)
import { FETCH_CART_ITEMS } from '@/store'
export default {
  //   async asyncData({ store }) {
  //     await store.dispatch(FETCH_CART_ITEMS)
  //   },
  async fetch() {
    await this.store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
  border: 1px solid;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
