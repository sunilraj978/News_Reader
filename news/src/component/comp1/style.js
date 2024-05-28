import {makeStyles}  from '@material-ui/core/styles'

export default makeStyles({
    container:{
        padding:'0 5%',
        width:'100%',
        margin:'0'
    },
    infocard:{
       display:"flex",
       flexDirection:"column",
       textAlign:'center',
       alignItems:'center',
      
    },
    card:{
        marginLeft:'50px',
        marginRight:'50px',
        width:'90%',
        marginTop:"10px",
        height:'45vh',
        display:'flex',
        flexDirection:'column',
        color:'white',
        justifyContent:'space-between',
        borderRadius:"10px"
    }
})