'use client'
import {Wrapper} from "@/components/wrapper/wrapper";
import {Provider} from "react-redux";
import {store} from '@/store/store'
import {BrowserRouter} from "react-router-dom";

export default function Home() {
  return (
      <BrowserRouter>
          <Provider store={store} >
              <Wrapper />
          </Provider>
      </BrowserRouter>
  )
}
