import React from "react";

class ForFun extends React.Component {
  state = {
    data: [
      {
        id: 1,
        locname: "ZEMNI A PRIPR.PRACE KOMPLEX",
        oneWorldId: "E00000",
        name: "ZEMNI A PRIPR.PRACE KOMPLEX",
        description: null,
        categoryId: 2,
        averageCostPrice: null,
        isDeleted: true,
        categoryOneWorldId: "E"
      },
      {
        id: 2,
        locname: "DEMOLICE OBJEKTU",
        oneWorldId: "E01200",
        name: "DEMOLICE OBJEKTU",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: true,
        categoryOneWorldId: "E"
      },
      {
        id: 3,
        locname: "ZAKLADANI STAVEB-KOMPLEXNI",
        oneWorldId: "E10000",
        name: "ZAKLADANI STAVEB-KOMPLEXNI",
        description: null,
        categoryId: 2,
        averageCostPrice: null,
        isDeleted: true,
        categoryOneWorldId: "E"
      },
      {
        id: 4,
        locname: "PRACE PODZEMI-RAZENE NRTM",
        oneWorldId: "E23000",
        name: "PRACE PODZEMI-RAZENE NRTM",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: true,
        categoryOneWorldId: "E"
      },
      {
        id: 5,
        locname: "PODZ.-RAZENI RAZ.MECHANIZ.",
        oneWorldId: "E25000",
        name: "PODZ.-RAZENI RAZ.MECHANIZ.",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: true,
        categoryOneWorldId: "A"
      },
      {
        id: 6,
        locname: "PODZEMI-RAZENI OST.VC.VRTU",
        oneWorldId: "E28000",
        name: "PODZEMI-RAZENI OST.VC.VRTU",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: true,
        categoryOneWorldId: "A"
      },
      {
        id: 7,
        locname: "BEDNENI",
        oneWorldId: "E31000",
        name: "BEDNENI",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "A"
      },
      {
        id: 8,
        locname: "VYZTUZ",
        oneWorldId: "E32000",
        name: "VYZTUZ",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "A"
      },
      {
        id: 9,
        locname: "OCELOVE KONSTRUKCE",
        oneWorldId: "E35000",
        name: "OCELOVE KONSTRUKCE",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 10,
        locname: "ZEDNICKE PRACE",
        oneWorldId: "E40000",
        name: "ZEDNICKE PRACE",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 11,
        locname: "OMITKY VNITRNI",
        oneWorldId: "E42000",
        name: "OMITKY VNITRNI",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "B"
      },
      {
        id: 12,
        locname: "HRUBA PODLAHA",
        oneWorldId: "E44100",
        name: "HRUBA PODLAHA",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "B"
      },
      {
        id: 13,
        locname: "KOMUNIKACE",
        oneWorldId: "E51000",
        name: "KOMUNIKACE",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "B"
      },
      {
        id: 14,
        locname: "KOLEJOVE VEDENI",
        oneWorldId: "E55000",
        name: "KOLEJOVE VEDENI",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "B"
      },
      {
        id: 15,
        locname: "MOSTY",
        oneWorldId: "E56000",
        name: "MOSTY",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 16,
        locname: "RESTAURATORSKE PRACE",
        oneWorldId: "E65000",
        name: "RESTAURATORSKE PRACE",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 17,
        locname: "IZOLACE PROTI VODE A PODLAHOVE",
        oneWorldId: "E71100",
        name: "IZOLACE PROTI VODE A PODLAHOVE",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 18,
        locname: "ZDRAVOTNI TECHNIKA",
        oneWorldId: "E72000",
        name: "ZDRAVOTNI TECHNIKA",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 19,
        locname: "SILNOPROUD",
        oneWorldId: "E74100",
        name: "SILNOPROUD",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 20,
        locname: "SLABOPROUD",
        oneWorldId: "E74200",
        name: "SLABOPROUD",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 21,
        locname: "ZAMECNICKE KONSTRUKCE",
        oneWorldId: "E76700",
        name: "ZAMECNICKE KONSTRUKCE",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 22,
        locname: "VYP.OTVORU-ODVOD TEPLA A KOURE",
        oneWorldId: "E76993",
        name: "VYP.OTVORU-ODVOD TEPLA A KOURE",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 23,
        locname: "NATERY",
        oneWorldId: "E78300",
        name: "NATERY",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 24,
        locname: "VNITRNI ZARIZENI A VYBAVENI",
        oneWorldId: "E79100",
        name: "VNITRNI ZARIZENI A VYBAVENI",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 25,
        locname: "MERENI A REGULACE",
        oneWorldId: "E79700",
        name: "MERENI A REGULACE",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 26,
        locname: "VEDENI NN",
        oneWorldId: "E87000",
        name: "VEDENI NN",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 27,
        locname: "SPECIALNI PRÁCE",
        oneWorldId: "E96000",
        name: "SPECIALNI PRÁCE",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 28,
        locname: "Zemní a přípravné práce",
        oneWorldId: "EN0101",
        name: "Zemní a přípravné práce",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 29,
        locname: "Demolice a bourání",
        oneWorldId: "EN0102",
        name: "Demolice a bourání",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: false,
        categoryOneWorldId: "E"
      },
      {
        id: 30,
        locname: "Recyklace zem-suť-beton-živice",
        oneWorldId: "EN0103",
        name: "Recyklace zem-suť-beton-živice",
        description: null,
        categoryId: 1,
        averageCostPrice: null,
        isDeleted: true,
        categoryOneWorldId: "E"
      }
    ]
  };
  fceMap = () => {
    const { data } = this.state;

    // pokud chci jedoduchou kontrolu, stačí zápis se šipkou a vrací zda ok nebo ne
    const result = data.map(x => x.categoryId === 1);

    // pokud složitější opreace, musí být za šipkou složené závorky a pak uvnitř musí být return
    const result2 = data.map(x => {
      if (x.categoryId === 1) {
        return x;
      }
      return undefined;
    });
    console.log("po mapovani", result2);
  };

  fceFilter = () => {
    const { data } = this.state;
    const result = data.filter(x => x.categoryOneWorldId === "B");
    console.log("s kategorií B", result);
  };

  fceFind = () => {
    const { data } = this.state;
    const result = data.find(x => x.categoryOneWorldId === "B");
    console.log("find kategorii B", result);
  };

  fceFilterMore = (rogerMoore = "A") => {
    //hledáme všechny prvky isDeleted: true a zároveň mají categoryOneWorldID: B
    const { data } = this.state;
    const result3 = data.filter(x => {
      if (x.isDeleted === true && x.categoryOneWorldId === rogerMoore) {
        return x;
      }
    });
    console.log(`smazané a ${rogerMoore}`, result3);
  };

  fceJesteNevim = () => {
    // projde všechny objekty v poli, najde ten co má ID5 a jemu změní description: na "dneska nemůžu pít víno" a výsledek vloží do state
    const { data } = this.state;
    const result5 = data.map(x => {
      if (x.id === 5) {
        const copy = { ...x, description: "dneska nemůžu pít víno" };
        return copy;
      }
      return x;
    });
    this.setState({ data: result5 });
    console.log("popisek ID5 se nám změnil", result5);
  };

  render() {
    this.fceMap();
    this.fceFilter();
    this.fceFind();
    this.fceFilterMore("E");
    this.fceFilterMore("A");

    return (
      <div className="wrapper">
        mksldgj vown
        <button onClick={() => this.fceJesteNevim()}> klik id 5</button>
      </div>
    );
  }
}
export default ForFun;
