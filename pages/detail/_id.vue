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
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProudctById } from '@/api/index'
export default {
  // 페이지 진입 전에 사용되므로 this 사용 불가
  // const id = this.$route.params.id;
  async asyncData({ params }) {
    const response = await fetchProudctById(params.id)
    const product = response.data
    return { product }
  },
  metohods: {
    addToCart() {
      console.log('!!!')
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
