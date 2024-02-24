import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({
  name,
  birth_year,
  eye_color,
  gender,
  hair_color,
  height,
  skin_color,
  srcImg
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card 
      className='w-1/2 mx-auto mt-10 hover:shadow-lg transition duration-300 relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={srcImg}
          alt={name}
          className='h-94 object-cover'
          style={{width:"50vw"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='text-center'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-100">
          <Typography variant="body1" className="text-white text-center">
            <h1>Birth Year : {birth_year}</h1>
            <h1>Eye Color : {eye_color}</h1>
            <h1>Gender : {gender}</h1>
            <h1>Hair Color : {hair_color}</h1>
            <h1>Height : {height}</h1>
            <h1>Skin Color : {skin_color}</h1>
          

          </Typography>
        </div>
      )}
    </Card>
  );
}
