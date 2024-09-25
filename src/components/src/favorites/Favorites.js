import "../character-list/characterList.css";

import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

export function Favorites({ list }) {
  return (
    <main>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        list.map((char, idx) => (
          <>
            <ListItem 
              key={idx}
              alignItems="flex-start"
              className="link-target"
            >
              <ListItemText
                primary={char.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      {char.actor}
                    </Typography>
                  </React.Fragment>
                } 
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))
      }
      </List>
    </main>
  )
}