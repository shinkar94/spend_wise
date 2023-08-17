'use client'
import {Wrapper} from "@/components/wrapper/wrapper";
import {Provider} from "react-redux";
import {store} from '@/store/store'

export default function Home() {
  return (
          <Provider store={store} >
              <Wrapper />
          </Provider>
  )
}
