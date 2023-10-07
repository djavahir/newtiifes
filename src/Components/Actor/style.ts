import styled from "styled-components";
import { Dropdown,Space } from 'antd';
import type { MenuProps } from 'antd';



const Wrapper=styled.div`
width: 100%;
padding:100px 0;
background: black;
display: flex;
align-items: center;
justify-content: center;
`

const Container=styled.div`
max-width: 1480px;
width: 100%;
display: flex;
flex-direction: column;
gap: 30px;
`
const Dropdovn=styled(Dropdown)`
width: 250px;
border-radius: 8px;
background: #181818;
height: 44px;
border: none;
cursor: pointer;

`
const Spase=styled(Space)`  
display: flex;
justify-content: space-between;
color: white;
padding: 0 10px;
font-size: 20px;
`

const Img =styled.img`
position: relative;
height: 380px;
border-radius: 5px;
&:hover{
    border: 2px solid #EBAD2D;
}
`
const Menu=styled.div`

`

export {Wrapper,Menu,Img,Dropdovn,Spase,Container}