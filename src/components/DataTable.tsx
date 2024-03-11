import Button from "./Button";

import { useState } from "react";
import { server_calls } from "../api/server";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import { useGetData } from "../custom-hooks/FetchData";

// const columns: GridColDef[] = [
//     { field: 'id', headerName: "ID", width: 90, hide: true },
//     { field: 'brand', headerName: "Brand", flex: 1 },
//     { field: 'variety', headerName: "Variety", flex: 1 },
//     { field: 'origin', headerName: "Origin", flex: 1},
//     { field: 'year', headerName: "Year", flex:1} 
// ]

function DataTable() {
    let [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    } 

    const handleClose = () => {
        setOpen(false)
    }

    const getData = async () => {
        const result = await server_calls.get();
        console.log(result)
    }


  return (
    <>
        {/* <Modal 
            open={open}
            onClose={handleClose}
        /> */}
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Contact
                </button>
            </div> 
            <Button className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        {/* Data Table section */}
        <button onClick={getData}>get Data</button>
    </>
  )
}

export default DataTable