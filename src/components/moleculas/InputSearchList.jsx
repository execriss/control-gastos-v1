import styled from "styled-components";
export function InputSearchList({ onChange, placeholder }) {
  return (
    <Container>
      <input type="text" onChange={onChange} placeholder={placeholder} />
    </Container>
  );
}
const Container = styled.div`
  position: relative;

  input {
    background: ${({ theme }) => theme.bgtotal};
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    width: 100%;
    border: none;
    border-bottom: solid 1px grey;
    color: ${({ theme }) => theme.text};
    outline: none;

    &:focus {
      border-bottom: none;
    }

    &::placeholder {
      color: #c8c8c8;
    }
  }
`;
