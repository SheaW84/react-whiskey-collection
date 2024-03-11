import { useSubmit } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";

import { useForm } from "react-hook-form";

interface WhiskeyFormProps {
    id?:string[]
}

const WhiskeyForm = (props: WhiskeyFormProps) => {
    const{register, handleSubmit} = useForm({})

    return(
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label  htmlFor="brand">Brand</label>
                <Input {...register('brand')} name='brand' placeholder="Brand"/>
            </div>
            <div>
                <label  htmlFor="variety">Variety</label>
                <Input {...register('variety')} name='variety' placeholder="Variety"/>
            </div>
            <div>
                <label  htmlFor="origin">Origin</label>
                <Input {...register('origin')} name='origin' placeholder="Origin"/>
            </div>
            <div>
                <label  htmlFor="year">Year</label>
                <Input {...register('year')} name='year' placeholder="Year"/>
            </div>
            
        </form>
        </div>
    )
}

export default WhiskeyForm