import products from '../../data/products'

const state = {
  whatsappItemCart: {},
  products: products.data,
  cart: []
}
// getters
const getters = {
  whatsappCartItems: (state) => {
    return state.whatsappItemCart
  },
  cartItems: (state) => {
    return state.cart
  },
  cartTotalAmount: (state) => {
    return state.cart.reduce((total, product) => {
      return total + (product.price * product.quantity)
    }, 0)
  }
}
// mutations
const mutations = {
  ADD_ITEM_TO_CART(state, payload) {
    state.whatsappItemCart = payload
  },
  addToCart: (state, payload) => {
    const product = payload
    const cartItems = state.cart.find(item => item.id === payload.id)
    if (cartItems) {
      cartItems.quantity = cartItems.quantity + 1
      console.log(cartItems)
      const foundIndex = state.cart.findIndex(x => x.id === payload.id)
      state.cart[foundIndex] = cartItems
    } else {
      product.quantity = 1
      console.log(product)
      state.cart.push(product)
    }
    // product.stock--
  },
  updateCartQuantity: (state, payload) => {
    // Calculate Product stock Counts
    function calculateStockCounts(product, quantity) {
      const qty = product.quantity + quantity
      const stock = product.stock
      if (stock < qty) {
        return false
      }
      return true
    }
    state.cart.find((items, index) => {
      if (items.id === payload.product.id) {
        const qty = state.cart[index].quantity + payload.qty
        const stock = calculateStockCounts(state.cart[index], payload.qty)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        } else {
          // state.cart.push({
          //   ...product,
          //   quantity: qty
          // })
        }
        return true
      }
    })
  },
  removeCartItem: (state, payload) => {
    const index = state.cart.indexOf(payload)
    state.cart.splice(index, 1)
  }
}
// actions
const actions = {
  addItemToCart: (context, payload) => {
    context.commit('ADD_ITEM_TO_CART', payload)
  },
  addToCart: (context, payload) => {
    context.commit('addToCart', payload)
  },
  updateCartQuantity: (context, payload) => {
    context.commit('updateCartQuantity', payload)
  },
  removeCartItem: (context, payload) => {
    context.commit('removeCartItem', payload)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
