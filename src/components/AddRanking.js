import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoxIcon from '@material-ui/icons/AddBox';



function AddRanking(props) {

        const [joukkue, setJoukkue] = React.useState({
            nimi: '', pisteet: '', voitot: '', haviot: '', maalit: '', ottelut: ''
        });

        const [open, setOpen] = React.useState(false);

        // Avaa dialog ikkunan
        const handleClickOpen = () => {
            setOpen(true);
          };
        // Sulkee dialog ikkunan
          const handleClose = () => {
            setOpen(false);
          };

          const handleInputChange = (event) => {
            setJoukkue({...joukkue, [event.target.name]: event.target.value})

        }
        // Joukkueen tallennus tulee propsina ListRanking componentista
        const addJoukkue = () => {
            props.saveRanking(joukkue);
            handleClose();
            alert("Uusi joukkue lisätty.")
        }

    return (

        <div>
            <AddBoxIcon cursor="pointer" color="inherit" fontSize="large" text-align="left" onClick={handleClickOpen}>
            Lisää joukkue
        </AddBoxIcon>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Uusi joukkue</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="nimi"
            value={joukkue.nimi}
            onChange={e => handleInputChange(e)}
            label="Joukkueen nimi"
            fullWidth
          />
           <TextField
            margin="dense"
            name="pisteet"
            value={joukkue.pisteet}
            onChange={e => handleInputChange(e)}
            label="Pisteet"
            fullWidth
          />
            <TextField
            margin="dense"
            name="voitot"
            value={joukkue.voitot}
            onChange={e => handleInputChange(e)}
            label="Voitot"
            fullWidth
          />
            <TextField
            margin="dense"
            name="haviot"
            value={joukkue.haviot}
            onChange={e => handleInputChange(e)}
            label="Tappiot"
            fullWidth
          />
            <TextField
            margin="dense"
            name="maalit"
            value={joukkue.maalit}
            onChange={e => handleInputChange(e)}
            label="Maalit"
            fullWidth
          />
            <TextField
            margin="dense"
            name="ottelut"
            value={joukkue.ottelut}
            onChange={e => handleInputChange(e)}
            label="Ottelut (lkm)"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
             <Button onClick={handleClose} color="primary">
                Cancel
             </Button>
          <Button onClick={addJoukkue} color="primary">
                Save
          </Button>
        </DialogActions>
        </Dialog>
        </div>
    )

}

export default AddRanking;