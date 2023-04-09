import Button from "./Button"
import Inputs from "./Inputs"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseBrand, chooseAge, chooseSize, chooseAlcohol } from "../redux/slices/RootSlice"



interface DrinkFormProps {
    id?: string[]
}

const DrinkForm = (props:DrinkFormProps) => {
    
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.make } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()
        } else {

            dispatch(chooseName(data.name));
            dispatch(chooseBrand(data.brand));
            // dispatch(chooseType(data.type));
            dispatch(chooseAge(data.age));
            dispatch(chooseSize(data.size));
            dispatch(chooseAlcohol(data.alcohol_content))

            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    
    
    
    
    
    return (
    
        
        <div>
            <form className="h-fit" onSubmit={handleSubmit(onSubmit)}>    
                <div>
                    <label htmlFor="name">Name</label>
                    <Inputs {...register('name')}name='name' placeholder='Name'/>
                </div>
                <div>
                    <label htmlFor="brand">Brand</label>
                    <Inputs {...register('brand')}name='brand' placeholder='Brand'/>
                </div>
                {/* <div>
                    <label htmlFor="type">Type</label>
                    <Inputs {...register('type')}name='type' placeholder='Type'/>
                </div> */}
                <div>
                    <label htmlFor="age">Age</label>
                    <Inputs {...register('age')}name='age' placeholder='Age'/>
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <Inputs {...register('size')}name='size' placeholder='Size'/>
                </div>
                <div>
                    <label htmlFor="alcohol_contnet">Alcohol Content</label>
                    <Inputs {...register('alcohol_content')}name='alcohol_content' placeholder='Alcohol Content'/>
                </div>
                <div className="flex p-1">
                    <Button                        
                        classname="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DrinkForm
