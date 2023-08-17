import React, {ChangeEvent, useState} from 'react';

import styled from 'styled-components';
import filter from '../../../../../img/filter.svg'
import {useDispatch} from 'react-redux';
import {useAppSelector} from "@/hok/useAppSelector";
import {AllState, WalletSelector} from "@/selectors/Selectors";
import {CardsReducerType} from "@/reducer/cardsReducer";



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





