import { Div, Group, Title } from "@vkontakte/vkui"
import { CartWrapper } from "../CartWrapper/CartWrapper"
import { CheckoutList } from "../CheckoutList/CheckoutList"
import { ItemsList, type Item } from "../itemsList/ItemsList"
import { ItemsListSkeleton } from "../ItemsListSkeleton/ItemsListSkeleton"
import { CheckoutListSkeleton } from "../CheckoutListSkeleton/CheckoutListSkeleton"
type status = "loading" | "success" | "error"

export const ShowDataOrError = ({
  status,
  items,
}: {
  status: status
  items: Item[]
}) => {
  switch (status) {
    case "success":
      return (
        <CartWrapper>
          <ItemsList items={items} />
          <CheckoutList items={items} />
        </CartWrapper>
      )
    case "loading":
      return (
        <CartWrapper>
          <ItemsListSkeleton />
          <CheckoutListSkeleton />
        </CartWrapper>
      )
    case "error":
      return (
        <Group>
          <Div>
            <Title level="1">Ошибка загрузки данных</Title>
          </Div>
        </Group>
      )
  }
}
