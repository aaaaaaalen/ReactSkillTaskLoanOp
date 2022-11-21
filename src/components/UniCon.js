import * as React from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@material-ui/core';
import UniList from "../api/Uni.js";
import { useEffect, useState } from "react";


function UniCon() {

    const [uni, setUni] = useState([]);
  
    useEffect(() => {
      handleAllList();
    }, []);

    const handleAllList = async () => {
      const response = await UniList();
      setUni(response.data)
    }

    return (
        <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Country</TableCell>
                  <TableCell>Domains</TableCell>
                  <TableCell>Web page</TableCell>
                  <TableCell>Country Code</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>State</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
          {
            uni.map((data) => (
                  <TableRow>
                      <TableCell>{data.country}</TableCell>
                      <TableCell>{data.domains}</TableCell>
                      <TableCell>{data.web_pages}</TableCell>
                      <TableCell>{data.alpha_two_code}</TableCell>
                      <TableCell>{data.name}</TableCell>
                      
                      <TableCell>{data.state-province}</TableCell>
                  </TableRow>
              ))
          }
          </TableBody>
        </Table>
    );
}
export default UniCon
