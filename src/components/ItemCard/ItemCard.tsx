import type { FC } from "react"
import type { Item } from "../itemsList/ItemsList"
import { Card, Div, Title } from "@vkontakte/vkui"
import { Counter } from "../Counter/Counter"
import { DeleteButton } from "../DeleteButton/DeleteButton"
import "./itemCard.css"

interface ItemProps extends Item {}
export const ItemCard: FC<ItemProps> = ({
  id,
  thumbnail,
  title,
  quantity,
  total,
}) => {
  return (
    <Card mode="shadow">
      <Div className="item-card">
        <div className="item-card__preview">
          <img className="item-card__img" src={thumbnail} alt={title} />
          <div className="item-card__info">
            <Title level="2">{total}$</Title>
            <Title level="3">{title}</Title>
          </div>
        </div>
        <Counter id={id} value={quantity} />
        <Div>
          <DeleteButton id={id} />
        </Div>
      </Div>
    </Card>
  )
}
