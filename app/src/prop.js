const problemStyle = {
    node: {
      normal: {fill: "#bf462d",stroke: "#a54531", cursor: "pointer"},
      selected: {fill: "#37B6D3", stroke: "rgba(55, 182, 211, 0.22)",
                  strokeWidth: 10, cursor: "pointer"},
      muted: {fill: "#CBCBCB", stroke: "#BEBEBE", opacity: 0.6,
              cursor: "pointer"}
    },
    label: {
      normal: {fill: "#fff", stroke: "none", fontSize: 9},
      selected: {fill: "#333",stroke: "none", fontSize: 11},
      muted: {fill: "#696969", stroke: "none", fontSize: 8,
      opacity: 0.6}
    }
  };
  
  const normalStyle = {
    node: {
      normal: {fill: "#369e32",stroke: "#337f30", cursor: "pointer"},
      selected: {fill: "#37B6D3", stroke: "rgba(55, 182, 211, 0.22)",
                strokeWidth: 10, cursor: "pointer"},
      muted: {fill: "#CBCBCB", stroke: "#BEBEBE", opacity: 0.6,
              cursor: "pointer"}
    },
    label: {
      normal: {fill: "#fff", stroke: "none", fontSize: 9},
      selected: {fill: "#333",stroke: "none", fontSize: 11},
      muted: {fill: "#696969", stroke: "none", fontSize: 8,
      opacity: 0.6}
    }
  };
  
  const stylesMap = {
    "problem": problemStyle,
    "normal": normalStyle
  };
    
  const nodeSizeMap = {
    normal: 10,
    problem: 10
  };
  
  const edgeShapeMap = {
    "SW080 - Dom Pedro 01--SW186 - Linha Aurea Paial": {
      "shape": "curved",
      "direction": "right",
      "offset": 15
    }
  }

  const edgeThicknessMap = {
    "10G": 5,
    "1G": 3,
    "100M": 1.5
};

const edgeColorMap = [
  {color: "#990000", label: ">=50 Gbps", range: [50, 100]},
  {color: "#bd0026", label: "20 - 50", range: [20, 50]},
  {color: "#cc4c02", label: "10 - 20", range: [10, 20]},
  {color: "#016c59", label: "5 - 10", range: [5, 10]},
  {color: "#238b45", label: "2 - 5", range: [2, 5]},
  {color: "#3690c0", label: "1 - 2", range: [1, 2]},
  {color: "#74a9cf", label: "0 - 1", range: [0, 1]}
];

exports.problemStyle = problemStyle
exports.normalStyle = normalStyle
exports.stylesMap = stylesMap
exports.edgeColorMap = edgeColorMap
exports.edgeThicknessMap = edgeThicknessMap
exports.nodeSizeMap = nodeSizeMap
exports.edgeShapeMap = edgeShapeMap