import React, { useState, useEffect } from 'react';
import './App.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { colors } from '@mui/material';

function createData(codigo, descripcion, precio) {
  return {codigo, descripcion, precio};
}

const rows = [];


function App() {
  
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos();
  }, []);

  async function getProductos() {
    const response = await fetch('http://127.0.0.1:8000/tienda/productos/?format=json');
    const datos = await response.json();
    setProductos(datos);
  }
  productos.forEach(producto => {
    rows.push(createData(producto.codigo, producto.descripcion, producto.precio));
  })
  return (
    <div>
      <TableContainer component={Paper} style={{paddingTop:20, paddingLeft:20, justifyContent:'center'}}>
      <Table sx={{ maxWidth: 100 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor: colors.blue[100], border: 1, borderColor: "rgba(128, 128, 128)"}} align="right">codigo</TableCell>
            <TableCell sx={{backgroundColor: colors.blue[100], border: 1, borderColor: "rgba(128, 128, 128)"}} align="right">descripcion</TableCell>
            <TableCell sx={{backgroundColor: colors.blue[100], border: 1, borderColor: "rgba(128, 128, 128)"}} align="right">precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{border: 1, borderColor: "rgba(128, 128, 128)"}}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: colors.blue[50] }}
            >
              <TableCell align="right">{row.codigo}</TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}

export default App;