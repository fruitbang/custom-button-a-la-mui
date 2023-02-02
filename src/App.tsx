import { Button as MuiButton } from '@mui/material';
import './App.css';
import Button from './components/Button';

function App() {
    return (
        <>
            <h1>Poshol na</h1>
            <div>
                <Button variant='contained' size='large' color='warning'/>
                <Button variant='contained' size='medium'/>
                <Button variant='contained' size='small'/>
            </div>
            <div>
                <MuiButton variant="contained" size="small" color="primary">
                    MuiButton
                </MuiButton>
                <MuiButton variant="contained" size="medium" color="warning">
                    MuiButton
                </MuiButton>
                <MuiButton disabled onClick={(e) => console.log(e)} variant="contained" size="large" color="warning">
                    MuiButton
                </MuiButton>
            </div>
        </>
    );
}

export default App;
