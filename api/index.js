import axios from 'axios'

// 공통설정 인스턴스
const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductsByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  })
}

// carts
function fetchCartItems() {
  return instance.get('/carts')
}

function createCartItem(cartItem) {
  return instance.post('/carts', cartItem)
}

export {
  fetchProductById,
  fetchProductsByKeyword,
  fetchCartItems,
  createCartItem,
}

// 서버 데이터를 호출해 오는 방식
