import Main from '../Components/MainSection/main.jsx';
import NavBar from '../Components/NavBar/navBar';
import Footer from '../Components/Footer/footer.jsx';
import SobreMim from '../Components/SobreMim/sobremim.jsx';
import Conhecimentos from '../Components/Servicos/conhecimentos.jsx';

function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <Conhecimentos />
      <SobreMim />
      <Footer />
    </>
  );
}

export default Home;
