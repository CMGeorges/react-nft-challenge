import  axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import Main from "./components/Main";
import Footer from "./components/Footer";
import KittyList from "./components/KittyList";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [kittyListData, setKittyListData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);
  const [flag, setFlag] = useState('punk');

  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x0fe04Ac44ef8bD439Af822dDC798a7262dc53d0a&order_direction=asc&embed=true"
      );
      const openseaData2 = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x25F955AA3B6Ad6A3cd47Abd6FB55a277F751B7A0&order_direction=asc&embed=true"
      );

      setPunkListData(openseaData.data.assets)
      setKittyListData(openseaData2.data.assets)
      console.log(openseaData.data.assets);
      console.log(openseaData2.data.assets);
    };

    return getMyNFTs();
  }, []);

  return (
    <div className="app">
      <Header  />
      <Main  punkListData={punkListData} selectedCard={selectedCard} flag={flag} kittyListData={kittyListData}/>
      <PunkList  punkListData={punkListData}  setSelectedCard={setSelectedCard}  setFlag={setFlag} />
      <KittyList  kittyListData={kittyListData}  setSelectedCard={setSelectedCard}  setFlag={setFlag} />
      <Footer />
    </div>
  );
}

export default App;
