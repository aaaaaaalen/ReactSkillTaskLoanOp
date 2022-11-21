import * as React from 'react';
import UniList from "../api/Uni.js";
import { useState } from "react";
import { DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function UniContainer() {

    const [uni, setUni] = useState([]);
    
    //load uni list from api
    const handleAllList = async () => {
      const response = await UniList();
      //console.log(response.data);
      setUni(response.data);
    }
    //get the first element in the array and add to the end of the array
    const handleAddList = async () => {
      const response = await UniList();
      const responseFirst = response.data[0];
      const responseAdd = response.data.concat(responseFirst);
      setUni(responseAdd);
    }
    //delete the last element in the array
    const handleDeleteList = async () => {
      const response = await UniList();
      const responseLength = response.data.length;
      const responseDelete = response.data.splice(0, responseLength -1);
      //console.log(responseDelete);
      setUni(responseDelete);
    }

    //define the columns to get value from api, the field name is corresponding to the row.value
    const columns = [
        { field: 'country', headerName: 'Country' , width: 100},
        { field: 'domains', headerName: 'Domains', width: 200 },
        { field: 'web_pages', headerName: 'Web Pages', width: 200},
        { field: 'alpha_two_code', headerName: 'Country Code', width: 150 },
        { field: 'name', headerName: 'University Name', width: 300 },
        { field: 'state-province', headerName: 'State', width: 100 }
      ]

    //render buttons and table
    return (
      <Box sx={{ height: '100%', width: '100%' }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Button size="small" onClick={handleAllList}>
            Load
          </Button>
          <Button size="small" onClick={handleDeleteList}>
            Delete
          </Button>
          <Button size="small" onClick={handleAddList}>
            Add
          </Button>
        </Stack>
        <div style={{ height: 800, width: 1200 }}>
          <DataGrid                 
              getRowId={uni => uni.name}
              rows={uni}
              columns={columns}
              pageSize={15} rowsPerPageOptions={[15, 30, 50]}
            />
        </div>
        
      </Box>

    );
}
export default UniContainer
