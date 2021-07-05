import { makeStyles } from "@material-ui/core/styles";

const usePortfolio= makeStyles((theme)=>({

    icon:{
        paddingTop:'56.25%',
        

    },
    card:{
        height:'auto',
       width:'300px',
        flexDirection:'row'

    },
    cardContent:{
        flexGrow:1,

    },
   
}));

export default usePortfolio