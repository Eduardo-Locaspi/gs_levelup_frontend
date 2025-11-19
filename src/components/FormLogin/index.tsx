import { useState } from "react"
import type { LoginType } from "../../types/LoginType"  

export default function FormLogin(){
    
    const [formValues,setFormValues] = useState<LoginType>({login:"",senha:""})

    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // De todos os campos do target, buscar apenas o name e o value
        const {name, value} = e.target
        
        // ...formvalues desconstroi o objeto em variaveis simples
        setFormValues({...formValues, [name]: value})

        // console.log("HANDLE CHANGE : "+name+","+value)
        

    }

    const handleLogin = async (e:React.FormEvent)=>{
            e.preventDefault()
            

            try{
                const login_endpoint = ""
                const response = await fetch(login_endpoint,{
                    method:"POST", // metodo
                    headers:{'Content-Type': 'application/json',}, // aceita JSON
                    // converte obj. javascript(json) em string
                    body: JSON.stringify(formValues) // oq vai para o backend
                })
            
                // se a resposta for diferente de 200(OK)
                if (!response.ok) {
                // Se o status for 401 (Não Autorizado) ou outro erro
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Falha na autenticação');
                }

        

            
            }catch (error){
                console.error("Erro no login:", error.message)
            }

            console.log("submit:" ,formValues)

            
        }
    
    
    console.log("FormValues: ",formValues)
    return(
        <form onSubmit={handleLogin} className="flex flex-col gap-2">

            {/* Campos de Login */}
            <input type="text" name="login" placeholder="Login" onChange={handleChange} value={formValues.login} className="border-2 rounded-md py-2 px-4" required/>

            <input type="password" name="senha" placeholder="Senha" onChange={handleChange} value={formValues.senha} className="border-2 rounded-md py-2 px-4" required/>


            <button type="submit" className="text-1xl my-5 bg-blue-600 p-2 rounded-md"> ENTRAR</button>
        </form>
    )
}