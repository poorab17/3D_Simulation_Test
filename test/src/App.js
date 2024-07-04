
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Container, Typography, Grid, Button, Box as MUIBox, TextField } from '@mui/material';
import Cube from '../src/component/Cube';
import SphereComponent from '../src/component/Sphere';
import ConeComponent from '../src/component/Cone';
import CylinderComponent from '../src/component/Cylinder';

function App() {
  const [selectedShape, setSelectedShape] = useState('cube');
  const [parameters, setParameters] = useState({ radius: 1, height: 2, side: 4 });

  const handleChange = (event, field) => {
    const value = event.target.value;
    setParameters({ ...parameters, [field]: parseFloat(value) });
  };

  const renderShape = () => {
    switch (selectedShape) {
      case 'sphere':
         return <SphereComponent radius={parameters.radius} />;     
      case 'cone':
        return <ConeComponent height={parameters.height} radius={parameters.radius} />;
      case 'cylinder':
        return <CylinderComponent height={parameters.height} radius={parameters.radius} />;
      default:
        return <Cube side={parameters.side} />;
    }
  };

  return (
    <Container maxWidth="lg" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        3D Shape Simulation
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Control Panel</Typography>
          <MUIBox mb={2}>
            <Button
              variant="contained"
              color={selectedShape === 'cube' ? 'primary' : 'inherit'}
              onClick={() => setSelectedShape('cube')}
            >
              Cube
            </Button>
          </MUIBox>
          <MUIBox mb={2}>
            <Button
              variant="contained"
              color={selectedShape === 'sphere' ? 'primary' : 'inherit'}
              onClick={() => setSelectedShape('sphere')}
            >
              Sphere
            </Button>
          </MUIBox>
          <MUIBox mb={2}>
            <Button
              variant="contained"
              color={selectedShape === 'cone' ? 'primary' : 'inherit'}
              onClick={() => setSelectedShape('cone')}
            >
              Cone
            </Button>
          </MUIBox>
          <MUIBox mb={2}>
            <Button
              variant="contained"
              color={selectedShape === 'cylinder' ? 'primary' : 'inherit'}
              onClick={() => setSelectedShape('cylinder')}
            >
              Cylinder
            </Button>
          </MUIBox>

          {/* Input fields for parameters */}
          {selectedShape !== 'cube' && (
            <>
              <TextField
                label={selectedShape === 'sphere' ? 'Radius' : 'Radius / Base'}
                type="number"
                value={parameters.radius}
                onChange={(e) => handleChange(e, 'radius')}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{ inputProps: { min: 0 } }}
                style={{ marginBottom: '8px' }}
              />
              <TextField
                label={selectedShape === 'sphere' ? '' : 'Height'}
                type="number"
                value={parameters.height}
                onChange={(e) => handleChange(e, 'height')}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{ inputProps: { min: 0 } }}
              />
            </>
          )}

          {selectedShape === 'cube' && (
            <TextField
              label="Side Length"
              type="number"
              value={parameters.side}
              onChange={(e) => handleChange(e, 'side')}
              variant="outlined"
              fullWidth
              size="small"
              InputProps={{ inputProps: { min: 0 } }}
            />
          )}

        </Grid>
        <Grid item xs={12} md={8}>
          <div style={{ height: '500px', border: '1px solid #ccc' }}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              {renderShape()}
              <OrbitControls />
            </Canvas>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
