import { FC } from "react"
import { ItemCard } from "../ItemCard/ItemCard"
import { Div, Group, Title } from "@vkontakte/vkui"
import "./ItemsList.css"
interface ItemsListProps {
  items: Item[]
}

export interface Item {
  discountPercentage: number
  discountedPrice: number
  id: number
  price: number
  quantity: number
  thumbnail: string
  title: string
  total: number
}
export const ItemsList: FC<ItemsListProps> = ({ items }) => {
  return (
    <section className="items-list">
      {items.length > 0 ? (
        items.map(item => <ItemCard key={item.id} {...item} />)
      ) : (
        <Group>
          <Div>
            <Title>Корзина пуста</Title>
          </Div>
        </Group>
      )}
    </section>
  )
}
