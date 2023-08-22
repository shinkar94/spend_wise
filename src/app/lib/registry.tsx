'use client'

import React, {ReactNode, useState} from 'react'
import {useServerInsertedHTML} from 'next/navigation'
import {ServerStyleSheet, StyleSheetManager} from 'styled-components'

interface StyledComponentsRegistryProps {
    children: ReactNode;
}
export default function StyledComponentsRegistry({ children }: StyledComponentsRegistryProps): ReactNode {
    const [styledComponentsStyleSheet] = useState<ServerStyleSheet>(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return [styles]
    })

    if (typeof window !== 'undefined') return children

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    )
}