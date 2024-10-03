import React, { useState, useEffect } from 'react';

import { TrafficMap } from "react-network-diagrams";
import { stylesMap, edgeShapeMap, nodeSizeMap, edgeThicknessMap, edgeColorMap } from './prop'
import { constructorTopology } from './tolology/topology'

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [appStatus, setAppStatus] = useState(null);
  const [topology, setTopology] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const fetchedTopology = await constructorTopology(); // Substitua pelo seu grupo

      setTopology(fetchedTopology);
      setAppStatus(topology); // Define o status retornado
      setIsLoading(false); // Marca como carregado
    };

    loadData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 30000); // 30 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, []);
  

  if (isLoading) {
    return <div>Carregando informações...</div>; // Mensagem de carregamento
  }


  return (
    <div className="App">

      <TrafficMap
            bounds={{x1: 0, y1: 0, x2: 100, y2: 50}}
            stylesMap={stylesMap}
            edgeColorMap={edgeColorMap}
            topology={topology}
            edgeShapeMap={edgeShapeMap}
            edgeThicknessMap={edgeThicknessMap}
            nodeSizeMap={nodeSizeMap}
            edgeDrawingMethod="simple"
            style={{
              background: "#3a3d59"
            }}
            />
          
    </div>
  );
}

export default App;
