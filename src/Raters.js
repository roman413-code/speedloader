import React from 'react';
import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { MockBullets as mockBullets } from './MockBullets';
import { Link } from 'react-router-dom';

export default function Raters(){
    
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
            renderCell: (params) => (
              <strong>
                {params.value}
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: 16 }}
                  component={Link}
                  to={`/Raters/${params.id}`}
                >
                  Open
                </Button>
              </strong>
            ),
          },
        {
          field: 'bullet',
          headerName: 'Bullet',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 1000,
          valueGetter: (params) =>
            `${params.getValue(params.id, 'note') || ''}`
            
        },
      ];




        
    
    return(
        <div style={{ height: 400, width: '100vw', backgroundColor: 'wheat' }}>
      <DataGrid
        rows={mockBullets}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        
      />
    </div>
    )
}