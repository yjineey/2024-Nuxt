import { fetchCartItems } from '~/api'

// constans
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
  cartItems: [],
})

// 수정 commit
export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem}?random=${Math.random()}`,
    }
    state.cartItems.push(newCartItem)
  },
  setCarts(state, carts) {
    state.carts = carts
  },
}

// 조회
export const actions = {
  // 동적 키 값 정의 (위에 변수 값을 연결)
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    commit(
      'setCarts',
      data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    )
  },
  // store를 생성하는 시점 (서버 사이드 렌더링 시점)에 데이터가 다 설정 되도록 하는 곳
  // nuxt 서버가 실행될 떄 무조건 (인증관리, 세션, 토큰 관리 유용)
  // action 함수 내부 사용
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch('FETCH_CART_ITEMS')
    // const { data } = await fetchCartItems()
    // storeContext.commit(
    //   'setCarts',
    //   data.map((item) => ({
    //     ...item,
    //     imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    //   }))
    // )
  },
}
