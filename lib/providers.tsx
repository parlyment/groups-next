'use client'

import React from 'react'

//a vse eti comments eto ti pishesh'? ili eto shablon

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { reduxStore } from '@/lib/redux'

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>
}
