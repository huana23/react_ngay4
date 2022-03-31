import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Component/BaiTapThucHanhLayout/HeaderComponent';
import BodyComponent from './Component/BaiTapThucHanhLayout/BodyComponent';
import BannerComponent from './Component/BaiTapThucHanhLayout/BannerComponent';
import ItemComponent from './Component/BaiTapThucHanhLayout/ItemComponent';
import FooterComponent from './Component/BaiTapThucHanhLayout/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BodyComponent/>
      <BannerComponent/>
      <ItemComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
