import styled from '@emotion/styled'

const StatsDetail = ({ stats, types }) => {
    console.log(types);
    const StatsDetail = styled.div`
        padding: 40px 20px 20px;
        background-color: #F8F1EB;
        color: #041F4F;
        font-size: 13px;
        line-height: 22px;

        .types {
            margin-bottom: 20px;
            span {
                display: inline-block;
                margin-left: 5px;
                background-color: #E5AA5B;
                padding: 3px 15px;
                text-transform: capitalize;
                border-radius: 5px;
                font-size: 12px;
                font-weight: 500;
            }
        }

        .row {
            display: flex;
            flex-wrap: wrap;

            .col {
                width: 33.33%;
                margin-bottom: 15px;

                label {
                    text-transform: uppercase;
                    font-size: 11px;
                }

                .value {
                    font-size: 17px;
                    font-weight: 500;
                }
            }
        }
    `;
    return (
        <StatsDetail className="container">
            <div className="types">
                Types:
                {
                    types.map((type) => (
                        <span>{type.type.name}</span>
                    ))
                }
            </div>
            <div className="row">
                {stats.map((response) => (
                    <div key={ response.stat.name } className="col">
                        <label>{ response.stat.name }</label>
                        <div className="value">{ response.base_stat }</div>
                    </div>
                ))}
            </div>
        </StatsDetail>
    )
}

export default StatsDetail
