import type { FC } from "react"
import type { Item } from "../itemsList/ItemsList"
import { Card, Div, Text, Title } from "@vkontakte/vkui"
import "./CheckoutList.css"
interface CheckoutListProps {
  items: Item[]
}
export const CheckoutList: FC<CheckoutListProps> = ({ items }) => {
  const totalPrice = items.reduce((acc, item) => acc + item.total, 0)
  return (
    items.length > 0 && (
      <div>
        <Card
          mode="shadow"
          style={{
            position: "sticky",
            width: "100%",
            top: "60px",
          }}
        >
          <Div>
            <div className="checkout-list">
              {items.map(item => {
                return (
                  <div key={item.id} className="checkout-item">
                    <Text className="checkout-item__title">{item.title}</Text>
                    <Text weight="2" className="checkout-item__total">
                      {item.total}$
                    </Text>
                  </div>
                )
              })}
              <Title level="3">Итого: {totalPrice}$</Title>
            </div>
          </Div>
        </Card>
      </div>
    )
  )
}
