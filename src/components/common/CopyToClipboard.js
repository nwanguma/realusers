import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;

  & > label {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: #77869e;
    margin-bottom: 8px;

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      font-size: 1.4rem;
    }
  }

  & > input {
    background: #f5faf6;
    border: 1px solid rgba(119, 134, 158, 0.3);
    border-radius: 4px;
    height: 48px;
    width: 81%;
    border-radius: 4px;
    padding: 1.5rem;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #77869e;
    outline: 0;
    text-decoration: none;

    &::selection {
      background-color: transparent;
    }

    @media ${({ theme }) => theme.mediaQueries.tablet} {
      width: 82%;
      height: 4.2rem;
    }

    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #77869e;

      @media ${({ theme }) => theme.mediaQueries.tablet} {
        font-size: 1.4rem;
      }
    }
  }
`;

const ButtonShare = styled.button`
  background-color: #409046;
  height: 48px;
  width: 55px;
  border-radius: 4px;
  float: right;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgOC4yNUg4Ljc2MzY3QzcuOTM1MjQgOC4yNSA3LjI1IDguOTIxNTcgNy4yNSA5Ljc1VjE2LjVDNy4yNSAxNy4zMjg0IDcuOTIxNTcgMTggOC43NSAxOEgxNS41QzE2LjMyODQgMTggMTcgMTcuMzI4NCAxNyAxNi41VjkuNzVDMTcgOC45MjE1NyAxNi4zMjg0IDguMjUgMTUuNSA4LjI1WiIgZmlsbD0iIzQwOTA0NiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMy4yNSAxMS4yNUgyLjVDMi4xMDIxOCAxMS4yNSAxLjcyMDY0IDExLjA5MiAxLjQzOTM0IDEwLjgxMDdDMS4xNTgwNCAxMC41Mjk0IDEgMTAuMTQ3OCAxIDkuNzVWM0MxIDIuNjAyMTggMS4xNTgwNCAyLjIyMDY0IDEuNDM5MzQgMS45MzkzNEMxLjcyMDY0IDEuNjU4MDQgMi4xMDIxOCAxLjUgMi41IDEuNUg5LjI1QzkuNjQ3ODMgMS41IDEwLjAyOTQgMS42NTgwNCAxMC4zMTA3IDEuOTM5MzRDMTAuNTkyIDIuMjIwNjQgMTAuNzUgMi42MDIxOCAxMC43NSAzVjMuNzUiIGZpbGw9IiM0MDkwNDYiLz4KPHBhdGggZD0iTTMuMjUgMTEuMjVIMi41QzIuMTAyMTggMTEuMjUgMS43MjA2NCAxMS4wOTIgMS40MzkzNCAxMC44MTA3QzEuMTU4MDQgMTAuNTI5NCAxIDEwLjE0NzggMSA5Ljc1VjNDMSAyLjYwMjE4IDEuMTU4MDQgMi4yMjA2NCAxLjQzOTM0IDEuOTM5MzRDMS43MjA2NCAxLjY1ODA0IDIuMTAyMTggMS41IDIuNSAxLjVIOS4yNUM5LjY0NzgyIDEuNSAxMC4wMjk0IDEuNjU4MDQgMTAuMzEwNyAxLjkzOTM0QzEwLjU5MiAyLjIyMDY0IDEwLjc1IDIuNjAyMTggMTAuNzUgM1YzLjc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 2.5rem;

  &:active {
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQwNS4yNzJweCIgaGVpZ2h0PSI0MDUuMjcycHgiIHZpZXdCb3g9IjAgMCA0MDUuMjcyIDQwNS4yNzIiIGZpbGw9IiNmZmZmZmYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwNS4yNzIgNDA1LjI3MjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTM5My40MDEsMTI0LjQyNUwxNzkuNjAzLDMzOC4yMDhjLTE1LjgzMiwxNS44MzUtNDEuNTE0LDE1LjgzNS01Ny4zNjEsMEwxMS44NzgsMjI3LjgzNg0KCQljLTE1LjgzOC0xNS44MzUtMTUuODM4LTQxLjUyLDAtNTcuMzU4YzE1Ljg0MS0xNS44NDEsNDEuNTIxLTE1Ljg0MSw1Ny4zNTUtMC4wMDZsODEuNjk4LDgxLjY5OUwzMzYuMDM3LDY3LjA2NA0KCQljMTUuODQxLTE1Ljg0MSw0MS41MjMtMTUuODI5LDU3LjM1OCwwQzQwOS4yMyw4Mi45MDIsNDA5LjIzLDEwOC41NzgsMzkzLjQwMSwxMjQuNDI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=");
  }

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 15%;
    max-width: 5rem;
    height: 4.2rem;
  }
`;

export default class CopyToClipboard extends Component {
  copyCodeToClipboard = () => {
    const el = this.input;
    el.select();
    document.execCommand("copy");
  };

  render() {
    const text = this.props.text;

    return (
      <Container>
        <input
          ref={(input) => (this.input = input)}
          value={`https://www.realusers.com/${text.toLowerCase()}`}
          type="text"
          readOnly
        />
        <ButtonShare onClick={() => this.copyCodeToClipboard()}></ButtonShare>
      </Container>
    );
  }
}
