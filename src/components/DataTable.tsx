import { useState } from 'react';
import Button from '../components/Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    {field: 'name', headerName: "Name", flex: 1},
    { field: 'brand', headerName: "Brand", flex: 1,},
    {field: 'age', headerName: "Age", flex: 1},
    {field: 'size', headerName: "Size", flex: 1},
    {field: 'alcohol_content', headerName: "Alcohol Content", flex: 1},
]


function DataTable(){
    const [ open, setOpen ] = useState(false);
    const { DrinkData, getData } = useGetData();
    const [  selectionModel, setSelectionModel] = useState<any>([])


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload() }, 500)
    }

    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className='flex flex-row'>
                <div>
                    <button
                        className='p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white'
                        onClick={() => handleOpen()}
                    >
                        Add new Whiskey
                    </button>
                </div>
                    <Button onClick={handleOpen} classname="p-3 bg-slate-300 m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
                    <Button onClick={deleteData} classname="p-3 bg-slate-300 m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
            </div>
            <div className={ open ? "hidden": "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
            >
                <h2 className="p-3 bg-slate-300 my-2 rounded">My Whiskey</h2>
                <DataGrid rows={DrinkData} columns={columns}
                checkboxSelection={true} 
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                />
            </div>
        </>
    )
    }
export default DataTable
