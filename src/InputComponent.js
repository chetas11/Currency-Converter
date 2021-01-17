import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
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
          <input onChange={onChangeAmount} value={amount} className="form-control" type="number"></input>
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
