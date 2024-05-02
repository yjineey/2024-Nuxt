<template>
  <div class="app">
    <main>
      <div>
        <input type="text" />
      </div>
      <div>
        <ul>
          <li v-for="item in items" :key="item.id" class="item flex">
            <img class="product-image" src="item.imageUrl" alt="item.name" />
            <p>{{ item.name }}</p>
            <span>{{ item.price }}</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
    // const items = response.data
    const items = response.data.map((item) => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random-${Math.random()}`,
      }
    })
    return { items }
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
