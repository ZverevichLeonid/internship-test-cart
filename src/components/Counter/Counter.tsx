import { FC } from "react"
import { Icon16Add, Icon16Minus } from "@vkontakte/icons"
import { IconButton } from "@vkontakte/vkui"
import { decrement, increment } from "../../store/cartSlice"
import { useAppDispatch } from "../../store/hooks"
import "./Counter.css"

export type CounterProps = {
  value: number
  id: number
}

export const Counter: FC<CounterProps> = ({ value, id }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="Counter">
      <div>
        <IconButton
          aria-label="minus"
          onClick={() => dispatch(decrement({ id }))}
          disabled={value <= 1}
        >
          <Icon16Minus fill={"#447bba"} />
        </IconButton>
      </div>
      <div>{value}</div>
      <div>
        <IconButton
          aria-label="add"
          onClick={() => dispatch(increment({ id }))}
          disabled={value >= 10}
        >
          <Icon16Add fill={"#447bba"} />
        </IconButton>
      </div>
    </div>
  )
}
