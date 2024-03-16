import type { FC } from "react"
import { Card, Div } from "@vkontakte/vkui"
import "./CheckoutListSkeleton.css"
export const CheckoutListSkeleton: FC = () => {
  return (
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
          <div className="checkout-list-skeleton">
            {[1, 2, 3, 4].map(item => {
              return (
                <div key={item} className="checkout-item-skeleton">
                  <div className="checkout-item__title-skeleton"></div>
                  <div className="checkout-item__quantity-skeleton"></div>
                  <div className="checkout-item__total-skeleton"></div>
                </div>
              )
            })}
            <div
              style={{
                width: "150px",
                height: "20px",
                borderRadius: "15px",
                backgroundColor: "#e4e2e2",
              }}
            ></div>
          </div>
        </Div>
      </Card>
    </div>
  )
}
