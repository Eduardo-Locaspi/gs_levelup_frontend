import MinhasDemandas from "../../../../components/EMPRESA/MinhasDemandas";


export default function Area_MinhasDemandas(){


    return(
        <div className="flex flex-col gap-6 p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-300 pb-2">Minhas demandas</h2>

            <div className="flex flex-col gap-4">
                <MinhasDemandas  />
            </div>
        </div>
    )
}