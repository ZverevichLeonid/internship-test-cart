import * as React from "react"
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
} from "@vkontakte/vkui"
import "@vkontakte/vkui/dist/vkui.css"
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { fetchItems } from "./store/cartSlice"
import { ShowDataOrError } from "./components/ShowDataOrError/ShowDataOrError"

const App = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(state => state.cart.items)
  const status = useAppSelector(state => state.cart.status)

  React.useEffect(() => {
    dispatch(fetchItems(1))
  }, [])

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Корзина</PanelHeader>
              <Group header={<Header mode="secondary">Корзина</Header>}>
                <ShowDataOrError items={items} status={status} />
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  )
}

export default App
