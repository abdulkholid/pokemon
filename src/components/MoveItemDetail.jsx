import styled from '@emotion/styled'
import React from 'react'
import { MoveItemDetailStyle } from './MoveItemDetail.elements';

const MoveItemDetail = ({ num, move }) => {
    return (
        <MoveItemDetailStyle>
            <small>Move { num }</small>
            <div className="move">{ move.name }</div>
        </MoveItemDetailStyle>
    )
}

export default MoveItemDetail
