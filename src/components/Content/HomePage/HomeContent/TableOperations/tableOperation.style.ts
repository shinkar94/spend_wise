import styled from "styled-components";

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

export const S = {Table,TableWrapper}