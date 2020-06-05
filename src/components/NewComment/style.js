import styled from 'styled-components'
import { colors } from '../../styles/variables'
import { lighten, darken } from 'polished'

export const WrapCommentForm = styled.div`
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  padding: 30px;
  font-size: 20px;
  color: #FFFFFF;
  background: ${lighten(.05, colors.primary)};
  border: 1px solid ${lighten(.2, colors.primary)};
  border-radius: 10px;
  margin: 0 0 15px 0;
`;
export const Button = styled.button`
  display: inline-flex;
  height: 50px;
  width: 200px;
  max-width: 100%;
  border-radius: 10px;
  justify-content: center;
  justify-self: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  padding: 30px;
  font-size: 20px;
  color: ${colors.primary};
  background: #FFFFFF;
  outline: none;
  border: 2px solid ${darken(.2, '#FFFFFF')};

  &:hover{
    background: ${lighten(.05, colors.primary)};
    border-color: ${lighten(.2, colors.primary)};
    color: #FFFFFF;
  }
`;