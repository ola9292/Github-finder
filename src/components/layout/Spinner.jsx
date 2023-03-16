
import React,{Fragment} from 'react'
import spinner from '../layout/spinner.gif'

function Spinner(){
    return(
        <Fragment>
            <img src={spinner} alt="" style={{ width:"200px", margin:"auto", display:"block"}}/>
        </Fragment>
    )
}

export default Spinner;