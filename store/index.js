// state, mutations, actions

// import { fetchCartItems } from '~/api'

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
  //   setCarts(state, carts) {
  //     state.carts = carts
  //   },
}
// // 조회
// export const actions = {
//     // api에 선언해 둠
//     const { data } = await fetchCarts()
//     const items = data.map((item) => ({
//       ...item,
//       imageUrl: `${item.imageUrl}?random=${Math.random()}`,
//     }))
//     context.commit('setCarts', items)
// }
