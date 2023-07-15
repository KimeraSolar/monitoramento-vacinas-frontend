

export async function handleSubmit(url : string, body:Object, errorMessage?:string, onSuccess?:()=>void) {
    try{
        const response = await fetch(`${process.env.REACT_APP_MONITORAVAX_URL}/${url}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if(response.status !== 200){
            throw new Error(errorMessage || "Não foi possível concluir a requisição");
        }
        const responseData = await response.json();
        if(onSuccess) onSuccess();
        return responseData;
    }catch(exception){
        alert(exception);
        throw exception;
    }
}