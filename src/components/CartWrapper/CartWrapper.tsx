import type { FC } from "react"
import "./CartWrapper.css"

interface CartWrapperProps {
  children: React.ReactNode
}

export const CartWrapper: FC<CartWrapperProps> = ({ children }) => {
  return <div className="cart-wrapper">{children}</div>
}
