
import Button from "./Button";
import Input from "./Input";

import { useForm } from "react-hook-form";
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseVariety, chooseOrigin, chooseYear} from "../redux/slices/RootSlices"

interface WhiskeyFormProps {
    id?:string[]
}

const WhiskeyForm = (props: WhiskeyFormProps) => {
    const{register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();
    
    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
          server_calls.update(props.id[0], data)
          console.log(`Updated: ${ data.first } ${ props.id }`)
          setTimeout(() => {window.location.reload()}, 1000);
          event.target.reset();
        } else {
          dispatch(chooseBrand(data.brand));
          dispatch(chooseVariety(data.variety));
          dispatch(chooseOrigin(data.origin));
          dispatch(chooseYear(data.year));
    
          server_calls.create(store.getState())
          setTimeout(() => {window.location.reload()}, 1000);
        }
      }
    

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
            <div className="flex p-1">
            <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
                Submit
            </Button>
        </div>
            
        </form>
        </div>
    )
}

export default WhiskeyForm