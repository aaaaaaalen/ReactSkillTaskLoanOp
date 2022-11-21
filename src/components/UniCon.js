import * as React from 'react';
import UniList from "../api/Uni.js";
import { useEffect, useState } from "react";
import { DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function UniCon() {

    const [uni, setUni] = useState([]);
  
    useEffect(() => {
      handleAllList();
    }, []);

    const handleAllList = async () => {
      const response = await UniList();
      setUni(response.data)
    }


    const columns = [
        { field: 'country', headerName: 'Country' , width: 100},
        { field: 'domains', headerName: 'Domains', width: 200 },
        { field: 'web_pages', headerName: 'Web Pages', width: 200},
        { field: 'alpha_two_code', headerName: 'Country Code', width: 150 },
        { field: 'name', headerName: 'University Name', width: 300 },
        { field: 'state-province', headerName: 'State', width: 100 }
      ]


    return (
      <Box sx={{ height: '100%', width: '100%' }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Button size="small">
            Load table
          </Button>
          <Button size="small">
            Remove a row
          </Button>
          <Button size="small">
            Add a row
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
export default UniCon
