

export default function FormLogin(){

    const handleLogin = ()=>{


    }

    return(
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
            {/* Campos de Login */}
            <input type="text" className="border-2 rounded-md py-2 px-4"/>

            <input type="password" className="border-2 rounded-md py-2 px-4"/>


            <button type="submit" className="text-1xl my-5 bg-blue-600 p-2 rounded-md"> ENTRAR</button>
        </form>
    )
}