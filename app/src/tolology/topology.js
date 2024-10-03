
const status = async (hostGroup) => {
  try {
    const response = await fetch('/problem_group_host');
    
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo');
    }
    
    const data = await response.json();

    if (data.includes(hostGroup)) {
      console.log("problem");
      return "problem";
    }
    
    console.log("normal");
    return "normal";
  } catch (error) {
    console.log("Erro ao buscar o status:", error);
    return "error";
  }
}


const constructorTopology = async () => {
  const x = 50
  const y = 25

  return {
    "description": "Simple topo",
    "name": "simple",
    "nodes": [
      {
        "label_dx": null,
        "label_dy": null,
        "label_position": "bottom",
        "name": "PE000",
        "site": 5,
        "type": await status("PE000"),
        "x": x,
        "y": y,
      },
      {
        "label_dx": null,
        "label_dy": null,
        "label_position": "left",
        "name": "PE001",
        "site": 5,
        "type": await status("PE001"),
        "x": x-10,
        "y": y-5,
      },
      {
        "label_dx": null,
        "label_dy": null,
        "label_position": "top",
        "name": "PE002",
        "site": 5,
        "type": await status("PE002"),
        "x": x,
        "y": y-10,
      },
      {
        "label_dx": null,
        "label_dy": null,
        "label_position": "right",
        "name": "PE003",
        "site": 5,
        "type": await status("PE003"),
        "x": x+10,
        "y": y-5,
      },
   ],
    "edges": [
      {
        "capacity": "10G",
        "source": "PE000",
        "target": "PE001"
      },
      {
        "capacity": "10G",
        "source": "PE001",
        "target": "PE002"
      },
      {
        "capacity": "10G",
        "source": "PE002",
        "target": "PE003"
      },
      {
        "capacity": "10G",
        "source": "PE003",
        "target": "PE000"
      }
    ]
  }
}

exports.constructorTopology = constructorTopology
