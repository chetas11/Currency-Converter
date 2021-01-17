import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
    root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '7rem',
    },
  },
}));

export default function InputComponent(props) {
    const classes = useStyles();
    const {
    currencyOption,
    selectedCurreny,
    onChangeCurrency,
    onChangeAmount,
    amount

    } = props
    return (
        <div>
        <TextField className="currencyField" onChange={onChangeAmount} value={amount}  type="number" id="outlined-basic"  variant="outlined" />
            <Select
            className="select"
            native
            value={selectedCurreny}
            onChange={onChangeCurrency}
            >
            {   currencyOption.map((option)=>(
                    <option key={option} value={option}>{option}</option>
                    ))}
            </Select> 
        </div>
    )
}
