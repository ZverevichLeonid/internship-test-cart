import { createAppSlice } from "./createAppSlice"
import { Item } from "../components/itemsList/ItemsList"

export interface CounterSliceState {
  status: "loading" | "error" | "success"
  items: Item[]
}

const initialState: CounterSliceState = {
  status: "error",
  items: [],
}

export const cartSlice = createAppSlice({
  name: "cart",
  initialState,
  reducers: create => ({
    increment: create.reducer(
      (
        state,
        action: {
          payload: { id: number }
          type: string
        },
      ) => {
        let item = state.items.find(item => item.id === action.payload.id)
        if (item)
          if (item.quantity < 10) {
            item.quantity = item.quantity + 1
            item.total = item.quantity * item.price
          }
      },
    ),
    decrement: create.reducer(
      (
        state,
        action: {
          payload: { id: number }
          type: string
        },
      ) => {
        let item = state.items.find(item => item.id === action.payload.id)
        if (item)
          if (item.quantity > 1) {
            item.quantity = item.quantity - 1
            item.total = item.quantity * item.price
          }
      },
    ),
    deleteItem: create.reducer(
      (
        state,
        action: {
          payload: { id: number }
          type: string
        },
      ) => {
        state.items = state.items.filter(item => item.id !== action.payload.id)
      },
    ),
    fetchItems: create.asyncThunk(
      async () => {
        const response = await fetch(`https://dummyjson.com/carts/1`)
        const data = await response.json()
        return data
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "success"
          state.items = action.payload.products
        },
        rejected: state => {
          state.status = "error"
        },
      },
    ),
  }),
})

export const { increment, fetchItems, decrement, deleteItem } =
  cartSlice.actions
