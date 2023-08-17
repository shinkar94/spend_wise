import React, {ChangeEvent, useState} from 'react';
import {useAppSelector} from '../../../../../Hok/useAppSelector';
import styled from 'styled-components';
import filter from '../../../../../img/filter.svg'
import {useDispatch} from 'react-redux';
import {CardsReducerType} from '../../../../../Reducer/cardsReducer';
import {AllState, WalletSelector} from '../../../../../selectors/Selectors';

export const TableOperations = () => {
    const state = useAppSelector(AllState)
    const cardState: CardsReducerType[] = useAppSelector(WalletSelector)
    const walletName = cardState.map(el => ({value: el.name}))
    const dispatch = useDispatch()

    const [filterType, setFilterType] = useState<string>('')
    // const [tableMenu, setTableMenu] = useState<boolean>(true)
    const [dateRange, setDateRange] = useState({
        firstDate: '',
        secondDate: ''
    })
    const [dateSort, setDateSort] = useState<boolean>(false)

    const FilterDate = (e: ChangeEvent<HTMLSelectElement>) => {
        // dispatch(sortDateAC(e.currentTarget.value))
    }
    const FilterSum = (e: ChangeEvent<HTMLSelectElement>) => {
        // dispatch(sortSumAC(e.currentTarget.value))
    }

    const OnChangeTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterType(e.currentTarget.value)
    }

// Реализация фильтрации операций по инкоме и откоме
    const FilteredState = () => {
        return (filterType === 'income')
            ? state.filter(el => el.type === 'income')
            : (filterType === 'outcome')
                ? state.filter(el => el.type === 'outcome')
                : state
    }
    let filteredForRender = FilteredState()
    const FilterWallet = (nameWallet: ChangeEvent<HTMLSelectElement>) => {
        console.log(filteredForRender)
        filteredForRender.filter(el => el.wallet === nameWallet.currentTarget.value)
        // return (filterType === 'income')
        //     ? state.filter(el => el.type === 'income')
        //     : (filterType === 'outcome')
        //         ? state.filter(el => el.type === 'outcome')
        //         : state
    }
    // вызов этой функции


    // реализация фильтрации операции по диапазону дат
    const FilteredDate = () => {
        let aDate = new Date(dateRange.firstDate).getTime()
        let bDate = new Date(dateRange.secondDate).getTime()
        return dateRange.secondDate && dateRange.firstDate

            ? filteredForRender.filter(el => {
                    return (
                        new Date(el.date).getTime() >= aDate && new Date(el.date).getTime() <= bDate
                    )
                }
            )
            : filteredForRender
    }


    return (
        <TableWrapper>
            {
                // tableMenu ?


                // <div>
                //     <div>начало периода</div>
                //     <input type="date"
                //            onChange={(e) => setDateRange({...dateRange, firstDate: e.currentTarget.value})}/>
                //     <div>конец периода</div>
                //     <input type="date"
                //            onChange={(e) => setDateRange({...dateRange, secondDate: e.currentTarget.value})}/>
                //     {/*<div onClick={() => setTableMenu(!tableMenu)}> . . .</div>*/}
                // </div>


                // :
                // <div>Название таблицы
                //     <div onClick={() => setTableMenu(!tableMenu)}>...</div></div>
            }
            <Table>
                <thead>
                {
                    dateSort
                        ?
                        <tr>
                            <th colSpan={6}>
                                <div>
                                    <span>начало периода</span>
                                    <input type="date"
                                           onChange={(e) => setDateRange({
                                               ...dateRange,
                                               firstDate: e.currentTarget.value
                                           })}/>
                                    <span>конец периода</span>
                                    <input type="date"
                                           onChange={(e) => setDateRange({
                                               ...dateRange,
                                               secondDate: e.currentTarget.value
                                           })}/>
                                    <button onClick={()=> setDateSort(false)}>apply</button>
                                </div>
                            </th>
                        </tr>
                        :
                        <tr>
                            <th>
                                <div>
                                    <div onClick={() => setDateSort(true)}>date</div>

                                    <select onChange={FilterDate}>
                                        <option value={'up'}>up</option>
                                        <option value={'down'}>down</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div>
                                    name
                                </div>
                            </th>
                            <th>
                                <div>
                                    wallet
                                    <select onChange={FilterWallet}>
                                        {
                                            walletName.map((el, index) => <option key={index}
                                                                                  value={el.value}>{el.value}</option>)
                                        }
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div>
                                    type
                                    <select onChange={OnChangeTypeHandler}>
                                        <option value={'all'}>all</option>
                                        <option value={'income'}>income</option>
                                        <option value={'outcome'}>outcome</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div>
                                    category
                                    <button>
                                    </button>
                                </div>
                            </th>
                            <th>
                                <div>
                                    sum
                                    <select onChange={FilterSum}>
                                        <option value={'up'}>up</option>
                                        <option value={'down'}>down</option>
                                    </select>
                                </div>
                            </th>
                        </tr>
                }
                </thead>
                <tbody>
                {FilteredDate().map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.wallet}</td>
                            <td>{item.type}</td>
                            <td>{item.category}</td>
                            <td>{item.value}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </TableWrapper>

    );
};
const TableWrapper = styled.div`
  height: 350px;
  overflow: auto;
  min-width: 60%;
  border: 1px solid black;
  box-shadow: 2px 2px 10px black;
  border-radius: 10px;
  background: #39394B;
`

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
  overflow: hidden;
  transform: translate(0%, 0%);

  th,
  td {
    padding: 15px;

  }

  thead {
    tr {
      div {
        display: flex;
        justify-content: center;
        gap: 5px;
        flex-direction: row;
      }
    }

    th {
      background-color: #222131;
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      select {
          // background-image: url(${filter});
        // background-repeat: no-repeat;
        // background-position: center;
        // background-size: 15px;
        // background-color: transparent;
        // border: none;
        // cursor: pointer;
        appearance: none;
        background-color: #222131;
        color: white;
        background-image: url(${filter});
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: right;
        padding: 6px 24px 6px 0;
      }
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }

    td {
      position: relative;

      &:hover {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -10000px;
          bottom: -10000px;
          background-color: rgba(255, 255, 255, 0.2);
          z-index: -1;
        }
      }
    }
  }
`
// const TableWrapper = styled.div`
//   height: 350px;
//   overflow: auto;
//   min-width: 60%;
//   border: 2px solid black;
//   box-shadow: 2px 2px 10px black;
//   border-radius: 10px;
//   padding: 5px;
//   background: #39394B;
// `
//
// const Table = styled.table`
//   width: 100%;
//   border-collapse: separate;
//   border-spacing: 0;
//   text-align: center;
//
//    thead {
//
//     position: sticky;
//     top: 0;
//     background: #222131;
//     color: aliceblue;
//
//      tr th {
//       border: 1px solid white;
//
//        div {
//         display: flex;
//         justify-content: center;
//         flex-direction: column;
//
//          select {
//             // background-image: url(${filter});
//           // background-repeat: no-repeat;
//           // background-position: center;
//           // background-size: 15px;
//           // background-color: transparent;
//           // border: none;
//           // cursor: pointer;
//           appearance: none;
//           background-color: #222131;
//           color: white;
//           background-image: url(${filter});
//           background-size: 20px;
//           background-repeat: no-repeat;
//           background-position: right;
//           padding: 6px 24px 6px 0;
//         }
//       }
//
//     }
//   }
//
//    tbody tr {
//     height: 60px;
//
//      td {
//       border-left: 1px solid rgba(0, 0, 0, 0.7);
//       border-right: 1px solid rgba(0, 0, 0, 0.7);
//     }
//
//   }
// `




