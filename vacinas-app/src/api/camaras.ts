export default async function getCamaras(gerente:string){
    const result = await fetch(process.env.REACT_APP_MONITORAVAX_URL + '/' + gerente + '/camaras');
    const json = await result.json();
    console.log(json);
}