import  axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x0fe04Ac44ef8bD439Af822dDC798a7262dc53d0a&order_direction=asc"
      );

      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets)
    };

    return getMyNFTs();
  }, []);

  return (
    <div className="app">
      <Header />
      <PunkList  punkListData={punkListData}/>
    </div>
  );
}

export default App;
