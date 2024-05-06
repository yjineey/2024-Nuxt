<template>
  <div class="app">
    <main>
      <SearchInput v-model="inputText" @search="filterItemsBySearchText" />
      <ul>
        <li
          v-for="item in items"
          :key="item.id"
          class="item flex"
          @click="routeToDetailPage(item.id)"
        >
          <img class="product-image" :src="item.imageUrl" />
          <p>{{ item.name }}</p>
          <span>{{ item.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="routeToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import SearchInput from '@/components/SearchInput.vue'
import { fetchProductsByKeyword } from '@/api/index'

export default {
  components: {
    SearchInput,
  },
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
    const items = response.data.map((item) => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }
    })
    // vue 데이터의 속성으로 정의가 되며 인스턴스의 데이터 속성으로 정의 되어 있다
    return { items }
  },
  data() {
    return {
      inputText: '',
    }
  },
  methods: {
    async filterItemsBySearchText() {
      const response = await fetchProductsByKeyword(this.inputText)
      this.items = response.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    },
    routeToDetailPage(id) {
      console.log(id)
      // nuxt는 내부적으로 라우터를 품고 있어서 따로 설정하지 않아도 사용 가능
      this.$router.push(`detail/${id}`)
    },
    routeToCartPage() {
      this.$router.push('/cart')
    },
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
