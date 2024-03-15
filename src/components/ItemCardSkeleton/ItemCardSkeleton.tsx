import { FC } from "react"
import type { Item } from "../itemsList/ItemsList"
import { Card, Div, Title } from "@vkontakte/vkui"
import { Counter } from "../Counter/Counter"
import { DeleteButton } from "../DeleteButton/DeleteButton"
import "./ItemCardSkeleton.css"
interface ItemsCardSkeleton extends Item {}
export const ItemsCardSkeleton: FC = () => {
  return (
    <Card mode="shadow">
      <Div className="item-card-skeleton">
        <div className="item-card__preview-skeleton">
          <div className="item-card__img-skeleton" />
          <div className="item-card__info-skeleton"></div>
        </div>
        <Counter id={NaN} value={1} />
        <Div>
          <DeleteButton id={NaN} />
        </Div>
      </Div>
    </Card>
  )
}
