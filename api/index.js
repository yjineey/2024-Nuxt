import axios from 'axios'

// 공통설정 인스턴스
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
})

function fetchProudctById(id) {
  return instance.get(`/products/${id}`)
}

export { fetchProudctById }
