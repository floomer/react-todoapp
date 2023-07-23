import React, {useState} from 'react';
import './App.css';
import {ResponsiveAppBar} from "./components/ui/ResponsiveAppBar";
import {WorkspaceDesk} from "./components/ui/WorkspaceDesk";
import {MuiButton} from "./components/ui/button/MuiButton";
import {MuiModal} from "./components/ui/Modal/MuiModal";


export function App() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')



  return (
    <div className="App">
      <ResponsiveAppBar/>
        {value
            ? <WorkspaceDesk value={value}/>
            : <MuiButton
                variant={'outlined'}
            buttonName={'Add a Workspace'}
            onClick = {() => {setOpen(true)}}/>
        }
        <MuiModal setValue={setValue} open={open} value={value} onClose={() => setOpen(false)}/>
    </div>
  );
}
