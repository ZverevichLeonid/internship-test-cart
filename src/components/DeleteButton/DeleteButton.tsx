import { Icon28DeleteOutline } from "@vkontakte/icons"
import { Text } from "@vkontakte/vkui"
import React from "react"
import { useAppDispatch } from "../../store/hooks"
import { deleteItem } from "../../store/cartSlice"

export const DeleteButton = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch()

  return (
    <button
      onClick={() => dispatch(deleteItem({ id }))}
      className="item-card__controller"
    >
      <Icon28DeleteOutline />
      <Text>Удалить</Text>
    </button>
  )
}
