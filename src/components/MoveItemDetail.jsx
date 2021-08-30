import styled from '@emotion/styled'
import React from 'react'

const MoveItemDetail = ({ num, move }) => {
    const MoveItemDetailStyle = styled.div`
        position: relative;
        width: 45%;
        margin: 0px 2.5% 5%;
        height: 110px;
        border-radius: 20px;
        padding: 15px;
        background-color: #041F4F;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        line-height: 25px;

        .move {
            font-size: 17px;
            color: #FBD102;
            font-weight: 500;
        }
    `;
    return (
        <MoveItemDetailStyle>
            <small>Move { num }</small>
            <div className="move">{ move.name }</div>
        </MoveItemDetailStyle>
    )
}

export default MoveItemDetail
