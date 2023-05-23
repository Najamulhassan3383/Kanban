
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import styled from 'styled-components';


function App() {
  return (
    <MainContainer>
      <NavBox>
        <NavbarContainer ><Navbar/></NavbarContainer>
      </NavBox>
      <MainBox>
      <SidebarContainer ><Sidebar/></SidebarContainer>
        <InContainer></InContainer>
        </MainBox>
   </MainContainer>
  );
}

export default App;


const MainContainer = styled.div``;
const NavbarContainer = styled.div``;
const SidebarContainer = styled.div``;
const InContainer = styled.div``;
const NavBox = styled.div``;
const MainBox = styled.div``;

