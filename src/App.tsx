import jsonData from './data/Wine-Data.json';
import TableView from './components/TableView';
import { addGammaProperty } from './commons/Functions';

interface WineData {
  "Alcalinity of ash": number;
  "Alcohol": number;
  "Ash": number;
  "Color intensity": number;
  "Flavanoids": number;
  "Gamma": number;
  "Hue": number;
  "Magnesium": number;
  "Malic Acid": number;
  "Nonflavanoid phenols": number;
  "OD280/OD315 of diluted wines": number;
  "Proanthocyanins": string;
  "Total phenols": number;
  "Unknown": number;
}

function App() {
  
  const datawithGamma: WineData[] = addGammaProperty(jsonData);

  return (
    <div>
      <TableView transformedData={jsonData} property={'Flavanoids'}/>
      <TableView transformedData={datawithGamma} property={'Gamma'}/>
    </div>
  );
}

export default App;
