import type { FC } from "react"
import { Text } from "@vkontakte/vkui"
import { useAppDispatch } from "../../store/hooks"
import { deleteItem } from "../../store/cartSlice"
import { Icon28DeleteOutline } from "@vkontakte/icons"

interface DeleteButtonProps {
  id: number
}

export const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
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
