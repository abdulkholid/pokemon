import styled from '@emotion/styled'
import React from 'react'
import MoveItemDetail from './MoveItemDetail';

const MovesDetail = ({ moves }) => {
    const MovesDetailStyle = styled.div`
        padding: 40px 20px 20px;

        .section-title {
            display: flex;
            justify-content: center;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 20px;

            span {
                position: relative;
                padding-bottom: 15px;

                &:before {
                    content: "";
                    position: absolute;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                    width: 55px;
                    height: 3px;
                    margin: auto;
                    background-color: #FBD102;
                }
            }
        }

        .row {
            display: flex;
            flex-wrap: wrap;
        }
    `;
    
    return (
        <MovesDetailStyle className="container">
            <h3 className="section-title"><span>Pokemon Moves</span></h3>
            <div className="row">
                {
                    moves.map((move, key) => (
                        <MoveItemDetail key={ key } num={ parseInt(key)+1 } move={ move.move }></MoveItemDetail>
                    ))
                }
            </div>
        </MovesDetailStyle>
    )
}

export default MovesDetail
