<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">카트에 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api/index'
export default {
  // 페이지 진입 전에 사용되므로 this 사용 불가
  // const id = this.$route.params.id;
  async asyncData({ params }) {
    const response = await fetchProductById(params.id)
    const product = response.data
    return { product }
  },
  methods: {
    addToCart() {
      // 서버에 product 저장 (새로고침시 불러올 데이터)
      // const response = await createCartItem(this.product)
      this.$store.commit('addCartItem', this.product) // 화면에 즉시 띄워줄 값
      this.$router.push('/cart')
    },
  },
}
</script>

<style scoped>
.main-panel {
  width: 250px;
  height: 250px;
  border: 1px solid;
}
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
