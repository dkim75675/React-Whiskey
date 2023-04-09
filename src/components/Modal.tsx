import DrinkForm from './DrinkForm'

type Props = {
    id?: string;
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return null;
    return (
        <div onClick={props.onClose} 
            className='w-full h-full flex overflow-auto z-1 
            justify-center align-middle bg-gray-300 bg-opacity-25'
        >
            <div
                className="max-w-600px w-2/5 flex z-1 mt-20 bg-hite shadow-xl rounded"
                onClick={(e) =>{
                    e.stopPropagation()
                }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start mt-2 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center h-full mt-2 p-2">
                        <DrinkForm id={ props.id }/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Modal
