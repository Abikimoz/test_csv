import _ from 'lodash';

export default function solution(content){
  // BEGIN
  // console.log(content);
  const data = content.split('\r\n').slice(1);
  // console.log(data);
  const numPas = data.length-1;
  // console.log(numPas);
  const embar = data.map((row) => row.split(',').at(12));
  const embarSort = _.uniq(embar).sort().slice(1).join(', ');
  // console.log(embarSort);
  const sex = data.map((row) => row.split(',').at(5));
  // console.log(sex);
  const sexMale = sex.filter((row) => row === 'male')
  // console.log(sexMale);
  const sexFemale = sex.filter((row) => row === 'female')
  // console.log(sexFemale);
  const sexRatio = sexMale.length / sexFemale.length;
  // console.log(sexRatio);
  const survived = data.map((row) => row.split(',').at(1));
  // console.log(survived);
  const yes = survived.filter((row) => row === '1')
  // console.log(sexMale);
  const no = survived.filter((row) => row === '0')
  // console.log(sexFemale);
  const surPer = yes.length / no.length * 100;
  // console.log(surPer);
  // console.log(data);
  const name = data.map((row) => row.split(',').at(3));
  // console.log(JSON.stringify(name.slice(0, name.length-1)));
  const nameSl = name.slice(0, name.length-1);
  // const nameClearFilter = name.filter((row) => row ==! undefined)
  const nameClear = nameSl.map((row) => row.slice(1));
  // console.log(nameClear);
  // console.log(nameClear[0][0]);
  const nameA = nameClear.filter((row) => row[0] === 'A')
  // console.log(nameA);
  const nameAS = nameA.join(', ');
  console.log(nameAS);

  // END
}

