const log = console.log;

const queryOffice = async (id) => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve({
        id: id,
        name: 'ZeroQ'
      })
    }, 1000)
  })
}

const status = async (office) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log("office: ", JSON.stringify(office))
      resolve({
        status: true
      })
    }, 1000)
  })
}

async function getSleep() {
  const query = await queryOffice(2);
  const st = await status(query);
  console.log("status: ", JSON.stringify(st))
  print(st)
  return st;
}

const print = (data) => { console.log("print: ", data)}

export default getSleep