drugs = {
  atorvastatin: {
    brand: 'Lipitor',
    howSupp: [10, 20, 40],
    convFact: [0.5, 0.5],
    img: 'https://www.lipitor.com/-/media/project/common/lipitorcom/images/lipitor-atorvastatin-calcium-logo.jpg?h=70&iar=0&w=280&hash=1865BF51419E873BB6982C1B1D86D9E8'
  },
  fluvastatin: {
    brand: 'Lescol',
    howSupp: [20, 40, 80],
    convFact: [4, 4]
  },
  lovastatin: {
    brand: 'Mevacor',
    howSupp: [10, 20, 40, 80],
    convFact: [2, 2]
  },
  pravastatin: {
    brand: 'Pravacol',
    howSupp: [10, 20, 40, 80],
    convFact: [2, 2]
  },
  rosuvastatin: {
    brand: 'Crestor',
    howSupp: [5, 10, 20],
    convFact: [0.125, 0.25],
    img: 'https://www.crestor.com/content/dam/website-services/us/341-crestordtc-com/images/crestor-rosuvastatin-calcium.png'
  },
  simvastatin: {
    brand: 'Zocor',
    howSupp: [5, 10, 20, 40, 80],
    convFact: [1, 1],
    img: 'img/zocor.gif'
  }
};

drugOptions = []
Object.keys(drugs).forEach(function(key) {
  drugOptions.push({
    key: key,
    label: toTitleCase(key),
    value: key
  });
});
